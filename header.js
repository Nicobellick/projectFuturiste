let content = document.querySelector('#burger-content');
let sidebarBody = document.querySelector('#burger-sidebar-body');

sidebarBody.innerHTML = content.innerHTML;

let button = document.querySelector('#burger-button');
let overlay = document.querySelector('#burger-overlay');
let activatedClass = 'burger-activated';

button.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.add(activatedClass);
})
button.addEventListener('keydown', function(e) {
    if (this.parentNode.classList.contains(activatedClass))
    { 
        if (e.repeat === false && e.whiwh === 27)
        this.parentNode.classList.remove(activatedClass);
    }

})
overlay.addEventListener('click', function(e){
e.preventDefault();
this.parentNode.classList.remove(activatedClass);
});
