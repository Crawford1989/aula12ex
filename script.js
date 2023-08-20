function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`;
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += ", Bom dia";
        img.src = 'manhãp.png';
        window.document.body.style.background = "#6685a0";
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML +=", Boa tarde!";
        img.src = 'tardep.png';
        window.document.body.style.background = "#e69b61";
    } else {
        msg.innerHTML += ", Boa noite!";
        img.src = 'noitep.png';
        window.document.body.style.background = "#4c3a5e";
    }

    var diaNome = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");


    var mesNome = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");


    novo.innerHTML=`Hoje é ${diaNome[data.getDay()]} , ${data.getDate()} de ${mesNome[data.getMonth()]} de ${data.getFullYear()}`;

}
