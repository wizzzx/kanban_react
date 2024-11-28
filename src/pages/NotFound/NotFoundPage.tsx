import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>Страницы, которую вы ищете, не существует.</p>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default NotFoundPage;
