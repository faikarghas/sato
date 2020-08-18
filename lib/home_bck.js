import React from 'react'
import Head from 'next/head'

export const config = { amp: true }

const Index = () => {

    function test(params) {
        window.location.href="/en/project"
        console.log('asdsa');
    }
    return (
        <React.Fragment>
             <Head>
                <title>SATO</title>
            </Head>
            <amp-story 
                standalone="" 
                supports-landscape=""
                title="Stories in AMP - Hello World"
                publisher="AMP Project"
                publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
                poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
                poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
                poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
                >

                <amp-story-page id="page-1">
                    <amp-story-grid-layer template="fill">
                    <amp-img src="/static/sato-bg.jpg"
                    width="1920"
                    height="1277" layout="responsive"></amp-img>
                    </amp-story-grid-layer>
                    <amp-story-grid-layer template="vertical" position="landscape-half-left">
                        <amp-img
                        alt="logo sato"
                        src="/static/logo-sato.svg"
                        width="170px"
                        height="170px"
                        className="logo"
                        >
                        </amp-img>
                    </amp-story-grid-layer>
                    <amp-story-grid-layer template="thirds">
                        <h1 grid-area="lower-third">BUILDING <br/>WITHIN YOUR <br/>FRAME</h1>
                    </amp-story-grid-layer>
                    <amp-story-grid-layer template="thirds">
                        {/* <a className="linkarrow" grid-area="lower-third" href="/en/project" align-self="end" justify-self="end"> */}
                            <div className="linkarrow"  role="" tabIndex="" on="tap:console.log('123')">
                            <amp-img
                                alt="logo sato"
                                src="/static/arrow.png"
                                width="20"
                                height="32"
                                className="logolink"
                            >
                            </amp-img>
                            </div>
                        {/* </a> */}
                    </amp-story-grid-layer>
                </amp-story-page>
                {/* <amp-story-bookend src="https://amp.dev/static/samples/json/bookend.json" layout="nodisplay">
                </amp-story-bookend> */}
                <style jsx>{`
                    h1 {
                        color: white;
                        font-family: "Futura-Light-font";
                        font-size:3rem;
                        margin-left:2rem;
                    }
                    .logo{
                        margin-left:2rem;
                    }
                    .linkarrow{
                        margin-right:2rem;
                        position: absolute;
                        right: 30%;
                        bottom: 40%;
                    }
                    .logolink{
                        width:20px;
                        height:32px;
                    }
                    .amp-carousel-button { display: none }
                    [orientation=landscape] [position=landscape-half-left] {
                        width: 50%;
                        left: 2%;
                        right: auto;
                    }
                    @font-face {
                        font-family: "Futura-Light-font";
                        src:
                            url('/fonts/Futura-Light-font.woff') format('woff')
                    }
                `}</style>
            </amp-story>
        </React.Fragment>
    )
}

export default Index
