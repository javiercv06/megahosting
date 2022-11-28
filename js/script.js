
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



function validar(){
    var nombre, correo, password;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    password = document.getElementById("password").value;

    expresion = /\w+@\w+\.+[a-z]/;
       

    if(nombre === "" || correo === "" || password === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length >30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(correo.length >100){
        alert("El correo es muy largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("Debe ingresar algo como ejemplo@ejemplo.com")
        return false;
    }
    else if(password.length >20){
        alert("La contraseña es muy larga");
        return false;
    }
}