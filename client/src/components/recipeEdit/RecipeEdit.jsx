import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import recipesAPI from '../../api/recipes-api';
import { useModal } from '../../contexts/ModalContext';

export default function RecipeEdit() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { openModal, closeModal } = useModal();
  const [recipe, setRecipe] = useState({
    recipeName: '',
    recipeType: '',
    preparationTime: '',
    imageURL: '',
    description: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const result = await recipesAPI.getOne(recipeId);
        setRecipe(result);
      } catch (error) {
        openModal(<div>{error.message}</div>);
      }
    })();
  }, [recipeId, openModal]);

  const validate = (values) => {
    const errors = {};
    if (!values.recipeName) {
      errors.recipeName = 'Recipe Name is required';
    }
    if (!values.recipeType) {
      errors.recipeType = 'Recipe Type is required';
    }
    if (!values.preparationTime) {
      errors.preparationTime = 'Preparation Time is required';
    } else if (!/^\d{2}:\d{2}$/.test(values.preparationTime)) {
      errors.preparationTime = 'Preparation Time must be in HH:MM format';
    }
    if (!values.imageURL) {
      errors.imageURL = 'Image URL is required';
    }
    if (!values.description) {
      errors.description = 'Description is required';
    }
    if (!values.ingredients) {
      errors.ingredients = 'Ingredients are required';
    }
    if (!values.instructions) {
      errors.instructions = 'Instructions are required';
    }
    return errors;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const errors = validate(values);

    if (Object.keys(errors).length > 0) {
      openModal(
        <div>
          <h3>Validation Errors</h3>
          <ul>
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>{message}</li>
            ))}
          </ul>
        </div>
      );
      return;
    }

    openModal(
      <div className="modalContent">
        <h3>Confirmation</h3>
        <p>Are you sure you want to edit the {recipe.recipeName} recipe?</p>
        <div className="buttonContainer">
          <button
            className="modal-button confirm-button"
            onClick={async () => {
              try {
                await recipesAPI.edit(recipeId, values);
                navigate(`/recipes/${recipeId}/details`);
                closeModal();
              } catch (error) {
                openModal(<div>{error.message}</div>);
              }
            }}>
            Confirm
          </button>
          <button className="modal-button cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const changeHandler = (e) => {
    setRecipe((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>Edit Recipe</h1>
              </div>
              <div className="border" />
              <h2>Edit your recipe</h2>
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <label>
                    <span>Recipe Name</span>
                    <input className="input_text" id="recipeName" name="recipeName" value={recipe.recipeName} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Recipe Type</span>
                    <select className="input_text" id="recipeType" name="recipeType" value={recipe.recipeType} onChange={changeHandler}>
                      <option value="" disabled>
                        Please, choose the recipe type
                      </option>
                      <option value="Soup">Soup</option>
                      <option value="Appetizer">Appetizer</option>
                      <option value="Main Course">Main Course</option>
                      <option value="Dessert">Dessert</option>
                    </select>
                  </label>
                  <label>
                    <span>Preparation Time</span>
                    <input
                      className="input_text"
                      id="preparationTime"
                      name="preparationTime"
                      value={recipe.preparationTime}
                      onChange={changeHandler}
                      type="text"
                      placeholder="HH:MM"
                      maxLength="5"
                    />
                  </label>
                  <label>
                    <span>Image URL</span>
                    <input className="input_text" id="imageURL" name="imageURL" value={recipe.imageURL} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Short Description</span>
                    <textarea
                      className="input_text"
                      id="description"
                      name="description"
                      value={recipe.description}
                      onChange={changeHandler}></textarea>
                  </label>
                  <label>
                    <span>Ingredients</span>
                    <textarea className="message" id="ingredients" name="ingredients" value={recipe.ingredients} onChange={changeHandler}></textarea>
                  </label>
                  <label>
                    <span>Preparation Instructions</span>
                    <textarea
                      className="message"
                      id="instructions"
                      name="instructions"
                      value={recipe.instructions}
                      onChange={changeHandler}></textarea>
                  </label>
                  <input type="submit" className="button" value="Edit Recipe" />
                </div>
              </form>
              <div className="clearing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
