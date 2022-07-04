import './Carrousel.css'
import styled from 'styled-components'

export default function Slide1() {
  return (
    <div className='slide1'>
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
    </div>
  )
}

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
  @media only screen and (max-width: 767px) {
    width:100%;
    height: 100%;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 40px;
    h3, p {
      text-align: center;
    }
    h3{
      font-size: 2rem;
    }
`
