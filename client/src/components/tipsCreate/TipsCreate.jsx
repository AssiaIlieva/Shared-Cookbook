export default function TipsCreate() {
  return (
    <div className="top-content">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>Create a Tip</h1>
              </div>
              <div className="border" />
              <h2>Share your Tip</h2>
              <form>
                <div className="contact-form margin-top">
                  <div className="form-group">
                    <label>
                      <span>Heading</span>
                      <input className="input_text" id="heading" name="heading" type="text" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Tip Type</span>
                      <select className="input_text" id="tipType" name="tipType" value="">
                        <option value="" disabled>
                          Please, choose the recipe type
                        </option>
                        <option value="Kitchen hacks">Hack</option>
                        <option value="Cooking Techniques">Appetizer</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Image URL</span>
                      <input className="input_text" id="imageURL" name="imageURL" type="text" />
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Short Description</span>
                      <textarea className="input_text" id="description" name="description"></textarea>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <span>Content</span>
                      <textarea className="message" id="content" name="content"></textarea>
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
