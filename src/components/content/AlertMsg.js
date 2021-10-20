import Alert from 'react-bootstrap/Alert';

const AlertMsg = (props) => {
  return (
    <>
      { props.message && <Alert variant={props.variant}>{props.message}</Alert> }
    </>
  )
}
  
export default AlertMsg;
