import '@styles/globals.css';
import Navbar from '@components/Navbar';

// import Footer from '@components/Footer';

const RootLayout = ({ children }) => {
  return (
    <html>
        <body className='bg-neutral-900'>
            <Navbar/>
            { children }
            {/* <Footer/> */}
        </body>
    </html>
  )
}

export default RootLayout;