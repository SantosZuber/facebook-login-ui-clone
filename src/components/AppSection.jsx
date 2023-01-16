import { Form } from "./Form";

export function AppSection() {
  return (
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
  );
}
