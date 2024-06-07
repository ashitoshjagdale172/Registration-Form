function handleFormSubmission(event) {
    try {
      event.preventDefault();

      const formValues = {
        firstName:document.getElementById("firstName").value,
        lastName:document.getElementById("lastName").value,
        mobile:document.getElementById("mobile").value,
        age:document.getElementById("age").value,
        gender:document.querySelector('input[name="gender"]:checked')
          ? document.querySelector('input[name="gender"]:checked').value
          : "Not specified",
        address:document.getElementById("address").value,
        email:document.getElementById("email").value,
        pass:document.getElementById("password").value,
        conformpass:document.getElementById("confirm_password").value,
      };
      console.log("Form Values:", formValues);
    } catch (error) {
      console.log(error);
    }
  }




