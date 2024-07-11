/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
    
        // Verificar si se han respondido todas las preguntas
        var preguntas = ["pregunta1", "pregunta2", "pregunta3", "pregunta4", "pregunta5"];
        var todasRespondidas = preguntas.every(function(preguntaId) {
          var respuesta = document.querySelector("input[name=" + preguntaId + "]:checked");
          return respuesta !== null;
        });
    
        var miBoton = document.getElementById("miBoton");
    
        // Habilitar o deshabilitar el botón según si todas están seleccionadas o no
        miBoton.disabled = !todasRespondidas;
    
        if (!todasRespondidas) {
          alert("Por favor, responde todas las preguntas.");
          return;
        }
    
        // Obtener las respuestas
        var respuesta1 = document.querySelector("input[name=pregunta1]:checked").value;
        var respuesta2 = document.querySelector("input[name=pregunta2]:checked").value;
        var respuesta3 = document.querySelector("input[name=pregunta3]:checked").value;
        var respuesta4 = document.querySelector("input[name=pregunta4]:checked").value;
        var respuesta5 = document.querySelector("input[name=pregunta5]:checked").value;
    
        // Contar las respuestas afirmativas
        var respuestasSi = 0;
        if (respuesta1 === "si") respuestasSi++;
        if (respuesta2 === "si") respuestasSi++;
        if (respuesta3 === "si") respuestasSi++;
        if (respuesta4 === "si") respuestasSi++;
        if (respuesta5 === "si") respuestasSi++;
    
        // Determinar el resultado
        var resultado = respuestasSi >= 4 ? "Es probable que su paciente tenga migraña, se sugiere consultar con un especialista." : "Es probable que su paciente NO tenga migraña";
    
        // Mostrar el resultado en pantalla
        var resultadoElemento = document.getElementById("resultado");
        resultadoElemento.textContent = "Resultado: " + resultado;
        resultadoElemento.style.fontSize = "large";
        resultadoElemento.style.fontWeight = "bold";
      });

});
