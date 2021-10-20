import './APIWarning.css';
import {ExclamationTriangleFill} from 'react-bootstrap-icons';

const APIWarning = () => {
  return (
    <>
      <div className="api-warnings">
        <div className="title-row">
          <div className="warning-icon-container">
            <ExclamationTriangleFill className="warning-icon" />
          </div>
          <span className="warning-title">The mecallapi.com third-party API service:</span>
        </div>
        <ul>
          <li>Does not allow you to delete or update the first ten people.</li>
          <li>Resets the people list every ten minutes.</li>
          <li>Does not provide a token; all users share data.</li>
          <li>Does not ensure unique IDs.</li>
        </ul>
      </div>
    </>
  )
}
  
export default APIWarning;
