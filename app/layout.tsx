import Link from 'next/link'
import NavBar from './components/NavBar'

import './globals.css'

export const metadata = {
  title: 'Jack',
  description: "Jack's Portfolio Site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
  
    <html data-theme="dark" lang='en'>


    <body>
    <div className='flex flex-col justify-center items-start mt-6 mb-24 px-6'>
    <div className="flex w-full md:w-[90%] lg:w-[80%] flex-col mx-auto">
<NavBar />
      
      {children}
      </div></div>
      
      </body>
   
    </html>
  )
}
