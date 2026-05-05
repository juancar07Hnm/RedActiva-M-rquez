const formulario = document.getElementById('formulario_contacto');

formulario.addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;

    if (nombre.length < 3) {
        alert("¡Error! El nombre de contacto debe ser más descriptivo (mínimo 3 letras).");
        document.getElementById('nombre').style.borderColor = "#3498db";
        event.preventDefault(); 
    } else {
        alert("Solicitud enviada a Czahara Fix & Cloud. El equipo de soporte le contactará pronto.");
    }
});