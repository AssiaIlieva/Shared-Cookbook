import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import { useCreateRecipe } from '../../hooks/useRecipes';
import { useModal } from '../../contexts/ModalContext';

const initialValues = {
  recipeName: '',
  recipeType: '',
  preparationTime: '',
  imageURL: '',
  description: '',
  ingredients: '',
  instructions: '',
};

export default function RecipeCreate() {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const createRecipe = useCreateRecipe();

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

  const createHandler = async (values) => {
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
        <p>Did you enter valid data? Do you want to create a new recipe?</p>
        <div className="buttonContainer">
          <button
            className="modal-button confirm-button"
            onClick={async () => {
              try {
                const { _id: recipeId } = await createRecipe(values);
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

  const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);

  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>Create a Recipe</h1>
              </div>
              <div className="border" />
              <h2>Share your recipe</h2>
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <div className="form-group">
                    <label>
                      <span>Recipe Name</span>
                      <input
                        className="input_text"
                        id="recipeName"
                        name="recipeName"
                        value={values.recipeName}
                        onChange={changeHandler}
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Recipe Type</span>
                      <select className="input_text" id="recipeType" name="recipeType" value={values.recipeType} onChange={changeHandler}>
                        <option value="" disabled>
                          Please, choose the recipe type
                        </option>
                        <option value="Soup">Soup</option>
                        <option value="Appetizer">Appetizer</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Dessert">Dessert</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Preparation Time</span>
                      <input
                        className="input_text"
                        id="preparationTime"
                        name="preparationTime"
                        value={values.preparationTime}
                        onChange={changeHandler}
                        type="text"
                        placeholder="HH:MM"
                        maxLength="5"
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Image URL</span>
                      <input className="input_text" id="imageURL" name="imageURL" value={values.imageURL} onChange={changeHandler} type="text" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Short Description</span>
                      <textarea
                        className="input_text"
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={changeHandler}></textarea>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Ingredients</span>
                      <textarea
                        className="message"
                        id="ingredients"
                        name="ingredients"
                        value={values.ingredients}
                        onChange={changeHandler}></textarea>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Preparation Instructions</span>
                      <textarea
                        className="message"
                        id="instructions"
                        name="instructions"
                        value={values.instructions}
                        onChange={changeHandler}></textarea>
                    </label>
                  </div>
                  <input type="submit" className="button" value="Create Recipe" />
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
