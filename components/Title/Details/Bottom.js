import Image from 'next/image'
import styles from './Details.module.scss'
import React from 'react'
import ImdbLogo from 'public/imdb-icon.svg'
import Metacritic from 'public/Metacritic.svg'
import RottenTomatoes from 'public/Rotten_Tomatoes.svg'

export default function Bottom({ data, extra }) {
   return (
      <div className={styles.Bottom}>
         {extra.Ratings?.map((item, i) => {
            return (
               <div key={i}>
                  {item.Source === 'Internet Movie Database' && (
                     <Image src={ImdbLogo} width={20} height={20} alt='' />
                  )}
                  {item.Source === 'Metacritic' && (
                     <Image src={Metacritic} width={20} height={20} alt='' />
                  )}
                  {item.Source === 'Rotten Tomatoes' && (
                     <Image src={RottenTomatoes} width={20} height={20} alt='' />
                  )}
                  {item.Value}
               </div>
            )
         })}
      </div>
   )
}
