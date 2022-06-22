import Header from './header/Header'
import Footer from './footer/Footer'

export default function Layout(props) {
  const { children } = props

  return (
    <>
      <Header></Header>
      <div className='cuerpo'>{children}</div>
      <Footer></Footer>
    </>
  )
}
