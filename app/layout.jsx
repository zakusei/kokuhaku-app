import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Messages from '@components/Messages';

const RootLayout = ({ children }) => {
  return (
    <html>
        <body className='bg-neutral-900'>
            <header className='bg-neutral-900'>
                <Navbar/>
            </header>
            <main className='container mx-auto'>
                { children }
                <Messages/>
            </main>
        </body>
    </html>
  )
}

export default RootLayout;