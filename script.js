document.getElementById('password-input').addEventListener('input', function() {
    var password = this.value;

    
    var lengthRequirement = document.getElementById('length');
    var lengthIcon = lengthRequirement.querySelector('.icon');
    if (password.length >= 8) {
        lengthRequirement.classList.add('valid');
        lengthRequirement.classList.remove('invalid');
        lengthIcon.classList.remove('fa-circle');
        lengthIcon.classList.add('fa-check');
    } else {
        lengthRequirement.classList.add('invalid');
        lengthRequirement.classList.remove('valid');
        lengthIcon.classList.remove('fa-check');
        lengthIcon.classList.add('fa-circle');
    }

    
    var uppercaseRequirement = document.getElementById('uppercase');
    var uppercaseIcon = uppercaseRequirement.querySelector('.icon');
    if (/[A-Z]/.test(password)) {
        uppercaseRequirement.classList.add('valid');
        uppercaseRequirement.classList.remove('invalid');
        uppercaseIcon.classList.remove('fa-circle');
        uppercaseIcon.classList.add('fa-check');
    } else {
        uppercaseRequirement.classList.add('invalid');
        uppercaseRequirement.classList.remove('valid');
        uppercaseIcon.classList.remove('fa-check');
        uppercaseIcon.classList.add('fa-circle');
    }

    
    var numberRequirement = document.getElementById('number');
    var numberIcon = numberRequirement.querySelector('.icon');
    if (/\d/.test(password)) {
        numberRequirement.classList.add('valid');
        numberRequirement.classList.remove('invalid');
        numberIcon.classList.remove('fa-circle');
        numberIcon.classList.add('fa-check');
    } else {
        numberRequirement.classList.add('invalid');
        numberRequirement.classList.remove('valid');
        numberIcon.classList.remove('fa-check');
        numberIcon.classList.add('fa-circle');
    }
});

function showPassword() {
    const passwordInput = document.getElementById('password-input');
    const eyeIcon = document.querySelector('.toggle-password i');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";  
        eyeIcon.classList.remove('fa-eye');  
        eyeIcon.classList.add('fa-eye-slash'); 
    } else {
        passwordInput.type = "password"; 
        eyeIcon.classList.remove('fa-eye-slash'); 
        eyeIcon.classList.add('fa-eye'); 
    }
}









