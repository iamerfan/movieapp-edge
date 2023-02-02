import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function useInitialDispatch(action) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(action)
   }, [])
}
