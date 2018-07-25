import Head from 'next/head';
import stylesheet from '../css/index.scss';


const Header = (props) => (

    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="preload" as="style" href="https://unpkg.com/ionicons@4.2.4/dist/css/ionicons.min.css" />
      <link rel="stylesheet"  href="https://unpkg.com/ionicons@4.2.4/dist/css/ionicons.min.css" />
      <link rel="preload" as="style" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"/>
      <link rel="stylesheet"  href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"/>
      <style dangerouslySetInnerHTML={{
            __html: stylesheet
          }}
      />
    </Head>

)

export default Header