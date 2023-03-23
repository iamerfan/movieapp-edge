import Image from 'next/image'

export default function Test() {
   return (
      <div
         style={{
            display: 'flex',
            minHeight: '50vh',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <img
            alt=''
            width={300}
            height={300}
            src='https://image.tmdb.org/t/p/w500//ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg'
         />
      </div>
   )
}
export const getServerSideProps = async ctx => {
   console.log(process.env.URL)
   return {
      props: {
         data: null,
      },
   }
}
