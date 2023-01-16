import { Form } from "./components/Form";
import { languages, links } from "./data/data";

function App() {
  const actualLanguage = languages[0];
  return (
    <div className="App">
      <section className="App-section">
        <div className="App-section-div">
          <div className="App-section-div-imgContainer">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="facebook"
              className="App-section-div-imgContainer-img"
            />
          </div>
          <p className="App-section-div-text">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>
        <Form />
      </section>
      <footer className="App-footer">
        <div className="App-footer-div">
          <section className="App-footer-div-languages">
            {languages.map((language, index) => {
              if (language === actualLanguage) {
                return <p key={language + index}>{language}</p>;
              } else {
                return (
                  <a href="#" key={language + index}>
                    {language}
                  </a>
                );
              }
            })}
            <button className="App-footer-div-languages-button button">
              +
            </button>
          </section>
          <hr className="App-footer-div-hr hr" />
          <section className="App-footer-div-links">
            {links.map((link, index) => {
              return (
                <a href="#" key={link + index}>
                  {link}
                </a>
              );
            })}
          </section>
          <p className="App-footer-div-metaText"> Meta © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
