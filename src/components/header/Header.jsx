import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './Header.css'
import logoComodoro from '../../assets/statics/comodoro.png'
import aptoHockey from '../../assets/statics/epc2022AAH.pdf'

export default function Header() {
  return (
    <>
      <header className='fixed-top'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed'>
          <div className='slogan'>
            <p>Un Club de puertas abiertas</p>
          </div>
          <div className='navRojo'>
            <h3>COMODORO RUGBY CLUB</h3>
          </div>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
              <img
                src={logoComodoro}
                alt='logo Comodoro Rugby Club'
                className='brand'
              />
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='aptos'>
              <Nav className='navbar-collapse'>
                <Link to='historia'>Nuestra Historia</Link>
                <Link to='torneos'>Torneos</Link>
                <Link to='contacto'>Contacto</Link>
                <Link to='horarios'>Horarios</Link>
                <NavDropdown title='Aptos' id='basic-nav-dropdown'>
                  <NavDropdown.Item target='blank' href='https://bd.uar.com.ar/registroclub/austral_comodoro-rc'>Rugby</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={aptoHockey} download="EPC2022 AAH">
                    Hockey
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </nav>
      </header>
    </>
  )
}

