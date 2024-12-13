import React from 'react'
import Layout from '../../components/layout/Layout'
import SectionOne from './components/sectionOne/SectionOne'
import SectionTwo from './components/sectionTwo/SectionTwo'
import Products from './components/products/Products'
import SectionFour from './components/sectionFour/SectionFour'


const Home = () => {
  return (
    <Layout>
        <SectionOne/>
        <SectionTwo/>
     <Products/>
     <SectionFour/>
    </Layout>
    
  )
}

export default Home