document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (name && email && phone && password) {
        alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        document.getElementById('registerForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
