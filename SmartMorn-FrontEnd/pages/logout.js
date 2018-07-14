import React from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.Logout = this.Logout.bind(this);
    }
    Logout() {
        localStorage.removeItem('SmartMornKey');
        Router.push('/login');
    }
    componentDidMount() {
        this.Logout(); 
        return {}; 
    }
    render() {
        return (
            <Layout title="SmartMorn V1 - Logout" Navbar="false">

            </Layout>
        )
    }
}