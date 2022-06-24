import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import './Carrousel.css'
import carousel1 from '../../assets/statics/fondoCanchaEscudo.png'
import proximaFechaRugby from '../../assets/statics/proximaFechaRugby.png'
import proximaFechaHockey from '../../assets/statics/proximaFechaHockey.png'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

export default function Carrousel() {
  return (
    <>
      <DivCarrousel>
        <Carousel fade pause={'hover'}>
          <Carousel.Item>
            <img className='d-block w-100' src={carousel1} alt='First slide' />
            <Carousel.Caption>
              <Slide1></Slide1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={proximaFechaRugby}
              alt='Second slide'
            />
            <Carousel.Caption>
              <Slide2></Slide2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={proximaFechaHockey}
              alt='Third slide'
            />
            <Carousel.Caption>
              <Slide3></Slide3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </DivCarrousel>
    </>
  )
}

const DivCarrousel = styled.div`
  padding-top: 2.3rem;
  max-width: 60%;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`
