document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('preboardingForm');
    const submitBtn = document.getElementById('submitBtn');
    const privacyCheck = document.getElementById('privacyCheck');

    form.addEventListener('submit', function (event) {
        // Prevent form from submitting if validation fails
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission
        }
    });

    function validateForm() {
        let valid = true;

        // Check if all required fields are filled
        const inputs = form.querySelectorAll('input[required]');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input, 'This field is required');
                valid = false;
            } else {
                clearError(input);
            }
        });

        // Check if privacy agreement is checked
        if (!privacyCheck.checked) {
            showError(privacyCheck, 'You must agree to the privacy policy');
            valid = false;
        } else {
            clearError(privacyCheck);
        }

        // Check email validity
        const email = form.querySelector('input[name="email"]');
        if (email && !email.validity.valid) {
            showError(email, 'Please enter a valid email address');
            valid = false;
        } else {
            clearError(email);
        }

        // Check phone number pattern (11 digits, starting with 09)
        const phone = form.querySelector('input[name="phone"]');
        const phonePattern = /^09\d{9}$/;
        if (phone && !phonePattern.test(phone.value.replace(/\s+/g, '').replace(/-/g, ''))) {
            showError(phone, 'Please enter a valid phone number (09123456789)');
            valid = false;
        } else {
            clearError(phone);
        }

        return valid;
    }

    function showError(input, message) {
        // Add error message display logic
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error-message')) {
            const errorSpan = document.createElement('span');
            errorSpan.classList.add('error-message');
            errorSpan.classList.add('text-red-500');
            errorSpan.classList.add('text-sm');
            errorSpan.textContent = message;
            input.parentElement.appendChild(errorSpan);
        } else {
            input.nextElementSibling.textContent = message;
        }
    }

    function clearError(input) {
        // Clear error message display logic
        if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
            input.nextElementSibling.remove();
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preboardingForm');
    const modal = document.getElementById('confirmation-modal');
    const closeModal = document.getElementById('modal-close');
    const applicationIdElement = document.getElementById('application-id');
    const content = document.querySelector('.w-full.min-h-screen');
    const footer = document.querySelector('footer');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Generate a random application ID
        const applicationId = 'APP-' + Math.random().toString(36).substring(2, 15).toUpperCase();
        applicationIdElement.textContent = applicationId;

        // Show the modal and apply blur to content and footer
        modal.classList.remove('hidden');
        content.classList.add('blur');
        footer.classList.add('blur'); // Apply blur to footer
    });

    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden'); // Hide the modal
        content.classList.remove('blur'); // Remove blur from content
        footer.classList.remove('blur'); // Remove blur from footer
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden'); // Hide the modal if clicking outside of it
            content.classList.remove('blur'); // Remove blur from content
            footer.classList.remove('blur'); // Remove blur from footer
        }
    });
});
