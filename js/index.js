const sendButton = document.getElementById('send');
const nameInputValue = document.getElementById('name').value;
const emailInputValue = document.getElementById('email').value;
const somethingInputValue = document.getElementById('something').value;

sendButton.addEventListener('click', () => {
  console.log(JSON.stringify({ nameInputValue, emailInputValue, somethingInputValue }));

  if (
    !nameInputValue.trim() ||
    !emailInputValue.trim() ||
    !somethingInputValue.trim()
  ) {
    alert('Debes llenar todos los campos para poder contactarnos');
  } else {
    Email.send({
      SecureToken: 'bceedb94-3944-4948-a2d0-1c2d6f66237b',
      To: 'agredalex1997@gmail.com',
      From: emailInputValue,
      Subject: `Mensaje de ${nameInputValue} desde esaapp.com`,
      Body: somethingInputValue,
    }).then(function () {
      alert('Pronto nos contactaremos contigo');
    });
  }
});
