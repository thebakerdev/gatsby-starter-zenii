import validatejs from 'validate.js';

const validation = (function() {

    /* Initialize form validation */
    const init = () => {

        const form = document.getElementById('contact_form');

        const constraints = {
            name: {
                presence: true
            },
            email: {
                presence: true,
                email: true
            },
            message: {
                presence: true
            }
        };

        form.addEventListener('submit', (e) => {

            e.preventDefault();

            handleSubmit(form, constraints);
        });
    }

    /* Handle form submission */
    const handleSubmit = (form, constraints) => {

        let errors = validatejs.validate(form, constraints);

        clearErrors(constraints);

        if (typeof errors === 'object') {

            showErrors(errors);

            return false;
        }

        form.submit();
    }

    /* Displays errors */
    const showErrors = (errors) => {
       
        let keys = Object.keys(errors);

        keys.forEach(key => {
            showError(key, errors);
        });
    }

    /* Display individual error */
    const showError = (name, errors) => {

        let input = document.getElementById(name);

        input.classList.add('input--error');

        input.parentNode.insertBefore(createErrorMessage(errors[name][0]),input.nextSibling);
    }

    /* Creates an error message */
    const createErrorMessage = (error_message) => {

        let message = document.createElement('span');

        message.innerHTML = error_message;

        //message.classList.add('text-sm', 'text-error', 'block', 'mt-2')

        return message;
    }

    /* Clears all errors based on given constraints*/
    const clearErrors = (constraints) => {

        let keys = Object.keys(constraints);

        keys.forEach(name => {

            let input = document.getElementById(name) 

            if (input.classList.contains('input--error')) {

                input.classList.remove('input--error');

                input.nextSibling.remove();
            }
        });
    }

    return {
        init
    }
})();

export default validation;