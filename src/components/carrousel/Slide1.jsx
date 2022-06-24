import './Carrousel.css'
import styled from 'styled-components'

export default function Slide1() {
  return (
    <Slide1Contenido>
      <Slide1Texto>
        <h3>
          <strong>Bienvenidos!</strong>
        </h3>
        <p></p>
        <p>A la pagina de nuestra familia coirona</p>
        <p>
          En ella encontraran la información necesaria para poder participar de
          la vida de nuestro querido club
        </p>
      </Slide1Texto>
    </Slide1Contenido>
  )
}

const Slide1Contenido = styled.div`
  width: 100%;
  height: 50vh;
  background: url(../../assets/statics/canchaEscudo.png) center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`
const Slide1Texto = styled.div`
  width: 85%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 20px;
  h3, p {
    font-weight: 700;
    color: var(--azulCRC);
    opacity: 1;
  }
`
