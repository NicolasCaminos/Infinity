document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('button');
    const to_name = document.getElementById('contact_form');
    const message = document.getElementById('message');
    document.getElementById('contact_form').addEventListener('submit', function (event) {
        event.preventDefault();
        const serviceID = 'service_kjgrk04';
        const templateID = 'template_9mofe2o';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                Swal.fire({
                    title: "Mail Enviado",
                    text: "¡Su mail se envió con éxito!",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                });
                // Reiniciar los valores de las variables
                to_name.reset();
                btn.value = 'Enviar';
            }, (err) => {
                btn.value = 'Mail no enviado';
                Swal.fire({
                    title: "Mail No Enviado",
                    text: JSON.stringify(err),
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });

            });

    });

    document.addEventListener('DOMContentLoaded', function () {
        let formulario = document.getElementById('contact_form');
        formulario.addEventListener('submit', function () {
            formulario.reset();
        });
    });
});