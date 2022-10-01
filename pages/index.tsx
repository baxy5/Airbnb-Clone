import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Card from '../components/Card'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className='flex justify-evenly items-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </div>
  )
}

export default Home
