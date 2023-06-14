const allFrontFaces = document.querySelectorAll(".front-face")
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
allBackFaces.forEach((backFace) => {
  backFace.addEventListener("click" , (e)=> {
    let broElement = backFace.previousElementSibling;
    console.log(broElement);
    backFace.classList.add("back-face")
    
    backFace.classList.remove("front-face")
    broElement.classList.remove("opacity")
  })
});