const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
const button= document.getElementById('button');
let score = 0
let time=20;
let intervalid;
timedisplay= document.getElementById('timedisplay');

function play(){

    timer()
    run()
}
function timer(){
    intervalid=setInterval(() => {
        time--;
       
        timedisplay.textContent= time;
        console.log(time);

        if(time==0){
            clearInterval(intervalid);
          console.log('times up!')
        }
    }, 1000);

}





const sound = new Audio("audio_Pop.mp3")

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'mole.png'

    img.addEventListener('click', () => {
        score += 1
        sound.play()
        scoreEl.textContent = score
        img.src = 'mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })
    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1000)
if (time>0){
    hole.appendChild(img)
}
return
  
}

button.addEventListener('click', function(){
    console.log('button click')
    button.disabled=true;
})
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})
// const tanah = document.querySelectorAll('.hole');
// const tikus = "mole.png"
// const papanSkor = document.querySelector('.score span');
// const sound = new Audio("audio_Pop.mp3")

// let tanahSebelumnya;
// let selesai;
// let skor;

// function randomTanah(tanah) {
//   const t = Math.floor(Math.random() * tanah.length);
//   const tRandom = tanah[t];
//   if (tRandom == tanahSebelumnya) {
//     randomTanah(tanah);
//   }
//   tanahSebelumnya = tRandom;
//   return tRandom;
// }

// function randomWaktu(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }

// function munculkanTikus() {
//   const tRandom = randomTanah(tanah);
//   const wRandom = randomWaktu(600, 800);
//   tRandom.classList.add('muncul');

//   setTimeout(() => {
//     tRandom.classList.remove('muncul');
//     if (!selesai) {
//       munculkanTikus();
//     }
//   }, wRandom);
// }

// function mulai() {
//   selesai = false;
//   skor = 0;
//   papanSkor.textContent = 0;
//   munculkanTikus();
//   setTimeout(() => {
//     selesai = true;
//   }, 15000);
// }

// function pukul() {
//   skor++;
//   this.parentNode.classList.remove('muncul');
//   sound.play();
//   papanSkor.textContent = skor;
// }

// tikus.forEach(t => {
//   t.addEventListener('click', pukul);
// });
