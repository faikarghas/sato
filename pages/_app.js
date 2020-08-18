import React,{useEffect} from "react";
import App from "next/app";
import Router from 'next/router';
import { AnimatePresence } from "framer-motion";
import Head from 'next/head'
import NProgress from 'nprogress'

import Store from '../hocs/store'

import '../sass/main.scss'

// NProgress
Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


class MyApp extends App {
  componentDidMount() {
    Router.beforePopState(({as}) => {
      location.href = as;
    });
  }
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered

    return (
      <Store>
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Store>
    );
  }
}

export default MyApp;