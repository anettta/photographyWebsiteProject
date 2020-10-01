import React, { Component } from 'react'
import logo from '../images/logo.png'
import {FaAlignRight} from 'react-icons/fa'
import {FaLuggageCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from "./Button";

export default class NavBar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
       
                        {/* <Link to="/">A.G.</Link> */}
                 
{                    
                   <Link to="/">
                       <img src={logo} alt="nature" />
                    
                        
                    
</Link>}
                    
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav--icon" />
                       
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Gallery</Link>
                    </li>
                    
                    
                   
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer >
                        <span className="mr-2">
                        <FaLuggageCart /> my cart </span>
                    </ButtonContainer>
                </Link>
            </div>
           
        </nav>
    }
}


