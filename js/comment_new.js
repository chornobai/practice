let commentForm = document.querySelector('.java_form ');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.java_comment');
let charCounter = document.querySelector('.char-counter');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

let newComment = document.createElement('li');
newComment.classList.add('user-comment');
newComment.textContent = commentField.value;
commentField.value = '';
commentList.append(newComment);
};

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

