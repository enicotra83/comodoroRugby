import styled from 'styled-components'
import Carrousel from '../../components/carrousel/Carrousel'
import Slide1 from '../../components/carrousel/Slide1'
import Slide2 from '../../components/carrousel/Slide2'
import Slide3 from '../../components/carrousel/Slide3'

export default function Home() {
  return (
    <>
    <ImgFondo src="https://www.uar.com.ar/wp-content/themes/wpbootstrap/img/mask.png"></ImgFondo>
    <Carrousel></Carrousel>
    <HomeMobile>
    <Slide1></Slide1>
    <Slide2></Slide2>
    <Slide3></Slide3>
    </HomeMobile>
    </>
  )
}

const ImgFondo = styled.img`
height: calc(100vh - 100px);
position: absolute;
align-self:flex-start;
margin-top: 10px;
@media only screen and (max-width: 767px) {
  display:none;}

`

const HomeMobile = styled.div`
display: none;
@media only screen and (max-width: 767px) {
  display:flex;
flex-direction: column;
margin-top: 50px;
align-items: center;}

`