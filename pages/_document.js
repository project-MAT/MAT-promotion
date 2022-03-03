import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>MAT</title>
          {/* Step 5: Output the styles in the head  */}
          <meta name="description" content="MAT 홍보 페이지" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="MAT" />
          <meta property="og:description" content="MAT 홍보 페이지" />
          <meta property="og:image" content="/Assets/PNG/embed.png" />
          <meta property="og:url" content="https://mat-promotion.netlify.app" />

          <meta property="twitter:card" content="summary" />
          <meta
            property="twitter:site"
            content="https://mat-promotion.netlify.app"
          />
          <meta property="twitter:title" content="MAT" />
          <meta property="twitter:description" content="MAT 홍보 페이지" />
          <meta property="twitter:image" content="/Assets/PNG/embed.png" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
