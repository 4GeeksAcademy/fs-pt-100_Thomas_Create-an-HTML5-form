window.onload = function(){
  const dialog = document.querySelector('#error-msg');
  const form = document.querySelector('#myPaymentForm');
  const submitButton = document.querySelector("#sendForm");
  const resetButton = document.querySelector("#resetForm");
  const fields = document.querySelectorAll('input:not([type="submit"]):not([type="reset"]), textarea, select');
  dialog.classList.add("d-none");
  submitButton.addEventListener("click", function(e){ 
    if (!form.checkValidity()) { 
      e.preventDefault(); 
      dialog.classList.remove("d-none");
      fields.forEach(function(field){
        field.style.backgroundColor = "#f8d7da";
      });
    }
  });
  resetButton.addEventListener("click", function(e){ 
    form.reset();
    form.classList.remove("was-validated");
    dialog.classList.add("d-none");
    fields.forEach(function(field) {
      field.style.backgroundColor = "";
    });
  });

}