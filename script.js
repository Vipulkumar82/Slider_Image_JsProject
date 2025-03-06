const next= document.getElementById('next')
const prev= document.getElementById('prev')
const carousel= document.querySelector('.carousel')
const listItem =document.querySelector('.carousel .list')
const thumbnail = document.querySelector('.carousel .thumbnail')

next.onclick = function(){
    showSlider('next');
}

prev.onclick = function(){
    showSlider('prev');
}

// let runAutoRun;
// runAutoRun = setInterval( () => {
//     next.click();
// },5000);

let runTimeOut;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type === 'next'){
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add('next');
    }

}

