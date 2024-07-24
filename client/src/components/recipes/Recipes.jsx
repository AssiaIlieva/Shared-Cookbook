import RecipeCard from '../recipeCard/RecipeCard';

export default function Recipes() {
  return (
    <div className="panel-wrap">
      <div className="panel-wrapper">
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}
