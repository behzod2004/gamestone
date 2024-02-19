//TD START
let table = document.querySelector('.table');
function createTd (){
    for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 8; j++) {
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.classList.add('emoji');
        td.appendChild(p);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
}
createTd();
// TD END
function clearTd(){
    for(let i=0;i<tdarr.length;i++){
        if(tdarr[i].classList.contains('active')){
            tdarr[i].classList.remove('active')
            emoji[i].innerText=''
        }else if(tdarr[i].classList.contains('noactive')){
            tdarr[i].classList.remove('noactive')
            emoji[i].innerText=''
        }
    }
}

// RANDOM ARRAY START
const tdarr = document.querySelectorAll('td');
let arr = [];
let k = 10;
function random(k){
    arr = []
    for (let i = 0; i < k; i++) {
        let a = Math.floor(Math.random() * 80);
        if (arr.includes(a)) {
            a = Math.floor(Math.random() * 80);
        }
        arr.push(a);
    }
    return arr;
}
// RANDOM ARRAY END
let green = document.querySelector('.title');
let red = document.querySelector('.subtitle');
arr = random(k)
console.log(arr)
console.log(tdarr)
let count = 0;
let redcount = 0;
let emoji = document.querySelectorAll('.emoji');
// TD CLICK START
for (let i = 0; i < tdarr.length; i++) {
    tdarr[i].addEventListener('click', function () {
        if (arr.includes(i)) {
            if (!tdarr[i].classList.contains('active')) {
                tdarr[i].classList.add('active');
                emoji[i].textContent = '💎';
                count++
            }
            green.innerText = `You found 💎:${count}`;
        } else {
            if (!tdarr[i].classList.contains('noactive')) {
                tdarr[i].classList.add('noactive');
                emoji[i].textContent = '💣';
                redcount++
            }
            red.innerText = `You found 💣:${redcount}`;
        }
    })
}
// TD CLICK END
let n=15;
let secund = document.querySelector('.sekund');
let bgred = document.querySelector('.bg-red');
let bggren = document.querySelector('.bg-gren');
const bg = document.querySelector('.bg');
const bgbutton = document.querySelector('.bg-button');
const div = document.querySelector('.div');
const bgtop = document.querySelector('.bg-top')
const bgbottom = document.querySelector('.bg-bottom')
const startbutton = document.querySelectorAll('.start-button')
const starttext = document.querySelector('.start-text')
// START-BTN START
for(let i=0;i< startbutton.length;i++){
    startbutton[i].addEventListener('click',function(){
        if(i===0){
            k=10;
        }else if(i===1){
            k=20;
        }else{
            k=30;
        }
    arr = random(k);
    bg.classList.remove('active');
    bgred.innerText = 0;
    bggren.innerText = 0;
    redcount = 0;
    count = 0;
    clearTd();
    green.innerText = `you found 💎:${count}`;
    red.innerText = `you found 💣:${redcount}`;
    // TIMER START
        setTimeout(function() {
            bgred.innerText = `${redcount}`
            bggren.innerText = `${count}`
            bg.classList.add('active');
            div.classList.add('active');
            bgtop.classList.add('active');
            bgbottom.classList.add('active');
            starttext.classList.remove('active');
        }, 15000);
    // TIMER END
        n=15
    // INTERVAL START
      var intervalId =  setInterval(function() {
            if(n>0){
                n=n-1;
                secund.textContent = n; 
            }else{
                clearInterval(intervalId);
            }
        }, 1000);
    })
    // INTERVAL END
}


