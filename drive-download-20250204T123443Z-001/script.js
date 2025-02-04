const images = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;


function openWhatsAppChat() {
    console.log('openWhatsAppChat');
    const url = `https://wa.me/+77072001761`;
    
    window.open(url, '_blank'); 
}





const updateClasses = () => {
    images.forEach((img, index) => {
        img.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
            img.classList.add('active');
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
            img.classList.add('prev');
        } else if (index === (currentIndex + 1) % images.length) {
            img.classList.add('next');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

document.querySelector('.btn_forward').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateClasses();
});

document.querySelector('.btn_back').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateClasses();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateClasses();
    });
});

updateClasses();
