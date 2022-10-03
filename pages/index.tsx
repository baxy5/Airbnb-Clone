import { useContext, createContext } from 'react'
import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Card from '../components/Card'

const airbnbData = createContext(null)

const Home: NextPage<any> = ({ props }) => {
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
              <airbnbData.Provider value={props} >
                <Card />
              </airbnbData.Provider>
            )
          }
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9a8241203emsh8920e283d15e6dfp166399jsn123704313bb7',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
  };

  const res = fetch("https://airbnb19.p.rapidapi.com/api/v1/getLanguages", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export default Home
