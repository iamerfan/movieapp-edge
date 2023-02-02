import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'
import styles from './Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Login, Logout } from 'libs/redux/userReducer'

export default function Collapsible() {
   const user = useSelector(state => state.user)
   const dispatch = useDispatch()

   const handleLogin = () => {
      if (user.isLogged) {
         dispatch(Logout())
      }
      if (!user.isLogged)
         dispatch(Login({ id: '1', username: 'Erfan', name: 'عرفان', isLogged: true }))
   }
   return (
      <Navbar collapseOnSelect expand='lg' bg='light' sticky='top' variant='light'>
         <Container fluid className={styles.Navbar}>
            <Link href='/' className={styles.Logo}>
               Next Js Example
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
               <Nav className='me-auto'>
                  <Nav.Link href='#features'>Features</Nav.Link>
                  <Nav.Link href='#pricing'>Pricing</Nav.Link>
                  <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                     <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                     <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                     <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
               <Nav>
                  <div onClick={handleLogin} className={styles.Login}>
                     {user.isLogged
                        ? ` ${user.name ? user.name : user.username}  خوش آمدید `
                        : 'ورود'}
                  </div>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}
