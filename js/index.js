const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open')
    })
})

// Help iframe of webgl demos get access to the keyboard by giving them focus when clicked
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("demo");
    if (!iframe) {
        return;
    }
    iframe.addEventListener("load", function () {
        try {
            const iframeDoc = iframe.contentWindow.document;
            iframeDoc.addEventListener("mousedown", function () {
                iframe.contentWindow.Module.canvas.focus();
            });
        } catch (e) {
            console.error(e);
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const languageToggle = document.querySelector(".language-toggle");
const htmlElement = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Load saved language from localStorage
const savedLanguage = localStorage.getItem("language") || "en";
htmlElement.lang = savedLanguage;
languageToggle.textContent = savedLanguage === "en" ? "KO" : "EN";

// Theme toggle event
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    themeToggle.innerHTML = isDarkTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Language toggle event
languageToggle.addEventListener("click", () => {
    const currentLang = htmlElement.lang;
    const newLang = currentLang === "en" ? "ko" : "en";
    htmlElement.lang = newLang;
    localStorage.setItem("language", newLang);
    languageToggle.textContent = newLang === "en" ? "KO" : "EN";
    updatePageLanguage(newLang);
});

// Language content update function
function updatePageLanguage(lang) {
    const translations = {
        en: {
            home: "Home",
            skills: "Skills",
            about: "About Me",
            projects: "Projects",
            resume: "Resume",
            learning: "What I Learning",
            graphics: "Graphics Programming",
            cpp: "C++ Programming",
            gamedev: "Game Development",
            who: "Who I am",
            cs: "CS student focused on game programming and real-time graphics",
            graphicsDesc: "I have experience implementing real-time graphics techniques using OpenGL and WebGL-compatible rendering. My work includes Procedural Mesh Generation, Fog Effects, Toon Shading, Shadow Mapping, and Procedural Noise.",
            cppDesc: "I use C++ to build interactive graphics programs, implement mathematical systems, and write organized, performance-conscious code. I am familiar with object-oriented programming, data structures, debugging, and algorithmic problem-solving.",
            gamedevDesc: "I am interested in creating interactive gameplay systems and visual experiences. Through coursework and personal projects, I have practiced building demos, tuning parameters, and designing systems that respond to user input.",
            aboutBody1: "I am Sehoon Kim, a student at Keimyung University in the DigiPen-KMU program. I am studying computer science, game development, computer graphics, mathematics, and physics.",
            aboutBody2: "I am interested in both game design and programming. Through team projects and coursework, I am learning how to create interactive experiences that combine gameplay, visuals, and player feedback.",
            myProjects: "My Projects",
            projectSelection: "A selection of my range of projects",
            projectsBtn: "Projects"
        },
        ko: {
            home: "홈",
            skills: "기술",
            about: "소개",
            projects: "프로젝트",
            resume: "이력서",
            learning: "배우고 있는 것",
            graphics: "그래픽스 프로그래밍",
            cpp: "C++ 프로그래밍",
            gamedev: "게임 개발",
            who: "나는 누구인가",
            cs: "게임 프로그래밍과 실시간 그래픽스에 중점을 두는 CS 학생",
            graphicsDesc: "OpenGL과 WebGL 호환 렌더링을 사용하여 실시간 그래픽 기술을 구현한 경험이 있습니다. 내 작업에는 절차적 메시 생성, 포그 이펙트, 톤 셰이딩, 섀도우 매핑 및 절차적 노이즈가 포함됩니다.",
            cppDesc: "C++를 사용하여 대화형 그래픽 프로그램을 빌드하고, 수학적 시스템을 구현하며, 조직화되고 성능을 고려한 코드를 작성합니다. 객체지향 프로그래밍, 자료구조, 디버깅 및 알고리즘 문제 해결에 익숙합니다.",
            gamedevDesc: "대화형 게임플레이 시스템과 시각적 경험을 만드는 데 관심이 있습니다. 과정 및 개인 프로젝트를 통해 데모 구축, 파라미터 조정 및 사용자 입력에 응답하는 시스템 설계를 연습했습니다.",
            aboutBody1: "저는 Kim Sehoon이며, DigiPen-KMU 프로그램의 계명대학교 학생입니다. 컴퓨터 과학, 게임 개발, 컴퓨터 그래픽스, 수학 및 물리학을 공부하고 있습니다.",
            aboutBody2: "게임 디자인과 프로그래밍 모두에 관심이 있습니다. 팀 프로젝트와 과정 작업을 통해 게임플레이, 시각 및 플레이어 피드백을 결합한 대화형 경험을 만드는 방법을 배우고 있습니다.",
            myProjects: "내 프로젝트",
            projectSelection: "내 프로젝트 범위의 선택",
            projectsBtn: "프로젝트"
        }
    };

    // Update nav links
    const navLinks = [
        { selector: '.nav__link[href="#home"]', key: "home" },
        { selector: '.nav__link[href="#skills"]', key: "skills" },
        { selector: '.nav__link[href="#about"]', key: "about" },
        { selector: '.nav__link[href="#projects"]', key: "projects" },
        { selector: '.nav__link[href="#resume"]', key: "resume" }
    ];

    navLinks.forEach(link => {
        const el = document.querySelector(link.selector);
        if (el) el.textContent = translations[lang][link.key];
    });

    // Update section titles and content
    document.querySelector(".section__title--services").textContent = translations[lang].learning;
    document.querySelector(".service:nth-child(1) h3").textContent = translations[lang].graphics;
    document.querySelector(".service:nth-child(2) h3").textContent = translations[lang].cpp;
    document.querySelector(".service:nth-child(3) h3").textContent = translations[lang].gamedev;

    document.querySelector(".service:nth-child(1) p").textContent = translations[lang].graphicsDesc;
    document.querySelector(".service:nth-child(2) p").textContent = translations[lang].cppDesc;
    document.querySelector(".service:nth-child(3) p").textContent = translations[lang].gamedevDesc;

    const projectsBtn = document.querySelector(".my-services .btn");
    if (projectsBtn) projectsBtn.textContent = translations[lang].projectsBtn;

    document.querySelector(".section__title--about").textContent = translations[lang].who;
    document.querySelector(".section__subtitle--about").textContent = translations[lang].cs;

    const aboutParagraphs = document.querySelectorAll(".about-me__body p");
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].textContent = translations[lang].aboutBody1;
        aboutParagraphs[1].textContent = translations[lang].aboutBody2;
    }

    document.querySelector(".section__title--projects").textContent = translations[lang].myProjects;
    document.querySelector(".section__subtitle--projects").textContent = translations[lang].projectSelection;

    document.querySelector(".section__title--resume").textContent = translations[lang].resume;
}
