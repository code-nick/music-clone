console.log("welcome to my music clone");
let songIndex = 0;
let audioElement = new Audio('/song/2.mp3.mp3')
let masterplay = document.getElementById("masterplay");
let myoprogressbar = document.getElementById("myoprogressbar");
let gif = document.getElementById("gif");
// let songitem =Array.from(document.getElementById('songitem'));


let songs = [

    { songName: "Kuch bhi ", filePath: "C:\Users\Sky\Desktop\music-clone/song/1.mp3", coverPath: "/cover/covimage.jpg" },
    { songName: "Kuch bhi ", filePath: "C:\Users\Sky\Desktop\music-clone/song/1.mp", coverPath: "/cover/covimage.jpg" },
    { songName: "Kuch bhi ", filePath: "C:\Users\Sky\Desktop\music-clone/song/1.mp", coverPath: "/cover/covimage.jpg" },
    { songName: "Kuch bhi ", filePath: "C:\Users\Sky\Desktop\music-clone/song/1.mp", coverPath: "/cover/covimage.jpg" },

]
// songitem.forEach((element,i)=>{
//     console.log(element,i); 
//     element.getElementByTagName("img")[0].src= song[i].coverPath;
// })



masterplay.addEventListener('click', () => {
    if (masterplay.classList.contains('bxs-caret-right-circle')) {
        audioElement.play()
        masterplay.classList.remove('bxs-caret-right-circle')
        masterplay.classList.add('bx-pause-circle')
        gif.style.opacity=1;

    }
    else if (masterplay.classList.contains('bx-pause-circle')) {
        audioElement.pause()
        masterplay.classList.add('bxs-caret-right-circle')
        masterplay.classList.remove('bx-pause-circle')
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    porgress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myoprogressbar.value = porgress;
})
myoprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myoprogressbar.value * audioElement.duration/100;
})