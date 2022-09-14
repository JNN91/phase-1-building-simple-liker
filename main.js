// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like-glyph');

let favorite = (e) => {
  let emoji = e.target;
    mimicServerCall()
     .then(() => {
        if (emoji.textContent === "EMPTY_HEART") {
           emoji.textContent = "FULL_HEART"; 
            emoji.className = "activated-heart";
          }
else {
   emoji.textContent = EMPTY_HEART;
   emoji.className = "";
  }
})
  .catch((error) => {
    const errorModal = document.getElementById('modal');
      errorModal.className = "";
       errorModal.textContent = error;
        setTimeout(() => errorModal.className = "hidden", 3000);
    })
  }
  
  for (let like of likes) {
   like.addEventListener("click", favorite);
  }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
