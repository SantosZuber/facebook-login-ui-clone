import { ShowLanguages } from "./ShowLanguages";
import { ShowLinks } from "./ShowLinks";

export function Footer() {
  return (
    <footer className="App-footer">
      <div className="App-footer-div">
        <ShowLanguages />
        <hr className="App-footer-div-hr hr" />
        <ShowLinks />
        <p className="App-footer-div-metaText"> Meta © 2023</p>
      </div>
    </footer>
  );
}
