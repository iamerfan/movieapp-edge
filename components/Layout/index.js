import Head from './Head'
import Header from './Header'
import { Provider } from 'react-redux'
import { store, persistor } from 'libs/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import initialNprogress from 'libs/initialNprogress'

export default function Layout({ children }) {
   initialNprogress()
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Head />
            <div className='RootLayout'>
               <Header />
               {children}
            </div>
         </PersistGate>
      </Provider>
   )
}
