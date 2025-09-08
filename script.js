addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form, .contact-form2');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Interest Calculator Submission
    const interestForm = document.querySelector('.interest-form');
    if (interestForm) {
        interestForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const principal = parseFloat(document.getElementById('principal').value);
            const rate = parseFloat(document.getElementById('rate').value);
            const time = parseFloat(document.getElementById('time').value);

            if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
                alert('Please enter valid numbers for all fields.');
                return;
            }

            const interest = (principal * rate * time) / 100;
            const totalAmount = principal + interest;

            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h3>Calculation Result:</h3>
                <p>Simple Interest: $${interest.toFixed(2)}</p>
                <p>Total Amount after ${time} years: $${totalAmount.toFixed(2)}</p>
            `;
        });
    }
});

  
