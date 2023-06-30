// Contact page is currently non-functional; waiting on a backend

export default function Contact() {

  // checks for valid email
  const validateEmail = (email) => {
    return /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  // checks value of input when user unfocuses
  const handleBlur = (e) => {
    // if the input is for email, validate the email
    // if email fails the validation, display a warning that a valid email is required
    if (e.target.id === "email") {
      const emailWarning = document.getElementById("email-warning");
      validateEmail(e.target.value) ? emailWarning.style.display = "none" : emailWarning.style.display = "block";
    }

    // if the input is empty, display a warning that the field is required
    if (e.target.value === "") {
      e.target.nextSibling.style.display = "block";
    } else {
      e.target.nextSibling.style.display = "none";
    }
  };

  return (
    <div>
      <p className="warning">Contact Page is not functional as this site currently does not have a backend</p>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onBlur={handleBlur} required></input>
          <p className="required">This field is required</p>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" onBlur={handleBlur} required></input>
          <p className="required">This field is required</p>
          <p id="email-warning">Please enter a valid email address</p>
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <input type="text" name="message" id="message" onBlur={handleBlur} required></input>
          <p className="required">This field is required</p>
        </div>
        <div>
          <input type="submit" value="Submit Message"></input>
        </div>
      </form>
    </div>
  )
}