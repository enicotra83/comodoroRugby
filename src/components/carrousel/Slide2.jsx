import { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import './Carrousel.css'
import FixtureRugby from '../../containers/fixture/FixtureRugby'
import Modal from '../modal/Modal'

export default function Slide2() {
  const [estadoModalRugby, setEstadoModalRugby] = useState(false)

  return (
    <div className='slide2'>
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
            titulo='Torneo Hockey'
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
    </div>
  )
}
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
