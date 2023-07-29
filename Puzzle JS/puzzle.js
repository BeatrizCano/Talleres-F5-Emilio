let boxes= document.querySelectorAll(".contenedor div");

boxes.forEach(box=> {
    box.addEventListener('click', Hidde)
})

function Hidde() {
    this.style.opacity=0;
}