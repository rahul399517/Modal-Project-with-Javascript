const modal = document.querySelector(".modalbox");
const overlay = document.querySelector(".overlay");
const btnclosemodalbox = document.querySelector(".closemodalbox");
const btnopenmodalbox = document.querySelectorAll("#openmodalbox");
const showmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//'All' will select all button with class openmodal else it wil only execute on first butto
//To sjow content of modal box , we need a for loop
for (let i = 0; i < btnopenmodalbox.length; i++) {
  console.log(btnopenmodalbox[i].textContent);
  btnopenmodalbox[i].addEventListener("click", function () {
    //instead of adding below code we called the function to reduce the code reduncy
    /*  modal.classList.remove("hidden");
    overlay.classList.remove("hidden");*/
    showmodal();
  });
}
btnclosemodalbox.addEventListener("click", function () {
  closemodal();
});
//addind close function in blur region so that , on click on that region , it close the modal
overlay.addEventListener("click", function () {
  closemodal();
});
//useing Keyboard key events NOTE :Keyboard events are global in nature
document.addEventListener("keydown", function (e) {
  //console.log(e); -> it will show key object
  //console.log(e.key); -> it will show particular property of the e object
  if (e.key === "c" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
