import React from 'react'
import { NextPage } from 'next'
import Error from 'next/error'
// import { getDisplayName } from 'next-server/dist/lib/utils'
import { isLocale, Locale } from '../translations/types'
import { LocaleProvider } from '../context/LocaleContext'

const WithLocale =  (WrappedPage) => {
  const WithLocale= ({ locale, ...pageProps }) => {
    if (!locale) {
      // no valid locale detected
      return <Error statusCode={404} />
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    )
  }

  WithLocale.getInitialProps = async ctx => {
    // retrieve initial props of the wrapped component
    let pageProps = {}
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx)
    }

    if (typeof ctx.query.lang !== 'string' || !isLocale(ctx.query.lang)) {
      // in case the value of 'lang' is not a valid locale return it as undefined
      return { ...pageProps, locale: undefined }
    }

    // the locale is valid
    return { ...pageProps, locale: ctx.query.lang }
  }

  // pretty display name for the debugger
//   WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`

  return WithLocale
}

export default WithLocale