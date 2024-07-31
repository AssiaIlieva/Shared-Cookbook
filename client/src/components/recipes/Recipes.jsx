import { useGetAllRecipes } from '../../hooks/useRecipes';

import RecipeCard from '../recipeCard/RecipeCard';

export default function Recipes() {
  const [recipes] = useGetAllRecipes();
  console.log(recipes);
  return (
    <div className="panel-wrap">
      {recipes.length > 0 ? (
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>Our recipes</h1>
      ) : (
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '34px' }}>Not recipes yet</h1>
      )}

      <div className="panel-wrapper">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
