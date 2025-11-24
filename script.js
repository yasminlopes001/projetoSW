// Desabilita o envio de formulário se houver campos inválidos
(function () {
    'use strict'

    // Pega todos os formulários que queremos aplicar estilos de validação Bootstrap
    var forms = document.querySelectorAll('.needs-validation')

    // Percorre todos eles e previne o envio
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()