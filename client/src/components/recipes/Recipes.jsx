import { useModal } from '../../contexts/ModalContext';
import { useGetAllRecipes } from '../../hooks/useRecipes';
import RecipeCard from '../recipeCard/RecipeCard';

export default function Recipes() {
  const { openModal } = useModal();
  const { recipes, error, loading } = useGetAllRecipes();

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

  if (error) {
    openModal(<div>{error}</div>);
    return null;
  }

  return (
    <div className="panel-wrap">
      {recipes.length > 0 ? (
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>Our recipes</h1>
      ) : (
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>No recipes yet</h1>
      )}

      <div className="panel-wrapper">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
