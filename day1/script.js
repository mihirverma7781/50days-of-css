const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActivClass();
    panel.classList.add("active");
  });
});

function removeActivClass() { 
    panels.forEach((panel)=> {
        panel.classList.remove("active");
    })
}