/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Função de redução da barra de navegação
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

    // Encolher a barra de navegação
    navbarShrink();

    // Encolher a barra de navegação quando a página é rolada
    document.addEventListener('scroll', navbarShrink);

    // Ativa o scrollspy do Bootstrap no elemento de navegação principal
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 72,
    //     });
    // };

   // Recolher a barra de navegação responsiva quando o alternador estiver visível
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

});

//Realiza a alteração do cabeçalõ conforme o dia
function carregar(){
    let hr = document.getElementById("hrdia")
    var data = new Date();
    var hora = data.getHours(); 
    var min = data.getMinutes(); 
    var seg = data.getSeconds();


    if(hora >= 0 && hora < 6){
        hr.innerHTML = `Boa Madrugada - ${hora}:${min}`
    }
    else if(hora >= 6 && hora < 12){
        hr.innerHTML = `Bom dia! - ${hora}:${min}`
    }
    else if(hora >= 12 && hora < 18){
        hr.innerHTML = `Boa Tarde! - ${hora}:${min}`
    }
    else{
        hr.innerHTML = `Boa Noite - ${hora}:${min}`
    }

}
