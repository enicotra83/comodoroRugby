import { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import './Carrousel.css'
import HoraHockey from '../horaPartidos/HoraHockey'
import Modal from '../modal/Modal'
import logoVisitante from '../../assets/statics/comodoro.png'
import logoLocal from '../../assets/statics/chenque.png'

export default function Slide3() {
  const [estadoModalHockey, setEstadoModalHockey] = useState(false)
  return (
    <div className='slide3'>
      <div class='textoCarousel'>
      <h4> SABADO 25 DE JUNIO</h4>
        <div className='proxPartido'>
          <img
            className='logoProxPartido logoLocal'
            src={logoLocal}
            alt=''
          />
          <p>VS</p> <img className='logoProxPartido' src={logoVisitante} alt='' />
        </div>
        <Button
          variant='primary'
          onClick={() => setEstadoModalHockey(!estadoModalHockey)}
        >
          Ver Horarios
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
<HoraHockey></HoraHockey>          </Contenido>
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
