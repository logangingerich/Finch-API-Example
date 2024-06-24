import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ArrowRightIcon, ArrowDownIcon, DownloadIcon } from '@heroicons/react/outline'
import { FinchConnect } from './finch-connect'
import { classNames } from '../util/classnames'
import { baseUrl } from '../util/constants'
import Image from 'next/image'

const navigation = [
  { name: 'Connection', href: '/connection', download: false, current: false },
  { name: 'Company', href: '/company', download: true, downloadLink: "/api/finch/download/company", current: false },
  { name: 'Directory', href: '/directory', download: true, downloadLink: "/api/finch/download/organization", current: false },
  { name: 'Payroll', href: '/payroll', download: true, downloadLink: "/api/finch/download/payroll", current: false },
  { name: 'Flatfile', href: '/flatfile', download: true, downloadLink: "/api/finch/download/flatfile", current: false },
]

const finchOptions = {
  embedded: true,
  products: ["company", "directory", "individual", "employment", "payment", "pay_statement", "benefits"],
  redirect_uri: process.env.NEXT_PUBLIC_FINCH_REDIRECT_URI,
  sandbox: true
}

export default function NavBar() {
  const { embeddedFinchConnect, redirectFinchConnect } = FinchConnect()
  const createNewSandbox = async (payroll_provider: string) => {
    const sandbox = await fetch(baseUrl + "/api/finch/sandbox/" + payroll_provider)
    if (sandbox) window.location.assign('/connection');
  }


  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className=" mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch ">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="/img/finch-logo.png"
                    alt="Finch Logo"
                  />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div className='flex items-center'>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600',
                            'pl-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full" />

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
