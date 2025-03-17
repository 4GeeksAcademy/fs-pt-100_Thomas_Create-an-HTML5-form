document.addEventListener('DOMContentLoaded', () => {
  // Fetch all the forms we want to apply custom Bootstrap validation to
  const forms = document.querySelectorAll('.needs-validation');
  
  // Loop over them and prevent submission if invalid
  Array.prototype.slice.call(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        // Prevent actual form submission
        event.preventDefault();
        event.stopPropagation();
      }
      // Add Bootstrap's 'was-validated' class to trigger styling
      form.classList.add('was-validated');
    }, false);
  });
});