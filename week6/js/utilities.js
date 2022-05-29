function qs(selector) {
  let element = document.querySelector(`${selector}`); 

  return element;
}

function onTouch(elementSelector, callback) {
  elementSelector.addEventListener("click", callback);
  console.log(elementSelector, callback);
}

export {qs, onTouch};