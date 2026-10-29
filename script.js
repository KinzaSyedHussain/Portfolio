function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

const phrases = [
    "Kinza Syed",
    "AI Enthusiast",
    "Cyber Security",
    "Game Developer",
    "Game Designer"
];

let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const deleteSpeed = 50;
const delayBetween = 1500;

function typeWriter() {
    const currentPhrase = phrases[currentPhraseIndex];
    const effectElement = document.getElementById("effect");

    if (!effectElement) return;

    if (isDeleting) {
        effectElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        effectElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? deleteSpeed : speed;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = delayBetween;
        isDeleting = true;
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPhraseIndex =  (currentPhraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    setTimeout(typeWriter, typeSpeed);
}

typeWriter();