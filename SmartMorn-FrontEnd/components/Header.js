import Head from 'next/head';
import Styles from '../css/index.scss'
const Header = (props) => (

    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <link href="https://unpkg.com/ionicons@4.2.4/dist/css/ionicons.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"/>
      <style dangerouslySetInnerHTML={{__html: Styles}}/>
    </Head>

)

export default Header