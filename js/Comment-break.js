let commentForm = document.querySelector('.java_form');

let commentField = document.querySelector('.java_comment');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length <10 || commentField.value.length>=200) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};
