import { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import { useGetAllRecipes, useSearchRecipes } from '../../hooks/useRecipes';
import RecipeCard from '../recipeCard/RecipeCard';

export default function Recipes() {
  const { openModal } = useModal();
  const { recipes: allRecipes, error: allRecipesError, loading: allRecipesLoading } = useGetAllRecipes();
  const [selectedRecipeType, setSelectedRecipeType] = useState('');
  const { recipes: searchedRecipes, error: searchError, loading: searchLoading } = useSearchRecipes(selectedRecipeType);

  const handleSearch = (event) => {
    event.preventDefault();
    setSelectedRecipeType(event.target.recipeType.value);
  };

  if (allRecipesLoading || searchLoading) {
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

  if (allRecipesError || searchError) {
    openModal(<div>{allRecipesError || searchError}</div>);
    return null;
  }

  const displayedRecipes = selectedRecipeType ? searchedRecipes : allRecipes;

  return (
    <div className="panel-wrap">
      {allRecipes.length > 0 ? (
        <h1 style={{ textAlign: 'center', fontSize: '40px', marginTop: '40px', marginBottom: '40px' }}>Our recipes</h1>
      ) : (
        <h1 style={{ textAlign: 'center', fontSize: '40px' }}>No recipes yet</h1>
      )}

      <div style={{ margin: '0 auto', width: '20%' }}>
        <div className="search-panel">
          <div className="content">
            <div className="title">
              <h1>Search by recipe type</h1>
            </div>
            <div className="border"></div>
            <h2>Search for recipes here...</h2>
            <div className="searchbox">
              <form onSubmit={handleSearch}>
                <select id="recipeType" name="recipeType" className="input">
                  <option value="">Select Recipe Type</option>
                  <option value="Soup">Soup</option>
                  <option value="Appetizer">Appetizer</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Dessert">Dessert</option>
                </select>
                <div className="button">
                  <button
                    type="submit"
                    style={{
                      border: 'none',
                      backgroundColor: '#cf9359',
                      color: 'transparent', // Make text invisible
                      padding: '10px 20px',
                      cursor: 'pointer',
                      width: '40px', // Adjust width to fit the icon
                      height: '40px', // Adjust height to fit the icon
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {/* Use a magnifying glass icon */}
                    <i className="fa fa-search" aria-hidden="true" style={{ color: 'white' }}></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="panel-wrapper">
        {displayedRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} {...recipe} />
        ))}
      </div>
    </div>
  );
}
