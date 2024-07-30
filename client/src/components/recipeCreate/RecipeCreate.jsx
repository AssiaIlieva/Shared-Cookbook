import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import { useCreateRecipe } from '../../hooks/useRecipes';

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
  const createRecipe = useCreateRecipe();

  const createHandler = async (values) => {
    try {
      const { _id: recipeId } = await createRecipe(values);
      //   navigate(`/recipes/${recipeId}/details`);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);
  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>Create Recipe</h1>
              </div>
              <div className="border" />
              <h2>Share your recipe</h2>
              <form onSubmit={submitHandler}>
                <div className="contact-form margin-top">
                  <label>
                    <span>Recipe Name</span>
                    <input className="input_text" id="recipeName" name="recipeName" value={values.recipeName} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Recipe Type</span>
                    <select className="input_text" id="recipeType" name="recipeType" value={values.recipeType} onChange={changeHandler}>
                      <option value="" disabled>
                        Please, choose the recipe type
                      </option>
                      <option value="soup">Soup</option>
                      <option value="appetizer">Appetizer</option>
                      <option value="mainCourse">Main Course</option>
                      <option value="dessert">Dessert</option>
                    </select>
                  </label>
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
                  <label>
                    <span>Image URL</span>
                    <input className="input_text" id="imageURL" name="imageURL" value={values.imageURL} onChange={changeHandler} type="text" />
                  </label>
                  <label>
                    <span>Short Description</span>
                    <textarea
                      className="input_text"
                      id="description"
                      name="description"
                      value={values.description}
                      onChange={changeHandler}></textarea>
                  </label>
                  <label>
                    <span>Ingredients</span>
                    <textarea className="message" id="ingredients" name="ingredients" value={values.ingredients} onChange={changeHandler}></textarea>
                  </label>
                  <label>
                    <span>Preparation Instructions</span>
                    <textarea
                      className="message"
                      id="instructions"
                      name="instructions"
                      value={values.instructions}
                      onChange={changeHandler}></textarea>
                  </label>
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
