function setActiveTab(sectionId, buttonIndex) {
    var sections = ['pi-section', 'ci-section', 'skills-section'];
    var buttons = document.querySelectorAll('.tab-btn');

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (section) {
            section.classList.toggle('active', sections[i] === sectionId);
        }
        if (buttons[i]) {
            buttons[i].classList.toggle('active', i === buttonIndex);
        }
    }
}

function showPI() {
    setActiveTab('pi-section', 0);
}

function showCI() {
    setActiveTab('ci-section', 1);
}

function showSkills() {
    setActiveTab('skills-section', 2);
}

function resetForm() {
    var form = document.getElementById('signupForm');
    if (form) {
        form.reset();
    }
}

function loginUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please enter your email and password.');
        return;
    }

    window.location.href = 'userhome.html';
}

function registerUser() {
    var form = document.getElementById('signupForm');
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var experience = document.getElementById('experience').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var termsAccepted = document.getElementById('terms').checked;
    var selectedWorkMode = document.querySelector('input[name="workmode"]:checked');
    var selectedSkills = document.querySelectorAll('input[name="skills"]:checked');

    if (fullname === '' || email === '' || gender === '' || experience === '' || phone === '' || dob === '' || password === '' || confirmPassword === '') {
        alert('Please complete all required fields.');
        return;
    }

    if (!selectedWorkMode) {
        alert('Please select a preferred work mode.');
        return;
    }

    if (selectedSkills.length === 0) {
        alert('Please choose at least one skill.');
        return;
    }

    if (!termsAccepted) {
        alert('Please accept the terms to continue.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Registration successful. Redirecting to your home page.');
    if (form) {
        form.reset();
    }
    window.location.href = 'userhome.html';
}

function sendMessage() {
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields before sending.');
        return;
    }

    alert('Message sent successfully.');
    document.getElementById('contactForm').reset();
}
