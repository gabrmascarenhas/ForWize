import { React} from 'react'
import './assinaturas.css'
import Planos from './ComponentsAssinaturas/planos.jsx'
import Header from './ComponentsAssinaturas/header.jsx'
import Button from './ComponentsAssinaturas/button.jsx'
// import Menu from './ComponentsAssinaturas/navbar.jsx'
import Navbar from '../../components/MenuSuperior/index.jsx'



function Assinaturas() {
 

  return (
    <>
    <Header/>
    {/* <Menu/> */}
    <Navbar/>
    <Planos/>
    <Button/>
    </>
  )
}

export default Assinaturas