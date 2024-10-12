window.onload = function () {

    const wrapper = document.querySelector('.wrapper');
    const signUpLink = document.querySelector('.sign-up-link');
    const loginLink = document.querySelector('.login-link');

    signUpLink.onclick = () => {
        wrapper.classList.add('active');
    }
    loginLink.onclick = () => {
        wrapper.classList.remove('active');
    }

};