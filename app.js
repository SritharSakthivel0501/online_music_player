let range = document.querySelector("input")
// console.log(range);
let audioslist = document.querySelector("audio")
let playtbtns = document.getElementById("playbtn")
// console.log(playtbtns);
let nextsongbtn = document.getElementById("nextsongbtn")
// console.log(nextsongbtn);
let img = document.querySelector("img")
// console.log(img);
let namelist = document.getElementById("artist")
// console.log(namelist);
let numberone = document.getElementById("numberone")
// console.log(numberone);
let numbertwo = document.getElementById("numbertwo")
// console.log(numbertwo);
let songname = document.getElementById("song-name")
// console.log(songname);
let backward = document.getElementById("backward")
// console.log(backward);
let forwards = document.getElementById("forwards")
// console.log(forwards);



let Allsongs = [{
    names: "Anirudh",
    imgs: "./Anirudh_Ravichander_performs_Music___Symphony_at_the_DEC_Arena_m54284.jpg",
    Music: "./song/Nee-Partha.mp3",
    songname: "Nee-Partha"
},
{
    names: "Anirudh",
    imgs: "./Anirudh_Ravichander_performs_Music___Symphony_at_the_DEC_Arena_m54284.jpg",
    Music: "./song/Kanave-Kanave-MassTamilan.com.mp3",
    songname: "Kanave-Kanave-MassTamilan"
},
{
    names: "Anirudh",
    imgs: "./Anirudh_Ravichander_performs_Music___Symphony_at_the_DEC_Arena_m54284.jpg",
    Music: "./song/Poo-Nee-Poo-2.mp3",
    songname: "Nee-Poo-Nee-Poo"
},
{
    names: "Anirudh",
    imgs: "./Anirudh_Ravichander_performs_Music___Symphony_at_the_DEC_Arena_m54284.jpg",
    Music: "./song/VIP-Title-Song.mp3",
    songname: "VIP-Title"
},
{
    names: "Anirudh",
    imgs: "./Anirudh_Ravichander_performs_Music___Symphony_at_the_DEC_Arena_m54284.jpg",
    Music: "./song/Aathi.mp3",
    songname: "Aathi"
},
{
    names: "Anirudh",
    imgs: "./Anirudh_Ravichander_performs_Music___Symphony_at_the_DEC_Arena_m54284.jpg",
    Music: "./song/Megham-Karukatha-MassTamilan.dev.mp3",
    songname: "Megham-Karukatha"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Naan-Sonnadhum-Mazhai-Vandhucha.mp3",
    songname: "Naan-Sonnadhum-Mazhai-Vandhucha"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Pirai-Thedum.mp3",
    songname: "Pirai"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Yathe-Yathe.mp3",
    songname: "Yathe-Yathe"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Yaar-Indha-Saalai-Oram.mp3",
    songname: "Yaar-Indha-Saalai-Oram"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Kaathodu-Kaathanen-MassTamilan.fm.mp3",
    songname: "Kaathodu-Kaathanen-MassTamilan"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Kangalile.mp3",
    songname: "Kangalile"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Adiye-MassTamilan.fm.mp3",
    songname: "Adiye-MassTamilan"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Ellu-Vaya-Pookalaye-MassTamilan.org.mp3",
    songname: "Ellu-Vaya-Pookalaye"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Poraale-MassTamilan.com.mp3",
    songname: "Poraale-MassTamilan"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Yennachu-Yedhachu.mp3",
    songname: "Yennachu-Yedhachu"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Pookal-Pookum.mp3",
    songname: "Pookal-Pookum"
},
{
    names: "Gv prakash",
    imgs: "./A-Musical-Treat-With-GV-Prakash-3.jpg",
    Music: "./song/Minnazhgal-Koothadam.mp3",
    songname: "Minnazhgal-Koothadam"
}
]

window.addEventListener('keyup', (e) => {
    if (e.code == 'space') {
        audioslist.pause()
        playtbtns.classList.remove("fa-pause")
        playtbtns.classList.add("fa-play")
    }
    else {
        audioslist.play()
        playtbtns.classList.add("fa-pause")
        playtbtns.classList.remove("fa-play")
    }
    setInterval(() => {
        range.value = audioslist.currentTime;
        addtaim();
    }, 500)
})

audioslist.onloadedmetadata = function () {
    range.max = audioslist.duration;
}
window.addEventListener("DOMContentLoaded", () => {
    audioslist.src = Allsongs[count].Music;
})

let count = 0;
nextsongbtn.addEventListener("click", (e) => {
    // console.log(e.target);
    count++
    audioslist.src = Allsongs[count].Music;
    img.src = Allsongs[count].imgs;
    songname.innerText = Allsongs[count].names;
    namelist.innerText = Allsongs[count].songname;
    audioslist.play();
    playtbtns.classList.add("fa-pause")
    playtbtns.classList.remove("fa-play")
    setInterval(() => {
        range.value = audioslist.currentTime;
        addtaim();
    }, 500)
})
playtbtns.addEventListener("click", (e) => {
    if (playtbtns.classList.contains("fa-pause")) {
        audioslist.pause()
        playtbtns.classList.remove("fa-pause")
        playtbtns.classList.add("fa-play")
    }
    else {
        audioslist.play()
        playtbtns.classList.add("fa-pause")
        playtbtns.classList.remove("fa-play")
    }
    
    setInterval(() => {
        range.value = audioslist.currentTime;
        addtaim()
    }, 500)
})
range.addEventListener("input", () => {
    audioslist.play();
    audioslist.currentTime = range.value
    playtbtns.classList.remove("fa-play")
    playtbtns.classList.add("fa-pause")
})

function addtaim() {
    let one = Math.floinputRangeor(audioslist.currentTime / 60)
    let curretSec = Math.floor(audioslist.currentTime - (one * 60))

    let two = Math.floor(audioslist.duration / 60)
    let durationSec = Math.floor(audioslist.duration - (two * 60))

    if (curretSec < 10) {
        curretSec = "0" + curretSec;
        one = "0" + one;
    }
    else if (curretSec > 9) {
        one = "0" + one;
    }
    numberone.innerText = `${one}:${curretSec}`;
    numbertwo.innerText = `${two}:${durationSec}`;
}
range.addEventListener("input", () => {
    audioslist.play();
    audioslist.currentTime = range.value
    playtbtns.classList.remove("fa-play")
    playtbtns.classList.add("fa-pause")
    setInterval(() => {
        range.value = audioslist.currentTime;
        addtaim();
    }, 500)
})

backward.addEventListener("click",()=>{
    audioslist.currentTime = audioslist.currentTime+10;
})

 forwards.addEventListener("click",()=>{
    audioslist.currentTime =  audioslist.currentTime-10;
})