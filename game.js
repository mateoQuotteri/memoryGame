const allFrontFaces = document.querySelectorAll(".font-face")
const allBackFaces = document.querySelectorAll(".back-face")
window.onload = function (e)
 {
    setTimeout(() => {
        allFrontFaces.forEach((frontFace) => {
            frontFace.classList.remove("front-face");
            frontFace.classList.add("back-face");
          });
      
          allBackFaces.forEach((backFace) => {
            backFace.classList.add("front-face");
            backFace.classList.remove("back-face");
          });
    }, 2000);
}