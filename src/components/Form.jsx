export function Form() {
  return (
    <div className="formContainer">
      <div className="formContainer-card">
        <form className="formContainer-card-form">
          <input
            type={"email"}
            className="formContainer-card-form-email"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            className="formContainer-card-form-password"
            placeholder="Password"
          />
          <input
            type="submit"
            value="Log In"
            className="formContainer-card-form-submit button"
          />
          <a href="#" className="formContainer-card-form-forgotPassword">
            Forgot password?
          </a>
        </form>
        <hr className="formContainer-card-hr" />
        <button className="formContainer-card-button button">
          Create new account
        </button>
      </div>
      <p className="formContainer-bottomText">
        <a href="#" className="formContainer-bottomText-a">
          <strong className="formContainer-bottomText-a-strong">
            Create a Page
          </strong>
        </a>
        &nbsp;for a celebrity, brand or business.
      </p>
    </div>
  );
}
