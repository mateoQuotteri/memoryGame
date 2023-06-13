const allFrontFaces = document.querySelectorAll(".front-face")
const allBackFaces = document.querySelectorAll(".back-face")
window.onload = function (e)
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