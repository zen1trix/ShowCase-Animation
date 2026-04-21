const data = [
    { place: 'Switzerland', title: 'SAINT', title2: 'ANTONIEN', img: 'https://images.unsplash.com/photo-1506905593345-0297c2073d15?auto=format&fit=crop&w=1000' },
    { place: 'Japan', title: 'FUJI', title2: 'MOUNTAIN', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000' },
    { place: 'Norway', title: 'NIGHT', title2: 'LIGHTS', img: 'https://images.unsplash.com/photo-1531366930491-81bbc94a0edc?auto=format&fit=crop&w=1000' }
];

const demo = document.querySelector('#demo');

// Создаем карточки динамически
data.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url(${item.img})`;
    // Располагаем их каскадом для начала
    card.style.width = '200px';
    card.style.height = '300px';
    card.style.bottom = '50px';
    card.style.right = (50 + index * 220) + 'px';
    demo.appendChild(card);
});

// Анимация появления (убираем белый экран)
window.addEventListener('load', () => {
    gsap.to(".cover", {
        xPercent: 100,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
            // Показываем первый блок текста
            gsap.to("#details-even", { opacity: 1, y: -20, duration: 0.8 });
        }
    });
});