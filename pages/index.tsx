import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar'
import { FinchConnect } from '../components/finch-connect'

const Home: NextPage = () => {
  const { embeddedFinchConnect, redirectFinchConnect } = FinchConnect()
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Finch Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center mt-28 flex-grow">
        <h1 className="text-6xl font-bold text-indigo-600">
          Finch API Responses
        </h1>

        <p className="mt-3 text-2xl max-w-xl">
          Use the dropdown on the top right to navigate between data sets
        </p>
        <br></br>
        <div className="flex-shrink-0 flex items-center">
          <img
            className="lg:block h-96 w-auto hover:scale-150 transition-all duration-500"
            src="/img/whiteboard.png"
            alt="Whiteboard"
          />
        </div>
      </main>
    </div>
  )
}

export default Home
