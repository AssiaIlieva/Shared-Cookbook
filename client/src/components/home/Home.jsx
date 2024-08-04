import { useEffect, useState } from 'react';
import recipesAPI from '../../api/recipes-api';
import RecipeCard from '../recipeCard/RecipeCard';

export default function Home() {
  const [lastRecipes, setLastRecipes] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const result = await recipesAPI.getLast3Recipes();
        setLastRecipes(result);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <div className="panel-wrap">
        {error && <div className="error">{error}</div>}
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
