import React, {useState} from 'react'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/data'
import Navbar from '../Navbar'
import Services from '../Services'
import Sidebar from '../Sidebar'
import SignIn from '../SignIn'
import { ThemeProvider } from 'styled-components'
import  {lightTheme} from '../Table/theme'
import Table from '../Table/Table'
import data from '../Table/Table'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



  return (
    <>
    <Sidebar isOpen= {isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services/>
    <InfoSection {...homeObjThree}/>
     <Footer/>  
     {/* <SignIn/> */}
     {/* <ThemeProvider theme={lightTheme}>
     <Table data={data}/>
     </ThemeProvider> */}
    </>
  )
}

export default Home