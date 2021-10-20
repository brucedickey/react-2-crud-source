import './Footer.css';
import APIWarning from '../content/APIWarning';
import Copyright from '../content/Copyright';

const Footer = () => {
  return (
    <div className="footer">
      <APIWarning />
      <Copyright />
    </div>
  )
}

export default Footer;
