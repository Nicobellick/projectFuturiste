const carHero = document.querySelector('.car-hero')
const carHero1 = document.querySelector('.car-hero-2')

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let speed = carHero.dataset.speed;
    let speed1= carHero1.dataset.speed
    carHero.style.transform =`translateY(${scroll * speed}px)`;
    carHero1.style.transform =`translateX(${scroll * speed1}px)`;
})

//Counter

let n = ["0","855","1500"]; 
let cpt = -1; 
let duree = ["4","5","1"]; 
let delta =[Math.ceil((duree[0] * 1000) / n[0]), Math.ceil((duree[1] * 1000) / n[0]), Math.ceil((duree[1] * 1000) / n[2]) ]; 
let count =  document.querySelectorAll('.plusgros'); 

function littre() {
  count[1].innerHTML = ++cpt;
  if( cpt < n[1] ) { 
     setTimeout(littre, delta[1]);
  }
}
function autonomie() {
    count[2].innerHTML = ++cpt;
    if( cpt < n[2] ) { 
       setTimeout(autonomie, delta[2]);
    }
}
setTimeout(littre, delta[1]);
setTimeout(autonomie, delta[2]);


// mouse cursor
const cursor =document.querySelector('.cursor')
document.addEventListener('mousemove', event => {
  cursor.setAttribute('style','top:'+(event.pageY)+'px; left:'+(event.pageX)+"px;")
})

// Slide fiche 
