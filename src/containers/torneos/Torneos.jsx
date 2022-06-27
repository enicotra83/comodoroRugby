import styled from 'styled-components'
import posicionIcoRugby from '../../assets/statics/rugby.png'
import posicionIcoHockey from '../../assets/statics/hockey.png'

export default function Torneos() {
  return (
    <TablaPosiciones>
      <h4 className='sectionTit'>Tabla de Posiciones</h4>
      <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link active btnIco'
            id='pills-rugby-tab'
            data-bs-toggle='pill'
            data-bs-target='#pills-rugby'
            type='button'
            role='tab'
            aria-controls='pills-rugby'
            aria-selected='true'
          >
            <img src={posicionIcoRugby} alt='' className='posicionIco' /> Rugby
          </button>
        </li>
        <li className='nav-item' role='presentation'>
          <button
            className='nav-link btnIco'
            id='pills-hockey-tab'
            data-bs-toggle='pill'
            data-bs-target='#pills-hockey'
            type='button'
            role='tab'
            aria-controls='pills-hockey'
            aria-selected='false'
          >
            <img src={posicionIcoHockey} alt='' className='posicionIco' />{' '}
            Hockey
          </button>
        </li>
      </ul>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='pills-rugby'
          role='tabpanel'
          aria-labelledby='pills-rugby-tab'
        >
          <ul className='nav nav-tabs' id='tablaRugby' role='tablist'>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias active'
                id='psPosiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#psPosiciones'
                type='button'
                role='tab'
                aria-controls='psPosiciones'
                aria-selected='true'
              >
                Primera
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias'
                id='interPosiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#interPosiciones'
                type='button'
                role='tab'
                aria-controls='interPosiciones'
                aria-selected='false'
              >
                Intermedia
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias'
                id='m18posiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#m18posiciones'
                type='button'
                role='tab'
                aria-controls='m18posiciones'
                aria-selected='false'
              >
                M18
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias'
                id='m16posiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#m16posiciones'
                type='button'
                role='tab'
                aria-controls='m16posiciones'
                aria-selected='false'
              >
                M16
              </button>
            </li>
          </ul>
          <div className='tab-content' id='tablaRugbyContent'>
            <div
              className='tab-pane fade show active'
              id='psPosiciones'
              role='tabpanel'
              aria-labelledby='psPosiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody id='tablaRugbyPS'>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className='tab-pane fade'
              id='interPosiciones'
              role='tabpanel'
              aria-labelledby='interPosiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className='tab-pane fade'
              id='m18posiciones'
              role='tabpanel'
              aria-labelledby='m18posiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className='tab-pane fade'
              id='m16posiciones'
              role='tabpanel'
              aria-labelledby='m16posiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-hockey'
          role='tabpanel'
          aria-labelledby='pills-hockey-tab'
        >
          <ul className='nav nav-tabs' id='tablaHockey' role='tablist'>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias active'
                id='hockeypsPosiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#hockeypsPosiciones'
                type='button'
                role='tab'
                aria-controls='hockeypsPosiciones'
                aria-selected='true'
              >
                Primera
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias'
                id='sub18posiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#sub18posiciones'
                type='button'
                role='tab'
                aria-controls='sub18posiciones'
                aria-selected='false'
              >
                sub18posiciones
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className='nav-link categorias'
                id='sub16posiciones-tab'
                data-bs-toggle='tab'
                data-bs-target='#sub16posiciones'
                type='button'
                role='tab'
                aria-controls='sub16posiciones'
                aria-selected='false'
              >
                sub16posiciones
              </button>
            </li>
          </ul>
          <div className='tab-content' id='tablaHockeyContent'>
            <div
              className='tab-pane fade show active'
              id='hockeypsPosiciones'
              role='tabpanel'
              aria-labelledby='hockeypsPosiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody id='tablaHockeyPS'>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className='tab-pane fade'
              id='sub18posiciones'
              role='tabpanel'
              aria-labelledby='sub18posiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className='tab-pane fade'
              id='sub16posiciones'
              role='tabpanel'
              aria-labelledby='sub16posiciones-tab'
            >
              <table className='table'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col'></th>
                    <th scope='col'></th>
                    <th scope='col'>Pts</th>
                    <th scope='col'>Pj</th>
                    <th scope='col'>G</th>
                    <th scope='col'>E</th>
                    <th scope='col'>P</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'>1</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>2</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>3</th>
                    <td>Logo</td>
                    <td>Comodoro Rugby Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>4</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope='row'>5</th>
                    <td>Logo</td>
                    <td>Club</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-contact'
          role='tabpanel'
          aria-labelledby='pills-contact-tab'
        >
          ver donde esta esto
        </div>
      </div>
    </TablaPosiciones>
  )
}

const TablaPosiciones = styled.div`
  margin-top: 50px;
  width: 100wv;
  .nav-link {
    color: var(--oscuro);
  }
  .posicionIco {
    width: 30px;
  }
  .btnIco {
    margin: 15px 7px;
  }
  .btnIco.active {
    background-color: var(--rojoCRC) !important;
  }
  .btnIco.active img {
    filter: invert(1.4) sepia(0) hue-rotate(20deg) saturate(1000%);
  }
  .categorias:hover {
    color: var(--azulCRC);
  }
`
