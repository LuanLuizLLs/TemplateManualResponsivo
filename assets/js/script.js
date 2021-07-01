document.getElementById('botao_menu_mobile').onclick = function() {
    var menu_mobile  = document.getElementById('manual_menu');
    var menu_view = menu_mobile.getAttribute('view');
    if(menu_view == 'false') {
        menu_mobile.style = "animation: mostrar 0.5s; z-index: 2;";
        menu_mobile.setAttribute('view','true');
    } else {
        menu_mobile.style = "animation: fechar 0.5s";
        menu_mobile.setAttribute('view','false');
    }
};

function FecharMenu() {
    var menu_mobile  = document.getElementById('manual_menu');
    var menu_view = menu_mobile.getAttribute('view');
    if(menu_view == 'false') {
        menu_mobile.style = "animation: mostrar 1s; z-index: 2;";
        menu_mobile.setAttribute('view','true');
    } else {
        menu_mobile.style = "animation: fechar 1s";
        menu_mobile.setAttribute('view','false');
    }
}