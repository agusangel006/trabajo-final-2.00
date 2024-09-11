const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




var swiper = new Swiper(".mySwiper", 
    {
        effect: "coverflow",
        grabCursor:true,
        centeredSlides:true,
        slidesPerView: "2",
        coverflowEffect:
        {
            rotate:0,
            strech:1,
            depth:300,
            modifier:3,
            slideShadows:false
        },
        loop:true
});




const mybutton = document.getElementById("boton");
mybutton.addEventListener("click", function()
{
    if(window.confirm("Usted es mayor de edad? Aceptar/SI   Cancelar/NO"))
        {
            var enabled = document.getElementById("edadv");
            enabled.setAttribute("href", "./paginas/compra_autos.html");
        }
        else
        {
            var validate = document.getElementById("edadv");
            validate.removeAttribute("href");
        }
})