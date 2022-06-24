import { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import './Carrousel.css'
import FixtureHockey from '../../containers/fixture/FixtureHockey'
import Modal from '../modal/Modal'

export default function Slide3() {
  const [estadoModalHockey, setEstadoModalHockey] = useState(false)
  return (
    <div className='slide3'>
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
