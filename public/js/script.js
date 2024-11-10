const container = document.querySelector('#container')
const registerBtn = document.querySelector('#register')
const loginBtn = document.querySelector('#login')

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active')
})
loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active')
})

const signupMediaBtn = document.querySelector('#sign-up-media');
const signinMediaBtn = document.querySelector('#sign-in-media');
const formContainer = document.querySelector('.form-container');

signupMediaBtn.addEventListener('click', () => {
    formContainer.classList.add('media-active');
    formContainer.classList.remove('media-passive');
});

signinMediaBtn.addEventListener('click', () => {
    formContainer.classList.add('media-passive');
    formContainer.classList.remove('media-active');
});
