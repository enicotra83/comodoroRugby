import FixtureRugby from '../../containers/fixture/FixtureRugby'
import {Modal} from 'react-bootstrap'

export default function ModalDetalle(props) {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
        <FixtureRugby></FixtureRugby>
    </Modal.Body>
  </Modal>
)
}
