import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }
    render() {
        return (
            <Html lang="id">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" /> */}

                    {/* OPEN GRAP */}
                    <meta name="keywords" content="dignite,dignite.studio,dignite studio,dignitestudio,Agensi digital,Website bisnis,Desain website,Aplikasi android,Aplikasi IOS,Website e-commerce,Website bisnis,Jasa pembuatan website,Jasa desain website,Buku tahunan sekolah,jasa desain grafis,Agensi digital jakarta,jasa bikin aplikasi" />
                    <meta name="author" content="Dignite Studio"/>
                    <meta name="copyright" content="Dignite Studio" />
                    <meta name="creator" content="Dignite Studio" /> 
                    {/* favicon */}
                    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


