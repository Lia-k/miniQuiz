import Button from "../components/ui/button";
import './email.css'

const Email = ({
  headerText = "Email submission",
  email,
  onEmailChange,
  handleSubmit,
}) => {
  return (
    <section className="container">
      <h2>{headerText}</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="email-input">Please, provide your email</label>
        <input
          id='email-input'
          type="email"
          placeholder="example@gmail.com"
          required
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <Button type="submit" className="primary-button">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Email;
