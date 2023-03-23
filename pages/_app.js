//for commit only 

import Layout from '@/components/Layout'
import 'styles/global.scss'
import 'styles/Home.scss'

export default function App({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}
