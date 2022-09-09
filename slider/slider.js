const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;
console.log(slides);// Выводи массив slides в консоль

const activeSlide = (n) => {
    console.log(n);
    // Пробегаемся по массиву с помощью цикла for of
    for (slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active')
}

const activeDot = (n) => {
    console.log(n);
    // Пробегаемся по точкам с помощью цикла for of
    for (dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if (index === slides.length - 1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    }
    else{
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

next.addEventListener('click', nextSlide);

const prevSlide = () => {
    if (index === 0){
        index = 0;
        activeSlide(index);
        activeDot(index);
    }
    else{
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})

prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 1500)