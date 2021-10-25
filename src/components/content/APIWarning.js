import {ExclamationTriangleFill} from 'react-bootstrap-icons';
import css from './APIWarning.module.css';

const APIWarning = () => {
  return (
    <>
      <div className={css.apiWarnings}>
        <div className={css.titleRow}>
          <div className={css.warningIconContainer}>
            <ExclamationTriangleFill className={css.warningIcon} />
          </div>
          <span className={css.warningTitle}>The mecallapi.com third-party API service:</span>
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
