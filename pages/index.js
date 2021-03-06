import React from 'react'
import Head from 'next/head'
import { getInitialLocale } from '../translations/getInitialLocale'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const Index = () => {
  const router = useRouter()
  React.useEffect(() => {
    window.location.href = `/en`
    console.log('te');
  })
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Index