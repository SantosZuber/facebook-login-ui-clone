import { links } from "../data/data";
export function ShowLinks() {
  return (
    <section className="App-footer-div-links">
      {links.map((link, index) => {
        return (
          <a href="#" key={link + index}>
            {link}
          </a>
        );
      })}
    </section>
  );
}
