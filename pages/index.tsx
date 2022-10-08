import { useContext, createContext } from 'react'
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Card from '../components/Card'

const airbnbData = createContext("")

const Home: NextPage<any> = () => {
  return (
    <div>
      <Layout>
        <div className='flex justify-evenly items-center sm:flex-wrap md:px-20 py-10 gap-4'>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
          {/* TODO: solution for key error */}
          {
            Array(20).fill(
              <airbnbData.Provider value="Germany">
                <Card />
              </airbnbData.Provider>
            )
          }
        </div>
      </Layout>
    </div>
  )
}


export default Home
