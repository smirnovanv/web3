import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
};