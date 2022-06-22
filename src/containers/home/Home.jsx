import styled from 'styled-components'
import Carrousel from '../../components/carrousel/Carrousel'

export default function Home() {
  return (
    <>
    <ImgFondo src="https://www.uar.com.ar/wp-content/themes/wpbootstrap/img/mask.png"></ImgFondo>
    <Carrousel></Carrousel>
    </>
  )
}

const ImgFondo = styled.img`
height: calc(100vh - 100px);
position: absolute;
align-self:flex-start;
margin-top: 10px;
*z-index:5`