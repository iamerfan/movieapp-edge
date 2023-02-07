import Layout from '@/components/Layout'
import 'styles/global.scss'
import 'styles/tailwind.css'
import 'styles/Home.scss'

export default function App({ Component, pageProps }) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}
