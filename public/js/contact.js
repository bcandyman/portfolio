const eleForm = document.getElementById('contact-form');

eleForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  $.post('/api/send', data)
    .done(() => alert('Your email has been sent!'))
    .fail(() => alert('😟Oh no! Something has gone wrong.'));
});
