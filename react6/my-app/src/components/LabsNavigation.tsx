import { Link } from 'react-router-dom';

export const LabsNavigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Лабораборная 1. Фигурное катание как вид спорта</Link></li>
        <li><Link to="/sync-skating">Лабораторная 2. Синхронное фигурное катание</Link></li>
        <li><Link to="/olympic-medalists">Лабораторная 4. Призеры Олимпийских игр</Link></li>
      </ul>
    </nav>
  );
};