import Logo from '../logo/Logo';
import logo from '../../assets/images/logo.png';
import style from './style.module.css';
import ButtonPrimary from '../button-primary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={`row ${style.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate('/')}
          title="Notematic"
          subtitle="Manage your notes"
          image={logo}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate('/note/new')}>
          Add not +
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Header;
