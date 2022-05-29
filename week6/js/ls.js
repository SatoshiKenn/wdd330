function readFromLS(key){
    if(localStorage.getItem(key)){
        let data = JSON.parse(localStorage.getItem(key))
        return data
    }else{
        return []
    }
}

function writeToLS(key,data){
    localStorage.setItem(key, JSON.stringify(data));
}

export {readFromLS, writeToLS};


/*
// local storage helpers

//function to stringify

function saveLocal(items) {
    localStorage.setItem('todoItemsTut', JSON.stringify(items));
  }
  
  //function to parse
  function getLocal() {
    return JSON.parse(localStorage.getItem('todoItemsTut'));
  }
  
  export { getLocal, saveLocal };
*/