export default function Register() {
  return (
    <div className="page-wrap">
      <div className="page-wrapper">
        <div className="primary-content marRight30">
          <div className="mid-panel">
            <div className="mid-panel-content">
              <div className="title">
                <h1>register</h1>
              </div>
              <div className="border" />
              <h2>Please, fill in all the fields</h2>
              <form>
                <div className="contact-form margin-top">
                  <label>
                    <span>Full name</span>
                    <input className="input_text" id="name" name="name" type="text" />
                  </label>
                  <label>
                    {' '}
                    <span>Email</span>
                    <input className="input_text" id="email" name="email" type="text" />
                  </label>
                  <label>
                    {' '}
                    <span>Subject</span>
                    <input className="input_text" id="subject" name="subject" type="text" />
                  </label>
                  <label>
                    {' '}
                    <span>Message</span>
                    <textarea className="message" id="feedback" name="feedback" />
                    <input className="button" defaultValue="Submit Form" type="button" />
                  </label>
                </div>
              </form>
              <div className="clearing" />
              <div className="address">
                <div className="panel">
                  <div className="title">
                    <h1>Address - 01</h1>
                  </div>
                  <div className="content">
                    <p>
                      Block No:5, Some where Road,
                      <br />
                      City name, State, Country name
                    </p>
                    <p>
                      <span>Phone :</span> 000 888 88888
                    </p>
                    <p>
                      <span>Email :</span> <a href="mailto:info@companyname.com">info@companyname.com</a>
                    </p>
                  </div>
                </div>
                <div className="panel">
                  <div className="title">
                    <h1>Address - 02</h1>
                  </div>
                  <div className="content">
                    <p>
                      Block No:5, Some where Road,
                      <br />
                      City name, State, Country name
                    </p>
                    <p>
                      <span>Phone :</span> 000 888 88888
                    </p>
                    <p>
                      <span>Email :</span> <a href="mailto:info@companyname.com">info@companyname.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="search-panel">
            <div className="content">
              <div className="title">
                <h1>Lorem ipsum dolo</h1>
              </div>
              <div className="border" />
              <h2>Search the site here...</h2>
              <div className="searchbox">
                <input className="input" defaultValue="" type="text" />
                <div className="button">
                  <a href="#" />
                </div>
              </div>
            </div>
          </div>
          <div className="midpanel">
            <div className="content marginBottom">
              <div className="title">
                <h1>Morbi id dolor vel</h1>
              </div>
              <div className="border" />
              <ul>
                <li>
                  <a href="#">Integer a diam sed lectus accumsan</a>
                </li>
                <li>
                  <a href="#">Duis mattis consequat mi, sed tincidunt </a>
                </li>
                <li>
                  <a href="#">Maecenas scelerisque mauris at leo</a>
                </li>
                <li>
                  <a href="#">IQuisque porta eros ut risus rhoncus nec</a>
                </li>
                <li>
                  <a href="#">Praesent ut leo eu nibh accumsan ele</a>
                </li>
                <li>
                  <a href="#">Sed ut mauris eget orci rutrum vulputa</a>
                </li>
                <li className="borderNone padBottom20">
                  <a href="#">In condimentum velit at ipsum portti</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
