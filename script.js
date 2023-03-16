const slideImg = document.getElementById('slideImg');
const images = new Array (
  "images/Magagascar.jpg",
  "images/Kenya.jpg",
  "images/Phillipenes.jpg",
  "images/Nepal.jpg",
  "Images/20190819_Antsanita_0144.jpg",
  "Images/20190819_Antsanita_0228wm.jpg",
  "Images/Indonesia_2018_Man In Boat.jpg",
  "Images/Haiti_2018_Seedlings 2.jpg",
  "Images/Haiti_2018_Seedlings 3.jpg",
  "Images/Seedlings Sarobidy with copyright.jpg",
);
const len = images.length;
let i = 0;

function slider() {
  if(i > len-1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()', 3000);
}
