import { React} from 'react'
import './assinaturas.css'
import Planos from './ComponentsAssinaturas/planos.jsx'
import Header from './ComponentsAssinaturas/header.jsx'
import Button from './ComponentsAssinaturas/button.jsx'
import Menu from './ComponentsAssinaturas/navbar.jsx'



function Assinaturas() {
 

  return (
    <>
    <Header/>
    <Menu/>
    <Planos/>
    <Button/>
    </>
  )
}

export default Assinaturas
