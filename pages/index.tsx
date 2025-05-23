import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
const navigation = [
  { name: 'Monitor Logs', href: '#' },
  { name: 'Track System', href: '#' },

]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<>
<div className="" style={{backgroundColor:"#1446A0", height:'100vh'}}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div style={{backgroundColor:"#1446A0"}} className="hidden  lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
                    href="/accounts/login"
                    className="-mx-3  bg-white  rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-800 hover:bg-blue-50"
                  >
                    Log in
                  </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" style={{backgroundColor:"#1446A0"}} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div style={{backgroundColor:"#1446A0"}}  className="fixed inset-0 z-50" />
          <Dialog.Panel style={{backgroundColor:"#1446A0"}}  className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div style={{backgroundColor:"#1446A0"}}  className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div  className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                    
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white semibold tracking-tight hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/accounts/login"
                    className="-mx-3  bg-white  rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-800 hover:bg-blue-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header> <br/>
      <section style={{backgroundColor:"#1446A0", color:'white'}} className="" >
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center p-5 lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">System Event & Log Analyzer</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 semibold lg:mb-8 md:text-lg lg:text-xl text-white">Visualization of system event logs, realtime monitoring of data packets.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-blue-800 rounded-lg bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
               
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg" >
                Track system 
            </a> 
        </div>
        <div className="lg:mt-0 lg:col-span-7 p-5 lg:flex">
            <img src="/log-img-2.jpg" alt="mockup"/>
        </div>                
    </div>
</section>
     
</div>


   
</>

  )
}
