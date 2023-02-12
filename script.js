
let imgCont = document.querySelector("#image");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");

let images = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

let index = 0;

function changeImage(){
    imgCont.src = `/imgs/${images[index]}.jpg`;
}

function automaticChanger() {
    index++;
    if(index >= images.length){
        index = 0;
    }
    
    changeImage();
}


let timer = setInterval(automaticChanger, 6000);

nextBtn.addEventListener("click", () => {
    index = index + 1;
    if(index >= images.length){
        index = 0;
    }
    clearInterval(timer);
    changeImage();
    timer = setInterval(automaticChanger, 6000);
});

prevBtn.addEventListener("click", (e) => {
    index = index - 1;
    if(index < 0){
        index = (images.length - 1);
    }
    clearInterval(timer);
    changeImage();
    timer = setInterval(automaticChanger, 6000);
});