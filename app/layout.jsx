import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Provider
 from '@components/Provider';
// import Footer from '@components/Footer';

const RootLayout = ({ children }) => {
  return (
    <html>
        <body className='bg-neutral-900'>
          <Provider>
            <Navbar/>
            { children }
            {/* <Footer/> */}
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout;