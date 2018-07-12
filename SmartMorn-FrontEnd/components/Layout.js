import React, { Component } from 'react';
import { Container } from 'reactstrap'
import styled, { injectGlobal } from 'styled-components';
import Headers from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

injectGlobal `
    body {
        background-color: #f1f1f1 !important;
    }
`

 export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Headers title={this.props.title}/>
                
                { this.props.Navbar == true ?  <Navbar/> : ''}
                <Container>
                    { this.props.children }
                </Container>
                <Footer/>
            </div>
        )
    }
}

