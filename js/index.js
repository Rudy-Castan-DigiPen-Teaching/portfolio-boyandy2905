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
updatePageLanguage(savedLanguage);

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
            projectsBtn: "Projects",

            helloProjectTitle: 'Project <strong>Hello Quad</strong>',
            helloSubtitle: "3D Graphics",
            helloOverviewTitle: "Project Overview",
            helloOverviewText: "Hello Quad is a CS250 graphics project focused on rendering an animated textured quad using OpenGL and WebGL. The project demonstrates vertex buffers, index buffers, vertex arrays, texture loading, shader animation, and a custom texture created for the assignment.",
            helloTasksTitle: "Tasks Completed",
            helloTasks: [
                "Implemented the required OpenGL wrapper classes: VertexBuffer, IndexBuffer, VertexArray, and Texture.",
                "Rendered a textured quad using vertex data, index data, and shader attributes.",
                "Created a custom texture based on my initials, S and H, using a pixel grid pattern.",
                "Added vertex shader animation for scaling, rotation, mouse-following movement, and soft wobble effects.",
                "Added fragment shader animation for texture fading and slowly changing four-corner colors.",
                "Built and embedded the WebGL release version into this portfolio page."
            ],
            helloReflectionTitle: "Reflection",
            helloReflectionText: "This project helped me understand how vertex data, index buffers, vertex arrays, textures, and shaders work together in the graphics pipeline. One challenge was making the indexed draw call work correctly, which required correctly creating and binding the element array buffer. I also learned how uniforms such as time, frame count, and mouse position can be used to create interactive shader animation.",
            helloDemoTitle: "Demo",
            helloDemoLink: "Open Hello Quad Demo in a new tab",

            meshesProjectTitle: 'Project <strong>Procedural Geometric Modeling</strong>',
            meshesSubtitle: "3D Graphics",
            meshesOverviewTitle: "Project Overview",
            meshesOverviewText: "Procedural Geometric Modeling is a CS250 graphics project focused on generating 3D mesh geometry directly in code. The project demonstrates how vertex positions, normals, texture coordinates, and index buffers work together to build common shapes such as a plane, cube, sphere, torus, cylinder, cone, and an additional custom clover mesh.",
            meshesTasksTitle: "Tasks Completed",
            meshesTasks: [
                "Registered the new D02 Procedural Meshes demo in the existing demo factory system.",
                "Added the required shader, texture, material, and mesh source files to the project build.",
                "Implemented procedural mesh generation for plane, cube, sphere, torus, cylinder, and cone geometry.",
                "Generated vertex positions, normals, UV coordinates, triangle indices, and line indices for mesh rendering.",
                "Implemented cap generation for closed shapes such as the cylinder and cone.",
                "Created an additional custom clover-shaped mesh to experiment with parametric surface generation.",
                "Built and embedded the WebGL release version into this portfolio page."
            ],
            meshesReflectionTitle: "Reflection",
            meshesReflectionText: "This project helped me understand how procedural geometry is constructed from mathematical rules rather than imported model files. The most challenging part was making the vertex order, triangle winding, normals, and caps work correctly for different shapes. Through this assignment, I learned how indexed meshes reduce duplicated data and how UV coordinates affect the way textures appear on generated 3D objects.",
            meshesDemoTitle: "Demo",
            meshesDemoLink: "Open Procedural Meshes Demo in a new tab"
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
            projectsBtn: "프로젝트",

            helloProjectTitle: '프로젝트 <strong>Hello Quad</strong>',
            helloSubtitle: "3D 그래픽스",
            helloOverviewTitle: "프로젝트 개요",
            helloOverviewText: "Hello Quad는 OpenGL과 WebGL을 사용하여 애니메이션이 적용된 텍스처 사각형을 렌더링하는 CS250 그래픽스 프로젝트입니다. 이 프로젝트는 vertex buffer, index buffer, vertex array, texture loading, shader animation, 그리고 과제를 위해 직접 제작한 custom texture를 보여줍니다.",
            helloTasksTitle: "완료한 작업",
            helloTasks: [
                "필수 OpenGL wrapper 클래스인 VertexBuffer, IndexBuffer, VertexArray, Texture를 구현했습니다.",
                "정점 데이터, 인덱스 데이터, shader attribute를 사용하여 텍스처가 적용된 quad를 렌더링했습니다.",
                "제 이름의 이니셜 S와 H를 바탕으로 픽셀 격자 패턴의 custom texture를 제작했습니다.",
                "크기 변화, 회전, 마우스 추적, 부드러운 흔들림 효과를 위한 vertex shader animation을 추가했습니다.",
                "텍스처 fade와 네 귀퉁이 색이 천천히 변하는 fragment shader animation을 추가했습니다.",
                "WebGL release 버전을 빌드하고 이 포트폴리오 페이지에 삽입했습니다."
            ],
            helloReflectionTitle: "회고",
            helloReflectionText: "이 프로젝트를 통해 vertex data, index buffer, vertex array, texture, shader가 그래픽스 파이프라인에서 어떻게 함께 작동하는지 이해할 수 있었습니다. 특히 indexed draw call을 정상적으로 작동시키기 위해 element array buffer를 올바르게 생성하고 바인딩해야 했던 점이 주요 과제였습니다. 또한 time, frame count, mouse position 같은 uniform을 사용하여 상호작용 가능한 shader animation을 만드는 방법을 배웠습니다.",
            helloDemoTitle: "데모",
            helloDemoLink: "새 탭에서 Hello Quad 데모 열기",

            meshesProjectTitle: '프로젝트 <strong>Procedural Geometric Modeling</strong>',
            meshesSubtitle: "3D 그래픽스",
            meshesOverviewTitle: "프로젝트 개요",
            meshesOverviewText: "Procedural Geometric Modeling은 3D mesh geometry를 코드로 직접 생성하는 CS250 그래픽스 프로젝트입니다. 이 프로젝트는 vertex position, normal, texture coordinate, index buffer가 함께 작동하여 plane, cube, sphere, torus, cylinder, cone, 그리고 추가 custom clover mesh를 만드는 과정을 보여줍니다.",
            meshesTasksTitle: "완료한 작업",
            meshesTasks: [
                "기존 demo factory system에 새로운 D02 Procedural Meshes 데모를 등록했습니다.",
                "필요한 shader, texture, material, mesh source file을 프로젝트 빌드에 추가했습니다.",
                "Plane, cube, sphere, torus, cylinder, cone의 procedural mesh generation을 구현했습니다.",
                "Mesh 렌더링을 위한 vertex position, normal, UV coordinate, triangle index, line index를 생성했습니다.",
                "Cylinder와 cone처럼 닫힌 도형을 위한 cap generation을 구현했습니다.",
                "Parametric surface generation을 실험하기 위해 추가 custom clover mesh를 제작했습니다.",
                "WebGL release 버전을 빌드하고 이 포트폴리오 페이지에 삽입했습니다."
            ],
            meshesReflectionTitle: "회고",
            meshesReflectionText: "이 프로젝트를 통해 procedural geometry가 외부 모델 파일이 아니라 수학적 규칙으로 어떻게 만들어지는지 이해할 수 있었습니다. 가장 어려웠던 부분은 여러 도형에서 vertex order, triangle winding, normal, cap이 올바르게 작동하도록 맞추는 것이었습니다. 이 과제를 통해 indexed mesh가 중복 데이터를 줄이는 방식과 UV coordinate가 생성된 3D object의 texture 표현에 어떤 영향을 주는지 배웠습니다.",
            meshesDemoTitle: "데모",
            meshesDemoLink: "새 탭에서 Procedural Meshes 데모 열기"
        }
    };

    const setText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el && text !== undefined) {
            el.textContent = text;
        }
    };

    const setList = (selector, items) => {
        const listItems = document.querySelectorAll(`${selector} li`);
        if (!items || listItems.length === 0) {
            return;
        }

        listItems.forEach((li, index) => {
            if (items[index] !== undefined) {
                li.textContent = items[index];
            }
        });
    };

    const setHTML = (selector, html) => {
        const el = document.querySelector(selector);
        if (el && html !== undefined) {
            el.innerHTML = html;
        }
    };

    // Update nav links for index.html
    const navLinks = [
        { selector: '.nav__link[href="#home"]', key: "home" },
        { selector: '.nav__link[href="#skills"]', key: "skills" },
        { selector: '.nav__link[href="#about"]', key: "about" },
        { selector: '.nav__link[href="#projects"]', key: "projects" },
        { selector: '.nav__link[href="#resume"]', key: "resume" },

        // Update nav links for portfolio pages such as 01_hello.html
        { selector: '.nav__link[href="../index.html"]', key: "home" },
        { selector: '.nav__link[href="../index.html#skills"]', key: "skills" },
        { selector: '.nav__link[href="../index.html#about"]', key: "about" },
        { selector: '.nav__link[href="../index.html#projects"]', key: "projects" },
        { selector: '.nav__link[href="../index.html#resume"]', key: "resume" }
    ];

    navLinks.forEach(link => {
        setText(link.selector, translations[lang][link.key]);
    });

    // Main index.html page
    setText(".section__title--services", translations[lang].learning);
    setText(".service:nth-child(1) h3", translations[lang].graphics);
    setText(".service:nth-child(2) h3", translations[lang].cpp);
    setText(".service:nth-child(3) h3", translations[lang].gamedev);

    setText(".service:nth-child(1) p", translations[lang].graphicsDesc);
    setText(".service:nth-child(2) p", translations[lang].cppDesc);
    setText(".service:nth-child(3) p", translations[lang].gamedevDesc);

    setText(".my-services .btn", translations[lang].projectsBtn);

    setText(".section__title--about", translations[lang].who);
    setText(".section__subtitle--about", translations[lang].cs);

    const aboutParagraphs = document.querySelectorAll(".about-me__body p");
    if (aboutParagraphs.length >= 2) {
        aboutParagraphs[0].textContent = translations[lang].aboutBody1;
        aboutParagraphs[1].textContent = translations[lang].aboutBody2;
    }

    setText(".section__title--projects", translations[lang].myProjects);
    setText(".section__subtitle--projects", translations[lang].projectSelection);
    setText(".section__title--resume", translations[lang].resume);

    // Hello Quad project page
    setHTML(".hello-project-title", translations[lang].helloProjectTitle);
    setText(".hello-project-subtitle", translations[lang].helloSubtitle);

    setText(".hello-overview-title", translations[lang].helloOverviewTitle);
    setText(".hello-overview-text", translations[lang].helloOverviewText);

    setText(".hello-tasks-title", translations[lang].helloTasksTitle);
    setList(".hello-tasks-list", translations[lang].helloTasks);

    setText(".hello-reflection-title", translations[lang].helloReflectionTitle);
    setText(".hello-reflection-text", translations[lang].helloReflectionText);

    setText(".hello-demo-title", translations[lang].helloDemoTitle);
    setText(".hello-demo-link", translations[lang].helloDemoLink);

    // Procedural Meshes project page
    setHTML(".meshes-project-title", translations[lang].meshesProjectTitle);
    setText(".meshes-project-subtitle", translations[lang].meshesSubtitle);

    setText(".meshes-overview-title", translations[lang].meshesOverviewTitle);
    setText(".meshes-overview-text", translations[lang].meshesOverviewText);

    setText(".meshes-tasks-title", translations[lang].meshesTasksTitle);
    setList(".meshes-tasks-list", translations[lang].meshesTasks);

    setText(".meshes-reflection-title", translations[lang].meshesReflectionTitle);
    setText(".meshes-reflection-text", translations[lang].meshesReflectionText);

    setText(".meshes-demo-title", translations[lang].meshesDemoTitle);
    setText(".meshes-demo-link", translations[lang].meshesDemoLink);
}
