const allFrontFaces = document.querySelectorAll(".front-face")
const allMemoryCards = document.querySelectorAll(".memory-card")
const allBackFaces = document.querySelectorAll(".back-face")
window.onload = (e) =>  
 {
    setTimeout(() => {
        allFrontFaces.forEach((frontFace) => {
            frontFace.classList.add("opacity")
          });
          allBackFaces.forEach((backFace) => {
            backFace.classList.remove("back-face")

            backFace.classList.add("front-face")
          });
          
    }, 2000);

}

function comparing(cardOne , cardTwo) {
  if (cardOne === cardTwo) {
    console.log("Ganaste");
  } else {
    console.log("perdiste");
  }
}

let contador = 0;
let array = []
allMemoryCards.forEach((memoryCard) => {
  memoryCard.addEventListener("click" , (e)=> {

    if (contador === 2) {
      return
    }
    let frontFace = memoryCard.querySelector(".front-face");

    frontFace.classList.remove("opacity");

    let cardSelected = frontFace.id;

    let broElement = frontFace.nextElementSibling;
    broElement.classList.add("back-face")
    broElement.classList.remove("front-face")

    contador += 1;
    array.push(cardSelected);
    if (contador === 2) {
      let firstCard = array[0];
      let secondCard = array[1]

      comparing(firstCard, secondCard)
    }
    
  })
});
