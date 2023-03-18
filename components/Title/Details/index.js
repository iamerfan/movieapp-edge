import styles from './Details.module.scss'
import Image from 'next/image'
import Top from './Top'
import Main from './Main'
import Bottom from './Bottom'
import Poster from './Poster'

export default function Details({ data, extra }) {
   return (
      <div className={styles.Details}>
         <Poster path={data.poster_path} />
         <Top data={data} extra={extra} />
         <Main data={data} extra={extra} />
         <Bottom data={data} extra={extra} />
      </div>
   )
}
