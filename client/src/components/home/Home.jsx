import { useEffect, useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

import recipesAPI from '../../api/recipes-api';
import RecipeCard from '../recipeCard/RecipeCard';
import tipsAPI from '../../api/tips-api';
import TipCard from '../tipCard/TipCard';

export default function Home() {
  const [lastRecipes, setLastRecipes] = useState([]);
  const [lastTips, setLastTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const { openModal } = useModal();

  useEffect(() => {
    (async () => {
      try {
        const result = await recipesAPI.getLast3Recipes();
        setLastRecipes(result);
      } catch (error) {
        openModal(<div>{error.message}</div>);
      } finally {
        setLoading(false);
      }
    })();
    (async () => {
      try {
        const result = await tipsAPI.getLast3Tips();
        setLastTips(result);
      } catch (error) {
        openModal(<div>{error.message}</div>);
      } finally {
        setLoading(false);
      }
    })();
  }, [openModal]);

  if (loading) {
    return (
      <div className="panel-wrapper" style={{ marginTop: '100px' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#414141',
            backgroundColor: '#cf9359',
            padding: '20px',
            borderRadius: '5px',
          }}>
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="panel-wrap">
        <div className="panel-wrapper" style={{ marginTop: '20px' }}>
          <h1
            style={{
              textAlign: 'center',
              color: '#50453b;',
              fontSize: '35px',
            }}>
            Welcome to the Shared Cookbook
          </h1>
        </div>
        {lastRecipes.length > 0 ? (
          <h1 style={{ textAlign: 'center', fontSize: '35px' }}>Our Latest Recipes</h1>
        ) : (
          <h1 style={{ textAlign: 'center', fontSize: '35px' }}>No recipes yet</h1>
        )}
        <div className="panel-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {lastRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
      <div className="clearing" />
      <div className="page-wrap">
        <div style={{ marginTop: '50px' }}>
          {lastTips.length > 0 ? (
            <h1 style={{ textAlign: 'center', fontSize: '35px' }}>Our Latest Tips</h1>
          ) : (
            <h1 style={{ textAlign: 'center', fontSize: '35px' }}>No Tips yet</h1>
          )}
        </div>
        <div className="page-wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {lastTips.map((tip) => (
            <TipCard key={tip._id} {...tip} />
          ))}
        </div>
      </div>
    </div>
  );
}
