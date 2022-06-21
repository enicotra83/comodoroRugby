import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import ItemFixture from '../../components/itemFixture/itemFixture'

export default function Fixture() {
  const [fixture, setFixture] = useState([])

  const getFixtureRugby = async () => {
    const res = await fetch("/torneoRugby.json")
    let json = await res.json()
    setFixture(json)
  }
  useEffect(() => {
    getFixtureRugby()
  }, [])
  return (
    <>
      <div className='fixture centrado'>
        <h2>Torneo Preparacion Austral 2022</h2>
        <Table responsive className='tabla table-hover align-middle'>
          <thead>
            <tr className='centrado'>
              <th>#</th>
              <th>Fecha</th>
              <th className='maxWidth'>Local</th>
              <th> </th>
              <th className='centrado'>Resultado</th>
              <th> </th>
              <th>Visitante</th>
              <th>Referee</th>
            </tr>
          </thead>
          <tbody>
            {fixture.map((fecha) => (
              <ItemFixture fecha={fecha} key={fecha.id} />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
