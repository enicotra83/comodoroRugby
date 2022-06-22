import { useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import styled from 'styled-components'
import './Carrousel.css'
import carousel1 from '../../assets/statics/fondoCanchaEscudo.png'
import proximaFechaRugby from '../../assets/statics/proximaFechaRugby.png'
import proximaFechaHockey from '../../assets/statics/proximaFechaHockey.png'
import FixtureHockey from '../../containers/fixture/FixtureHockey'
import FixtureRugby from '../../containers/fixture/FixtureRugby'
import Modal from '../modal/Modal'

export default function Carrousel() {
  const [estadoModalRugby, setEstadoModalRugby] = useState(false)
  const [estadoModalHockey, setEstadoModalHockey] = useState(false)

  return (
    <DivCarrousel>
      <Carousel fade pause={'hover'}>
        <Carousel.Item>
          <img className='d-block w-100' src={carousel1} alt='First slide' />
          <Carousel.Caption>
            <h3>Bienvenidos!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={proximaFechaRugby}
            alt='Second slide'
          />

          <Carousel.Caption>
            <div class='textoCarousel'>
              <h5>PROXIMA FECHA</h5>
              <p>Div con partido, fecha, hora y lugar. fondo traslucido</p>
              <Button
                variant='primary'
                onClick={() => setEstadoModalRugby(!estadoModalRugby)}
              >
                Ver Fixture
              </Button>
              <Modal
                estado={estadoModalRugby}
                setEstado={setEstadoModalRugby}
                titulo='Torneo Preparacion Austral 2022'
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'center'}
                padding={'0px'}
              >
                <Contenido>
                  <FixtureRugby></FixtureRugby>
                </Contenido>
              </Modal>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={proximaFechaHockey}
            alt='Third slide'
          />

          <Carousel.Caption>
            <div class='textoCarousel'>
              <h5>PROXIMA FECHA</h5>
              <p>
                Div con partido, fecha, hora y lugar Torneo de hockey. fondo
                traslucido
              </p>
              <Button
                variant='primary'
                onClick={() => setEstadoModalHockey(!estadoModalHockey)}
              >
                Ver Fixture
              </Button>
              <Modal
                estado={estadoModalHockey}
                setEstado={setEstadoModalHockey}
                titulo='Torneo Hockey'
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'center'}
                padding={'0px'}
              >
                <Contenido>
                  <FixtureHockey></FixtureHockey>
                </Contenido>
              </Modal>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </DivCarrousel>
  )
}

const DivCarrousel = styled.div`
  padding-top: 2.3rem;
  max-width: 60%;
`
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`
