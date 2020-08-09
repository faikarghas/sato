const express       = require('express');
const next          = require('next');
const compression   = require('compression')
const cookieParser = require('cookie-parser');
// const enforce = require('express-sslify');
const routes = require('./routes')
require('dotenv').config()
const port      = process.env.PORT || 3013;
const dev       = process.env.NODE_ENV !== 'production';
const app       = next({dev});
const handle    = routes.getRequestHandler(app);



const sitemapOptions = {
    root: __dirname + '/static/sitemap/',
    headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
    }
};

const robotsOptions = {
    root: __dirname + '/static/robots/',
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
    }
};

const faviconOptions = {
    root: __dirname + '/static/',
    headers: {
        'Content-Type': 'image/x-icon'
    }
};

app.prepare()
.then(()=>{
    const server = express()
    server.use(compression());
    server.use(cookieParser());
    // if( process.env.NODE_ENV === 'production' ) server.use(enforce.HTTPS({ trustProtoHeader: true }))


    server.get('/en/project', (req, res) => {
        const actualPage = '/en/project'
        const queryParams = { }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/project', (req, res) => {
        const actualPage = '/id/project'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/project/:project', (req, res) => {
        const actualPage = '/en/project/[project]'
        const queryParams = { project : req.params.project }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/project/:project', (req, res) => {
        const actualPage = '/id/project/[project]'
        const queryParams = {  project : req.params.project }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/offices', (req, res) => {
        const actualPage = '/en/offices'
        const queryParams = { }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/offices', (req, res) => {
        const actualPage = '/id/offices'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/retails', (req, res) => {
        const actualPage = '/en/retails'
        const queryParams = { }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/retails', (req, res) => {
        const actualPage = '/id/retails'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/resedentials', (req, res) => {
        const actualPage = '/en/resedentials'
        const queryParams = { }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/resedentials', (req, res) => {
        const actualPage = '/id/resedentials'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/show-units', (req, res) => {
        const actualPage = '/en/show-units'
        const queryParams = { }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/show-units', (req, res) => {
        const actualPage = '/id/show-units'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/about-sato', (req, res) => {
        const actualPage = '/en/about-sato'
        const queryParams = { }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/tentang-sato', (req, res) => {
        const actualPage = '/id/about-sato'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/studies', (req, res) => {
        const actualPage = '/en/studies'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/pembelajaran', (req, res) => {
        const actualPage = '/id/studies'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/intouch', (req, res) => {
        const actualPage = '/en/intouch'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/intouch', (req, res) => {
        const actualPage = '/id/intouch'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/career', (req, res) => {
        const actualPage = '/en/career'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/karir', (req, res) => {
        const actualPage = '/id/career'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('/en/contact', (req, res) => {
        const actualPage = '/en/contact-faq'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })
    server.get('/id/kontak', (req, res) => {
        const actualPage = '/id/contact-faq'
        const queryParams = {  }
        return app.render( req, res, actualPage, queryParams )
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err =>{
        if (err) throw err
        console.log(`> Ready on ${port}`);
    })
})
.catch(ex=>{
    console.error(ex.stack);
    process.exit(1)
})
