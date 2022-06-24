import { useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import './Carrousel.css'
import HoraRugby from '../horaPartidos/HoraRugby'
import Modal from '../modal/Modal'
import logoCRC from '../../assets/statics/comodoro.png'
import logoChenque from '../../assets/statics/chenque.png'

export default function Slide2() {
  const [estadoModalRugby, setEstadoModalRugby] = useState(false)

  return (
    <Slide2Texto>
      <div class='textoCarousel'>
        <h3> Sábado 25 de Junio</h3>
        <div className='proxPartido'>
          <img
            className='logoProxPartido logoChenque'
            src={logoChenque}
            alt=''
          />
          <p>VS</p> <img className='logoProxPartido' src={logoCRC} alt='' />
        </div>
        <Button
          variant='primary'
          onClick={() => setEstadoModalRugby(!estadoModalRugby)}
        >
          Ver horarios
        </Button>
        <Modal
          estado={estadoModalRugby}
          setEstado={setEstadoModalRugby}
          titulo='Torneo Rugby'
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'0px'}
        >
          <Contenido>
            <HoraRugby></HoraRugby>
          </Contenido>
        </Modal>
      </div>
    </Slide2Texto>
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
const Slide2Texto = styled.div`
  width: 85%;
  height: fit-content;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  h3,
  p {
    font-weight: 700;
    color: var(--azulCRC);
    opacity: 1;
  }
  .proxPartido {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logoProxPartido {
    height: 6rem;
    margin: 5px 25px;
  }
  .logoChenque {
    padding: 4px;
  }
`
