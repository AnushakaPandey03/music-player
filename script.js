console.log("Welcome to spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  {songName: "song 1", filePath: "1.mp3", coverPath: "cover1.jpg"},
  {songName: "song 2", filePath: "2.mp3", coverPath: "cover2.jpg"},
  {songName: "song 3", filePath: "3.mp3", coverPath: "cover3.jpg"},
  {songName: "song 4", filePath: "4.mp3", coverPath: "cover4.jpg"},
  {songName: "song 5", filePath: "5.mp3", coverPath: "cover5.jpg"},
  {songName: "song 6", filePath: "6.mp3", coverPath: "cover6.jpg"},
  {songName: "song 7", filePath: "7.mp3", coverPath: "cover7.jpg"},
  {songName: "song 8", filePath: "8.mp3", coverPath: "cover8.jpg"},
  {songName: "song 9", filePath: "9.mp3", coverPath: "cover9.jpg"},
  {songName: "song 10", filePath: "10.mp3", coverPath: "cover10.jpg"}
];
songItems.forEach((element, i) => {
  
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByTagName("span")[0].innerText = songs[i].songName;
});
// audioElement.play();

//Handle play
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})
// Listen to events
audioElement.addEventListener('timeupdate',()=>{
  
  //update Seekbar
  let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
 
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
masterSongName.innerText = songs[songIndex].songName;
audioElement.src=`${songIndex+1}.mp3`;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove(fa-play-circle);
masterPlay.classList.add(fa-pause-circle);
})

  
})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
    songIndex = 0
  }
  else{
    songIndex += 1;
  }
audioElement.src = `${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
  
  
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex = 0
  }
  else{
    songIndex -= 1;
  }
audioElement.src = `${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
  
  
})