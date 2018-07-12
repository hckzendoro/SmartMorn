import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
    	const { html, head, errorHtml, chunks } = renderPage();
    	return { html, head, errorHtml, chunks };
  	}
    render () {   
      	const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();
        return (
			<html lang="th">
				<Head>
					<title>My Pages</title>
					{styleTags}
				</Head>
				<body>
					{main}
					<NextScript />
				</body>	
			</html>
        )
  	}
}