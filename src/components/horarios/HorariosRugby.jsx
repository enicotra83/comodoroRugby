import styled from 'styled-components'

export default function HorariosRugby() {
  return (
    <>
      <ParentRugby>
        <div class='div1 dia'>Lunes</div>
        <div class='div2 dia'>Martes</div>
        <div class='div3 dia'>Miercoles</div>
        <div class='div4 dia'>Jueves</div>
        <div class='div5 dia'>Viernes</div>
        <div class='div6 dia'>Sabado</div>
        <div class='div7 categoria'>Kinder</div>
        <div class='div8 categoria'>M6/7</div>
        <div class='div9 categoria'>M8</div>
        <div class='div10 categoria'>M9</div>
        <div class='div11 categoria'>M10</div>
        <div class='div12 categoria'>M11</div>
        <div class='div13 categoria'>M12</div>
        <div class='div14 categoria'>M13</div>
        <div class='div15 categoria'>M14</div>
        <div class='div16 categoria'>Juveniles</div>
        <div class='div17 categoria'>Plantel Superior</div>
        <div class='div18 sede'>
          <p>18-19hs</p>
          <p>
            <i>Sede</i>
          </p>
        </div>
        <div class='div19 sede'>
          <p>18-19hs</p>
          <p>
            <i>Sede</i>
          </p>
        </div>
        <div class='div20 astra'>
          <p>14:30-16hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div21 sede'>
          <p>19-20hs</p>
          <p>
            <i>Sede</i>
          </p>
        </div>
        <div class='div22 sede'>
          <p>18-19hs</p>
          <p>
            <i>Sede</i>
          </p>
        </div>
        <div class='div23 sede'>
          <p>19-20hs</p>
          <p>
            <i>Sede</i>
          </p>
        </div>
        <div class='div24 sede'>
          <p>19-20hs</p>
          <p>
            <i>Sede</i>
          </p>
        </div>
        <div class='div25 astra'>
          <p>19-20hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div26 astra'>
          <p>18:30-20hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div27 astra'>
          <p>20-21:30hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div28 astra'>
          <p>20-21:30hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div29 astra'>
          <p>19-20hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div30 otros'>
          <p>19-20hs</p>
          <p>
            <i>Perito Moreno </i>
          </p>
        </div>
        <div class='div31 astra'>
          <p>18:30-20hs</p>
          <p>
            <i>Astra</i>
          </p>
        </div>
        <div class='div32 otros'>
          <p>18:30-20hs</p>
          <p>
            <i>Perito Moreno </i>
          </p>
        </div>
      </ParentRugby>
    </>
  )
}

const ParentRugby = styled.div`
  width: 90vw;
  height: calc(100vh - 150px);
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1.25fr repeat(6, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 4px;
  padding: 10px;
  div {
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  p {
    margin: 0px;
  }
  i {
    font-size: small;
  }
  .dia {
    background: var(--azulCRC);
    color: var(--claro);
    justify-content: center;
  }
  .categoria {
    background: var(--rojoCRC);
    color: var(--claro);
    padding: 0.6rem;
  }
  .sede {
    border: solid 2px var(--azulCRC);
    text-align: center;
    justify-content: center;
  }
  .astra {
    border: solid 2px var(--rojoCRC);
    text-align: center;
    justify-content: center;
  }
  .otros {
    border: solid 2px var(--amarilloCRC);
    text-align: center;
    justify-content: center;
  }

  .div1 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div3 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .div4 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .div5 {
    grid-area: 1 / 6 / 2 / 7;
  }
  .div6 {
    grid-area: 1 / 7 / 2 / 8;
  }
  .div7 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div8 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div9 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .div10 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .div11 {
    grid-area: 6 / 1 / 7 / 2;
  }
  .div12 {
    grid-area: 7 / 1 / 8 / 2;
  }
  .div13 {
    grid-area: 8 / 1 / 9 / 2;
  }
  .div14 {
    grid-area: 9 / 1 / 10 / 2;
  }
  .div15 {
    grid-area: 10 / 1 / 11 / 2;
  }
  .div16 {
    grid-area: 11 / 1 / 12 / 2;
  }
  .div17 {
    grid-area: 12 / 1 / 13 / 2;
  }
  .div18 {
    grid-area: 2 / 3 / 4 / 4;
  }
  .div19 {
    grid-area: 2 / 5 / 4 / 6;
  }
  .div20 {
    grid-area: 2 / 7 / 10 / 8;
  }
  .div21 {
    grid-area: 4 / 3 / 6 / 4;
  }
  .div22 {
    grid-area: 6 / 2 / 8 / 3;
  }
  .div23 {
    grid-area: 4 / 5 / 8 / 6;
  }
  .div24 {
    grid-area: 8 / 2 / 10 / 3;
  }
  .div25 {
    grid-area: 10 / 3 / 12 / 4;
  }
  .div26 {
    grid-area: 10 / 5 / 12 / 6;
  }
  .div27 {
    grid-area: 12 / 3 / 13 / 4;
  }
  .div28 {
    grid-area: 12 / 5 / 13 / 6;
  }
  .div29 {
    grid-area: 8 / 3 / 9 / 4;
  }
  .div30 {
    grid-area: 9 / 3 / 10 / 4;
  }
  .div31 {
    grid-area: 8 / 5 / 9 / 6;
  }
  .div32 {
    grid-area: 9 / 5 / 10 / 6;
  }
`
