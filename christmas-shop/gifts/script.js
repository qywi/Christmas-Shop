//burger-menu-link
const burgerIcon = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.header-nav');
const burgerLink = document.querySelectorAll('.header-li');
const headerUlBurger = document.querySelector('.header-ul');
//top-button-link
const scrollToTopButton = document.getElementById('scrollToTopButton');
//switching-link
const switchingAll = document.getElementById('all');
const switchingWork = document.getElementById('work');
const switchingHealth = document.getElementById('health');
const switchingHarmony = document.getElementById('harmony');
//gifts-link
const modalWindow = document.querySelector('.modal-window');
const buttonClosePopUp = document.querySelector('.button-pop-up');
const imgPopUp = document.querySelector('.img-pop-up');
const headTextGiftPopUp = document.querySelector('.head-text-gift-pop-up');
const textGiftPopUp = document.querySelector('.text-gift-pop-up');
const popUpDescription = document.querySelector('.pop-up-description');
const liveBonus = document.querySelector('.live-bonus');
const createBonus = document.querySelector('.create-bonus');
const loveBonus = document.querySelector('.love-bonus');
const dreamBonus = document.querySelector('.dream-bonus');
const live = document.querySelector('.Live');
const create = document.querySelector('.Create');
const love = document.querySelector('.Love');
const dream = document.querySelector('.Dream');
const gifts = document.querySelector('.box-all-gifts');
const overlay = document.createElement('div'); 
overlay.classList.add('modal-overlay');
document.body.appendChild(overlay);
let isModalOpen = false;
const arrayGifts = [
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Console.log Guru",
        "description": "Uses console.log like a crystal ball to find any issue.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Bug Magnet",
        "description": "Able to find bugs in code like they were placed there on purpose.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Shortcut Cheater",
        "description": "Knows every keyboard shortcut like they were born with them.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+400",
            "dream": "+200"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Merge Master",
        "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
        "superpowers": {
            "live": "+200",
            "create": "+500",
            "love": "+200",
            "dream": "+300"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Async Tamer",
        "description": "Handles asynchronous code and promises like well-trained pets.",
        "superpowers": {
            "live": "+100",
            "create": "+400",
            "love": "+200",
            "dream": "+300"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "CSS Tamer",
        "description": "Can make Flexbox and Grid work together like they were always best friends.",
        "superpowers": {
            "live": "+200",
            "create": "+500",
            "love": "+200",
            "dream": "+300"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Time Hacker",
        "description": "Writes code at the last moment but always meets the deadline.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+200"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Layout Master",
        "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
        "superpowers": {
            "live": "+500",
            "create": "+300",
            "love": "+200",
            "dream": "+200"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Documentation Whisperer",
        "description": "Understands cryptic documentation as if they wrote it themselves.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+200",
            "dream": "+100"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Feedback Master",
        "description": "Accepts client revisions with the Zen calm of Buddha.",
        "superpowers": {
            "live": "+300",
            "create": "+500",
            "love": "+300",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Code Minimalist",
        "description": "Writes code so concise that one line does more than a whole file.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+200"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-work.png",
        "head": "For work",
        "text": "Pixel-Perfect Magician",
        "description": "Aligns elements to the last pixel, even when the design looks abstract.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+400",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Posture Levitation",
        "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
        "superpowers": {
            "live": "+400",
            "create": "+500",
            "love": "+500",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Step Master",
        "description": "Gets 10,000 steps a day even while sitting at the computer.",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+500",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Snack Resister",
        "description": "Ignoring desktop snacks like a strict dietician.",
        "superpowers": {
            "live": "+400",
            "create": "+100",
            "love": "+200",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Hydration Bot",
        "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
        "superpowers": {
            "live": "+500",
            "create": "+300",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Sleep Overlord",
        "description": "Sleeps 6 hours but feels like they had 10.",
        "superpowers": {
            "live": "+400",
            "create": "+500",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Break Guru",
        "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
        "superpowers": {
            "live": "+300",
            "create": "+300",
            "love": "+300",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Eye Protector",
        "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
        "superpowers": {
            "live": "+100",
            "create": "+300",
            "love": "+500",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Stress Dodger",
        "description": "Masters meditation right at the keyboard.",
        "superpowers": {
            "live": "+100",
            "create": "+400",
            "love": "+200",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Yoga Coder",
        "description": "Easily switches from coding to yoga and back.",
        "superpowers": {
            "live": "+400",
            "create": "+400",
            "love": "+400",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Healthy Snacker",
        "description": "Always picks fruit, even when chocolate is within arm’s reach.",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+200",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Chair Exerciser",
        "description": "Manages to work out without leaving the chair.",
        "superpowers": {
            "live": "+500",
            "create": "+500",
            "love": "+500",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-health.png",
        "head": "For health",
        "text": "Caffeine Filter",
        "description": "Drinks coffee at night and still falls asleep with no problem.",
        "superpowers": {
            "live": "+400",
            "create": "+300",
            "love": "+500",
            "dream": "+200"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Joy Charger",
        "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Error Laugher",
        "description": "Laughs at code errors like they’re jokes instead of getting angry.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Bug Acceptance Guru",
        "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Spontaneous Coding Philosopher",
        "description": "Philosophically accepts any client suggestion after a long refactor.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+400"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Deadline Sage",
        "description": "Remains zen even when the deadline is close and the project manager is stressed.",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+300",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Inspiration Maestro",
        "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+400",
            "dream": "+100"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Peace Keeper",
        "description": "Maintains inner calm even in moments of intense crisis.",
        "superpowers": {
            "live": "+200",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Empathy Guru",
        "description": "Feels the team’s mood and can lift everyone’s spirits.",
        "superpowers": {
            "live": "+500",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Laughter Generator",
        "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+200",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Pause Master",
        "description": "Knows when to just step back from the keyboard and breathe.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+100",
            "dream": "+100"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Coder Healer",
        "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+500",
            "dream": "+500"
        }
    },
    {
        "img": "../assets/img-compressed/img-compressed/gift-for-harmony.png",
        "head": "For harmony",
        "text": "Music Code Curator",
        "description": "Creates work playlists so good, even deadlines follow the rhythm.",
        "superpowers": {
            "live": "+300",
            "create": "+200",
            "love": "+300",
            "dream": "+200"
        }
    }
];

//burger-menu
function lockScroll() {
    const scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function unlockScroll() {
    const scrollPosition = Math.abs(parseInt(document.body.style.top, 10));

    document.documentElement.style.scrollBehavior = 'auto';

    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, scrollPosition);

    document.documentElement.style.scrollBehavior = '';
}

burgerIcon.addEventListener("click", function () {
    document.body.classList.toggle('lock');
    burgerIcon.classList.toggle('active-icon');

    if (burgerMenu.classList.contains('active-menu')) {
        burgerMenu.classList.remove('active-menu');

        unlockScroll();

        overlay.classList.remove('active-overlay');

    } else {
        burgerMenu.style.display = 'block';

        lockScroll();

        overlay.classList.add('active-overlay');

        setTimeout(() => {
            burgerMenu.classList.add('active-menu');
        }, 10);
    }
});

burgerLink.forEach(link => {
    link.addEventListener("click", function () {
        document.body.classList.remove('lock');
        burgerIcon.classList.remove('active-icon');
        burgerMenu.classList.remove('active-menu');

        unlockScroll();

        overlay.classList.remove('active-overlay');

        setTimeout(() => {
            if (document.documentElement.scrollWidth < 1440) {
                burgerMenu.style.display = 'none';
            }
        }, 300);
    });
});

document.addEventListener("click", function (e) {
    const isClickInsideMenu = headerUlBurger.contains(e.target) || burgerIcon.contains(e.target);

    if (!isClickInsideMenu && burgerMenu.classList.contains('active-menu')) {
        document.body.classList.remove('lock');
        burgerIcon.classList.remove('active-icon');
        burgerMenu.classList.remove('active-menu');

        unlockScroll();

        overlay.classList.remove('active-overlay');

        setTimeout(() => {
            if (document.documentElement.scrollWidth < 1440) {
                burgerMenu.style.display = 'none';
            }
        }, 300);
    }
});

//gifts

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function populateGifts(gifts) {
    const giftElements = document.querySelectorAll('.gift');

    giftElements.forEach((giftElement, index) => {
        if (index < gifts.length) {
            const giftData = gifts[index];

            const imgElement = giftElement.querySelector('.img-gift');
            const headElement = giftElement.querySelector('.head-text-gift');
            const textElement = giftElement.querySelector('.text-gift');

            imgElement.src = giftData.img;
            headElement.textContent = giftData.head;
            textElement.textContent = giftData.text;
            headElement.className = `head-text-gift ${giftData.head.toLowerCase().replace(/\s+/g, '-')}`;
        }
    });
}

const shuffledGifts = shuffleArray(arrayGifts);

const selectedGifts = shuffledGifts;

populateGifts(selectedGifts);

//pop-up 

function updateScores(categoryElement, bonusValue) {
    const scoreIcons = categoryElement.querySelectorAll('svg');
    const activeIconsCount = parseInt(bonusValue.replace('+', ''), 10) / 100;

    scoreIcons.forEach((icon, index) => {
        if (index < activeIconsCount) {
            icon.classList.remove('inactive-score');
        } else {
            icon.classList.add('inactive-score');
        }
    });
}

function fillModalWindow(giftData) {
    imgPopUp.src = giftData.img;
    imgPopUp.alt = giftData.head;
    headTextGiftPopUp.textContent = giftData.head;
    textGiftPopUp.textContent = giftData.text;
    popUpDescription.textContent = giftData.description;

    liveBonus.textContent = giftData.superpowers.live;
    createBonus.textContent = giftData.superpowers.create;
    loveBonus.textContent = giftData.superpowers.love;
    dreamBonus.textContent = giftData.superpowers.dream;

    updateScores(live, giftData.superpowers.live);
    updateScores(create, giftData.superpowers.create);
    updateScores(love, giftData.superpowers.love);
    updateScores(dream, giftData.superpowers.dream);
    headTextGiftPopUp.className = `head-text-gift-pop-up ${giftData.head.toLowerCase().replace(/\s+/g, '-')}`;
}

function openModal() {
    modalWindow.classList.add('modal-window-active');
    overlay.classList.add('modal-overlay-active');
    document.body.style.overflow = 'hidden'; 
    isModalOpen = true;
}

function closeModal() {
    modalWindow.classList.remove('modal-window-active');
    overlay.classList.remove('modal-overlay-active');
    document.body.style.overflow = '';
    isModalOpen = false;
}

gifts.addEventListener('click', function(event) {
    const clickedGift = event.target.closest('.gift');
    if (clickedGift){
        if (isModalOpen) {
            closeModal();
            return;
        }

        const textGift= clickedGift.querySelector('.text-gift').textContent;
        
        const giftData = arrayGifts.find(item => item.text === textGift);

        if (giftData) {
            fillModalWindow(giftData);
            openModal();
        }
    }
});

buttonClosePopUp.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

modalWindow.addEventListener('click', event => {
    if (event.target === modalWindow) {
        closeModal();
    }
});


//top-button

function toggleScrollButton() {
    const screenWidth = window.innerWidth;
    const scrollPosition = window.scrollY;

    if (screenWidth <= 768 && scrollPosition > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', toggleScrollButton);
window.addEventListener('resize', toggleScrollButton);

scrollToTopButton.addEventListener('click', scrollToTop);

//switching

const giftsContainer = document.querySelector('.box-all-gifts');

function renderGifts(filteredGifts) {
    giftsContainer.innerHTML = '';

    filteredGifts.forEach(gift => {
        const giftElement = document.createElement('div');
        giftElement.classList.add('gift');

        giftElement.innerHTML = `
            <img src="${gift.img}" alt="img" class="img-gift">
            <div class="texts-gift">
                <p class="head-text-gift ${gift.head.toLowerCase().replace(/\s+/g, '-')}">${gift.head}</p>
                <p class="text-gift">${gift.text}</p>
            </div>
        `;
        giftsContainer.appendChild(giftElement);
    });
}

function setActiveButton(activeButton) {
    const allButtons = document.querySelectorAll('.controls');
    allButtons.forEach(button => button.classList.remove('active-contols'));
    activeButton.classList.add('active-contols');
}

function showAllGifts() {
    setActiveButton(switchingAll);

    const uniqueGifts = Array.from(
        new Map(arrayGifts.map(gift => [gift.text, gift])).values()
    );
    renderGifts(uniqueGifts);
}

function showHarmonyGifts() {
    setActiveButton(switchingHarmony);

    const harmonyGifts = arrayGifts.filter(gift => gift.head === "For harmony");
    renderGifts(harmonyGifts);
}

function showWorkGifts() {
    setActiveButton(switchingWork);

    const workGifts = arrayGifts.filter(gift => gift.head === "For work");
    renderGifts(workGifts);
}

function showHealthGifts() {
    setActiveButton(switchingHealth);

    const healthGifts = arrayGifts.filter(gift => gift.head === "For health");
    renderGifts(healthGifts);
}

switchingAll.addEventListener('click', showAllGifts);
switchingHarmony.addEventListener('click', showHarmonyGifts);
switchingWork.addEventListener('click', showWorkGifts);
switchingHealth.addEventListener('click', showHealthGifts);

showAllGifts();