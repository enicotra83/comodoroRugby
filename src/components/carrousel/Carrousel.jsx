import { useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import styled from 'styled-components'
import carousel1 from '../../assets/statics/fondoCanchaEscudo.png'
import proximaFechaRugby from '../../assets/statics/proximaFechaRugby.png'
import proximaFechaHockey from '../../assets/statics/proximaFechaHockey.png'
import FixtureHockey from '../../containers/fixture/FixtureHockey'
import FixtureRugby from '../../containers/fixture/FixtureRugby'
import ModalDetalle from '../modal/Modal'

export default function Carrousel() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <DivCarrousel>
      <Carousel fade>
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

              <Button variant='primary' onClick={() => setModalShow(true)}>
                Ver Fixture
              </Button>

              <ModalDetalle show={modalShow} onHide={() => setModalShow(false)} />
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
              {/* <!-- Button trigger modal --> */}
              <button
                type='button'
                class='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#modalHockey'
              >
                Ver Fixture
              </button>

              {/* <!-- Modal --> */}
              <div
                class='modal fade'
                id='modalHockey'
                tabindex='-1'
                aria-labelledby='modalHockeyLabel'
                aria-hidden='true'
              >
                <div class='modal-dialog modal-xl'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <button
                        type='button'
                        class='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div class='modal-body'>
                      <FixtureHockey></FixtureHockey>
                    </div>
                  </div>
                </div>
              </div>
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