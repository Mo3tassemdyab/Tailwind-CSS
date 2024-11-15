const mobileBtn = document.querySelector('#btn');
const mobileMenu = document.querySelector('#mobile-icon');

mobileBtn.addEventListener( 'click', ()=>{
mobileMenu.classList.toggle('hidden');
} )

document.getElementById('toggle').addEventListener('change', function(){
    document.querySelector('html').classList.toggle('dark');
})