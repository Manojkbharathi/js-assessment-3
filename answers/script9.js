document.addEventListener('DOMContentLoaded', function () {
  const loadContentBtn = document.getElementById('loadContentBtn');
  loadContentBtn.addEventListener('click', loadContent);
});

function loadContent() {
  const contentContainer = document.getElementById('contentContainer');

  const xhr = new XMLHttpRequest();

  const url =
    'https://manojkbharathi.github.io/js-assessment-3//answers/index10.html';

  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      contentContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}
