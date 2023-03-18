import Container from './Container'
import styles from './Details.module.scss'

export default function Main({ data, extra }) {
   const tvData = []
   const movieData = [
      {
         title: 'Overview',
         className: styles.Overview,
         data: data.overview,
      },
      {
         title: 'Last Air Date',
         data: data.last_air_date,
      },
      {
         title: 'Media Type',
         className: styles.Capitalize,
         data: extra.type,
      },
      {
         title: 'Status',
         data: `${data.status} - ${extra.Released}`,
      },
      {
         title: 'Runtime',
         data: data.runtime,
         more: ' mins',
      },
      {
         title: 'Awards',
         data: extra.Awards,
      },
      {
         title: 'Country',
         data: extra.Country,
      },
      {
         title: 'Production Countries',
         data: data.production_countries?.map(country => country.name + ' '),
      },
      {
         title: 'Language',
         data: extra.Language,
      },
      {
         title: 'Budget',
         data: data.budget?.toLocaleString(),
         more: ' $',
      },
   ]
   const allData = [...movieData, ...tvData]
   const map = allData.map((item, i) => {
      if (!item.data) return
      if (item.data <= 0) return
      return (
         <Container key={i} label={item.title} className={item.className}>
            {item.data} {item.more}
         </Container>
      )
   })
   return <div className={styles.Main}>{map}</div>
}
