import { languages } from "../data/data";

export function ShowLanguages() {
  const actualLanguage = languages[0];
  return (
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
      <button className="App-footer-div-languages-button button">+</button>
    </section>
  );
}
