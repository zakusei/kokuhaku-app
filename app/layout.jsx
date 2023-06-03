import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Messages from '@components/Messages';
import Footer from '@components/Footer';

const RootLayout = ({ children }) => {
  return (
    <html>
        <body className='bg-neutral-900'>
            <header className='fixed inset-x-0 top-0 bg-neutral-900'>
                <Navbar/>
            </header>
            <main className='container mx-auto'>
                { children }
                <Messages/>
            </main>
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout;