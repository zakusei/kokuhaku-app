import '@styles/globals.css';
import Navbar from '@components/Navbar';

const RootLayout = ({ children }) => {
  return (
    <html>
        <body className='bg-neutral-900'>
          <Navbar/>
          { children }
        </body>
    </html>
  )
}

export default RootLayout;