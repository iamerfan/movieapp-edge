import Link from 'next/link'
import { Login, Logout } from 'libs/redux/userReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Colapsiable() {
   const handleLogin = () => {
      if (user.isLogged) {
         dispatch(Logout())
      }
      if (!user.isLogged)
         dispatch(Login({ id: '1', username: 'Erfan', name: 'عرفان', isLogged: true }))
   }
   const user = useSelector(state => state.user)
   const dispatch = useDispatch()

   return
}
