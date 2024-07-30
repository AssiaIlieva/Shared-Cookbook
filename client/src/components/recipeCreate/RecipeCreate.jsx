export default function RecipeCreate() {
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
              <form>
                <div className="contact-form margin-top">
                  <label>
                    <span>Recipe Name</span>
                    <input className="input_text" id="recipeName" name="recipeName" type="text" />
                  </label>
                  <label>
                    <span>Recipe Type</span>
                    <select className="input_text" id="recipeType" name="recipeType">
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
                    <input className="input_text" id="preparationTime" name="preparationTime" type="text" placeholder="HH:MM" maxLength="5" />
                  </label>
                  <label>
                    <span>Image URL</span>
                    <input className="input_text" id="imageURL" name="imageURL" type="text" />
                  </label>
                  <label>
                    <span>Short Description</span>
                    <textarea className="input_text" id="shortDescription" name="shortDescription"></textarea>
                  </label>
                  <label>
                    <span>Ingredients</span>
                    <textarea className="message" id="ingredients" name="ingredients"></textarea>
                  </label>
                  <label>
                    <span>Preparation Instructions</span>
                    <textarea className="message" id="instructions" name="instructions"></textarea>
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
