// تفعيل مكتبة الحركات (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// تغيير خلفية الهيدر عند التمرير
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
        nav.style.padding = '10px 0';
    } else {
        nav.style.background = 'rgba(0,0,0,0.9)';
        nav.style.padding = '20px 0';
    }
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // التبديل بين إظهار وإخفاء المنيو في الموبايل
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0a0a0a';
        navLinks.style.padding = '20px';
    }
});