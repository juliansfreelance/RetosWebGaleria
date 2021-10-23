
const galeryImg = document.querySelector('.galeryImg');
const galeryTitulo = document.querySelector('.galeryTitulo');
const galeryYear = document.querySelector('.galeryYear');

const modalImg = document.querySelector('.modalImg');
const modalTitulo = document.querySelector('.modalTitulo');
const modalYear = document.querySelector('.modalYear');

let imgchange = 0;

UpdateImg(imgchange);

document.querySelector('.prev').addEventListener('click', ()=>{
    if (imgchange > 0) {
    	imgchange --;
    	UpdateImg(imgchange);
    	document.querySelector('.next').style.display = 'block';
    }
});

document.querySelector('.next').addEventListener('click', ()=>{
    if (imgchange < 23) {
    	imgchange ++;
    	UpdateImg(imgchange);
    	document.querySelector('.prev').style.display = 'block';
    }
});

function UpdateImg(img) {
	galeryImg.src = galery[img].img;
    galeryTitulo.innerHTML =galery[img].id+' - '+galery[img].nombre;
    galeryYear.innerHTML = galery[img].year;

    modalImg.src = galery[img].img;
	modalTitulo.innerHTML =galery[img].id+' - '+galery[img].nombre;
	modalYear.innerHTML = galery[img].year;

    if(imgchange == 0){
    	document.querySelector('.prev').style.display = 'none';
    }
    if(imgchange == 23){
    	document.querySelector('.next').style.display = 'none';
    }
}
document.querySelector('.galeryImg').addEventListener('click', ()=>{
    document.querySelector('.pop-up').style.display = 'block';
});
document.querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.pop-up').style.display = 'none';
});
