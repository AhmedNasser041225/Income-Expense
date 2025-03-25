
    // Get modal elements
    const signInModal = document.getElementById('sign-in-modal');
    const registerModal = document.getElementById('register-modal');

    // Get buttons and links
    const signInButton = document.querySelector('a[href="#sign-in"]'); // Sign In button in the navigation
    const registerButton = document.querySelector('a[href="#register"]'); // Register button in the navigation
    const goToRegisterLink = document.getElementById('go-to-register'); // "Register here" link in Sign In modal

    // Get close buttons
    const closeSignInButton = signInModal.querySelector('.close-btn');
    const closeRegisterButton = registerModal.querySelector('.close-btn');

    // Open Sign In modal
    signInButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        signInModal.style.display = 'flex'; // Show the Sign In modal
    });

    // Open Register modal
    registerButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        registerModal.style.display = 'flex'; // Show the Register modal
    });

    // Redirect from Sign In to Register modal
    goToRegisterLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        signInModal.style.display = 'none'; // Close Sign In modal
        registerModal.style.display = 'flex'; // Open Register modal
    });

    // Close Sign In modal
    closeSignInButton.addEventListener('click', () => {
        signInModal.style.display = 'none'; // Hide the Sign In modal
    });

    // Close Register modal
    closeRegisterButton.addEventListener('click', () => {
        registerModal.style.display = 'none'; // Hide the Register modal
    });

    // Close modals when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === signInModal) {
            signInModal.style.display = 'none'; // Hide the Sign In modal
        }
        if (e.target === registerModal) {
            registerModal.style.display = 'none'; // Hide the Register modal
        }
    });
