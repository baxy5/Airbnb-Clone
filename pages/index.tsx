import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Card from '../components/Card'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Card />
      </Layout>
    </div>
  )
}

export default Home
