import React from 'react';
import withRedux from 'next-redux-wrapper';
import createStore from './createStore';
import Layout from '../components/Layout';

export default (mapStateToProps, mapDispatchToProps) => (Comp) => {   
    const PagesLayout = props => (
        <Provider store={props.store}>
            <Layout>
                <Comp {...props} />
            </Layout>
        </Provider>
    );

    PagesLayout.getInitialProps = async (data) => {
        if (Comp.getInitialProps) {
            await Comp.getInitialProps(data);
        }
    };

    return withRedux(
        createStore,
        mapStateToProps,
        mapDispatchToProps
    )(PagesLayout);
};