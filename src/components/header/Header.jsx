import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Header.css'
import logoComodoro from '../../assets/statics/comodoro.png'
import aptoHockey from '../../assets/statics/epc2022AAH.pdf'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <header className='fixed-top'>
        <Navbar bg='light' expand='lg' className='navbar navbar-light fixed'>
          <Slogan>
            <p>Un Club de puertas abiertas</p>
          </Slogan>
          <NavRojo>
            <h3>COMODORO RUGBY CLUB</h3>
          </NavRojo>
          <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
              <Brand
                src={logoComodoro}
                alt='logo Comodoro Rugby Club'
              ></Brand>
            </Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='aptos'>
              <Nav className='navbar-collapse'>
                <Link to='historia'>Nuestra Historia</Link>
                <Link to='torneos'>Torneos</Link>
                <Link to='contacto'>Contacto</Link>
                <Link to='horarios'>Horarios</Link>
                <NavDropdown title='Aptos' id='basic-nav-dropdown'>
                  <NavDropdown.Item
                    target='blank'
                    href='https://bd.uar.com.ar/registroclub/austral_comodoro-rc'
                  >
                    Rugby
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={aptoHockey} download='EPC2022 AAH'>
                    Hockey
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </>
  )
}

const Slogan = styled.div`
width: 100%;
background: var(--azulCRC);
color: var(--claro);
font-family: 'Courgette', cursive;
height: 25px;
text-align: center;
p{
  @media only screen and (max-width: 767px) {
    display:none;}
}
`
const NavRojo = styled.div`
width: 100%;
height: 55px;
background: var(--rojoCRC);
color: var(--claro);
text-align: right;
padding: 12px 15px 0px 0px;
font-family: 'Myriad pro', sans-serif;
h3{
  padding: 0rem 0.5rem;
  @media only screen and (max-width: 767px) {
    display:none;}
}
`
const Brand = styled.img`
width: 100px;
margin: -80px 0px 0px 10px;
@media only screen and (max-width: 767px) {
  align-self: center;
  }
`