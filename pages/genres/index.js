export default function Genres() {
   return
}

export const getServerSideProps = async ctx => {
   return {
      redirect: {
         permanent: false,
         destination: `/genres/movie/28/1/popularity.desc`,
      },
      props: {},
   }
}
