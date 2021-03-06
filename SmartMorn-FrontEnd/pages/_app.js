import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../redux/store';
import { Provider } from 'react-redux';
class CustomApp extends App {
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
            }
        };
    }
    componentDidMount() {
        console.log('mount');
    }
    render() {
        const {Component, pageProps, store } = this.props
        console.log(store);
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}
export default withRedux(initStore)(CustomApp)