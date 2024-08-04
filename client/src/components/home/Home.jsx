import { useEffect, useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

import recipesAPI from '../../api/recipes-api';
import RecipeCard from '../recipeCard/RecipeCard';

export default function Home() {
  const [lastRecipes, setLastRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Добавено състояние за зареждане
  const { openModal } = useModal();

  useEffect(() => {
    (async () => {
      try {
        const result = await recipesAPI.getLast3Recipes();
        setLastRecipes(result);
      } catch (error) {
        openModal(<div>{error.message}</div>);
      } finally {
        setLoading(false); // Сменяме състоянието на зареждане, след като данните са извлечени
      }
    })();
  }, [openModal]);

  if (loading) {
    return (
      <div className="panel-wrapper" style={{ marginTop: '100px' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#414141', // Цвят на текста
            backgroundColor: '#cf9359', // Фон
            padding: '20px', // Отстояние около текста
            borderRadius: '5px', // Закръглени ъгли
          }}>
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="panel-wrap">
        <div className="marBottom30">
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '40px' }}>Welcome to the Shared Cookbook</h1>
        </div>
        {lastRecipes.length > 0 ? (
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>Our Latest Recipes</h1>
        ) : (
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>No recipes yet</h1>
        )}
        <div className="panel-wrapper">
          {lastRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
      <div className="clearing" />
      <div className="page-wrap">
        <div className="page-wrapper"></div>
      </div>
    </div>
  );
}
