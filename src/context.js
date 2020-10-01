import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentful";
Client.getEntries({
  content_type: "naturephotography"
}).then(response => console.log(response.items));

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    canvas: false,
    availability: false,
    //inCart:false,
    count:0,
    total:0,
    cart: [],
    modalOpen: false,
    cartSubTotal:0,
    cartTax: 0,
    cartTotal: 0
    
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "naturephotography",
        order: "-sys.createdAt"
      });
      let rooms = this.formatData(response.items);

      let featuredRooms = rooms.filter(room => room.featured === true);
      //
      let maxPrice = Math.max(...rooms.map(item => item.price));
      // let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        modalPhoto:rooms,
        inCart: false,
        //
        price: maxPrice,
        maxPrice
        // maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
   
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      // capacity,
      price,
      // minSize,
      // maxSize,
      // canvas,
      // availability
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    // capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    // if (capacity !== 1) {
    //   tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    // }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    // tempRooms = tempRooms.filter(
    //   room => room.size >= minSize && room.size <= maxSize
    // );
    //filter by breakfast
    // if (canvas) {
    //   tempRooms = tempRooms.filter(room => room.canvas === true);
    // }
    //filter by pets
    // if (availability) {
    //   tempRooms = tempRooms.filter(room => room.availability === true);
    // }
    this.setState({
      sortedRooms: tempRooms
    });
  };



addToCart = (slug) => {
  let tempItems = [...this.state.rooms];
  const index = tempItems.indexOf(this.getRoom(slug));
  const item = tempItems[index];
  item.inCart = true;
  item.count = 1;
  const price = item.price;
  item.total = price;
  this.setState(()=>{
    return {rooms:tempItems, cart:[...this.state.cart, item]}
  },
  () => {
   this.addTotals();
  }
  );
};

openModal = (slug) => {
  const item = this.getRoom(slug);
  this.setState(()=>{
    return {modalPhoto:item, modalOpen:true}
  });
};

closeModal = () => {
  this.setState(()=>{
    return {modalOpen:false};
  });
};

increment = (slug) => {
  let tempCart = [...this.state.cart]; //now I have state values from the cart
  const selectedPhoto = tempCart.find(item=>item.slug === slug);
  const index = tempCart.indexOf(selectedPhoto);
  const photo = tempCart[index]; //access to a specific photo
  photo.count = photo.count + 1;
  photo.total = photo.count * photo.price;
   // ship back to the state 
   this.setState(()=>{return{cart:[...tempCart]};},()=>{this.addTotals();}); // includes callback function
};

decrement = (slug) => {
  let tempCart = [...this.state.cart]; //now I have state values from the cart
  const selectedPhoto = tempCart.find(item=>item.slug === slug);
  const index = tempCart.indexOf(selectedPhoto);
  const photo = tempCart[index]; //access to a specific photo
  photo.count = photo.count - 1;
  if(photo.count === 0){
    this.removeItem(slug);
  }else {
    photo.total = photo.count * photo.price;
    this.setState(
      ()=>{
        return{cart:[...tempCart]};
      },
      ()=>{
        this.addTotals();
      });
  }
};

removeItem = (slug) => {
  let tempPhotos = [...this.state.rooms];
  let tempCart = [...this.state.cart];

  tempCart = tempCart.filter(item => item.slug !== slug);

  const index = tempPhotos.indexOf(this.getRoom(slug));
  let removedPhoto = tempPhotos[index];
  removedPhoto.inCart = false;
  removedPhoto.count = 0;
  removedPhoto.total = 0;

  this.setState(()=>{
    return {
      cart:[...tempCart],
      rooms:[...tempPhotos]
    }
  },()=>{
    this.addTotals();
  });

};

clearCart = () => {
  this.setState(()=>{
    return {cart:[]};
  }, ()=>{
    this.getData();
    this.addTotals();
  });
};

addTotals = () => {
  let subTotal = 0;
  this.state.cart.map(item => (subTotal += item.total));
  const tempTax = subTotal * 0.1; //10% tax
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax;
  this.setState(()=>{
    return {
      cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total
    }
  })
}



  render() {
    return (
      <RoomContext.Provider
        value={{  // this is an object
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
