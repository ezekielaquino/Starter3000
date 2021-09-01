import Document, {Head, Html, Main, NextScript} from 'next/document';

class Site extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Note: uncomment to preload custom fonts, replace with correct path to asset */}
          {/* <link
            rel="preload"
            href="/fonts/pathToFont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Site;
