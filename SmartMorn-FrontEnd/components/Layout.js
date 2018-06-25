import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Headers from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const MarginTop = styled.div`
  margin-top: 5%;
`;



 export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        console.log(this.props.title);
        const { store } = this.props;
        return (
         <div>
                <Headers title={this.props.title}/>
                <Navbar/>
                <MarginTop>
                    <div className="container">
                        { this.props.children }
                    </div>
                </MarginTop>
                <Footer/>
         </div>
        )
    }
}
//@connect()(Layout);
