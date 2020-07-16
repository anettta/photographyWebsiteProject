import React, { Component } from "react";
import Title from "../components/Title";
import { RoomContext } from "../context";
import Room from "../components/Room";
import Loading from "../components/loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured photographs" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms} 
        </div>
      </section>
    );
  }
}
