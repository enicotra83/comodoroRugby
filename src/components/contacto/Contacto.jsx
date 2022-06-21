import './Contacto.css'

export default function Contacto() {
  return (
    <>
      <div className='infoContacto'>
        <h4 className='sectionTit'>Contactanos</h4>
        <div className='datosSecre'>
          <div className='textoSecre'>
            <h5>Secretaría</h5>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-telephone-fill'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                />
              </svg>
              <p>(0297) 444-1379</p>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-geo-alt-fill'
                viewBox='0 0 16 16'
              >
                <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
              </svg>
              <p>Velez Sarsfield 1785</p>
            </div>
            <div>
              {' '}
              <p>Horarios: Lunes a Viernes de 10hs a 12hs / 16hs a 20hs</p>
            </div>
          </div>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.183861585233!2d-67.50377158455522!3d-45.867630979107815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde454fab1088eab%3A0x984e2a0591ab8725!2sV%C3%A9lez%20S%C3%A1rsfield%201785%2C%20U9000BGO%20Comodoro%20Rivadavia%2C%20Chubut!5e0!3m2!1ses-419!2sar!4v1654091591318!5m2!1ses-419!2sar'
            width='300'
            height='200'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </>
  )
}
