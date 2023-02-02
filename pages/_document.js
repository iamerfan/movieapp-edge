import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>
            <script
               src='https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
               crossOrigin='true'></script>
            <link
               rel='stylesheet'
               href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
               integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
               crossOrigin='anonymous'
               referrerPolicy='no-referrer'
            />
            <link
               rel='stylesheet'
               href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
               integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65'
               crossOrigin='anonymous'
            />
         </Head>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   )
}
