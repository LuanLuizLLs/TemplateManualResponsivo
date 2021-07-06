document.getElementById('botao_menu_mobile').onclick = function() {
    var menu_mobile  = document.getElementById('manual_menu');
    var menu_view = menu_mobile.getAttribute('view');
    if(menu_view == 'false') {
        menu_mobile.style = "animation: mostrar-menu 0.5s; left: 0";
        menu_mobile.setAttribute('view','true');
    } else {
        menu_mobile.style = "animation: fechar-menu 0.5s;";
        menu_mobile.setAttribute('view','false');
    }
};

function FecharMenu() {
    var menu_mobile  = document.getElementById('manual_menu');
    var menu_view = menu_mobile.getAttribute('view');
    if(menu_view == 'true') {
        menu_mobile.style = "animation: fechar-menu 1s";
        menu_mobile.setAttribute('view','false');
    }
}

function Descricao() {
    var manual_descricao  = document.getElementById('manual_col_descricao');
    var descricao_view = manual_descricao.getAttribute('view');
    var tamanho_tela = window.innerWidth;

    if (tamanho_tela > 799) {
        if(descricao_view == 'false') {
            manual_descricao.style = "animation: mostrar-descricao 0.4s; width: 35%";
            manual_descricao.setAttribute('view','true');
        } else {
            manual_descricao.style = "animation: fechar-descricao 0.4s;";
            manual_descricao.setAttribute('view','false');
        }
    } else {
        if(descricao_view == 'false') {
            manual_descricao.style = "animation: mostrar-descricao 0.4s; left: 0%;";
            manual_descricao.setAttribute('view','true');
        } else {
            manual_descricao.style = "animation: fechar-descricao 0.4s;";
            manual_descricao.setAttribute('view','false');
        }
    }
}