import APIWarning from '../content/APIWarning';
import Copyright from '../content/Copyright';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.footer}>
      <APIWarning />
      <Copyright />
    </div>
  )
}

export default Footer;
