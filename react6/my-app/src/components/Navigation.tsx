import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav style={{ padding: '1rem' }}>
      <ul style={{ 
        display: 'flex', 
        gap: '2rem', 
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
};