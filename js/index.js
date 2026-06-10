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
            meshesDemoLink: "Open Procedural Meshes Demo in a new tab",

            shadowProjectTitle: 'Project <strong>Shadow Mapping</strong>',
            shadowSubtitle: "3D Graphics",
            shadowOverviewTitle: "Project Overview",
            shadowOverviewText: "Shadow Mapping is a CS250 graphics project focused on rendering real-time shadows using a depth texture. The project demonstrates how to render a scene from the light's point of view, store depth information in a framebuffer, and use that shadow map during the main render pass to determine whether each fragment is lit or in shadow.",
            shadowTasksTitle: "Tasks Completed",
            shadowTasks: [
                "Registered the D05 Shadow Mapping demo in the existing demo factory system.",
                "Added the required shadow mapping shaders, framebuffer files, camera utilities, and project build entries.",
                "Extended the Texture class to support depth textures and empty RGBA textures for framebuffer rendering.",
                "Implemented camera view and world matrix calculations used by both the main camera and the light camera.",
                "Implemented FrameBuffer creation, texture attachment, binding, completeness checking, and cleanup.",
                "Rendered the scene from the light's point of view to generate a shadow depth map.",
                "Rendered the final scene using the shadow map, lighting, gamma correction, fog, and debug visualization tools.",
                "Handled unstable 32-bit depth texture selection by falling back to a more stable 24-bit depth format.",
                "Built and embedded the WebGL release version into this portfolio page."
            ],
            shadowReflectionTitle: "Reflection",
            shadowReflectionText: "This project helped me understand how shadow mapping connects multiple parts of the graphics pipeline. The most challenging part was making the light camera, depth framebuffer, shadow texture, and shader-space transformations work together correctly. I also learned that graphics features can behave differently depending on texture formats and platform support, so building stable fallback behavior is important for interactive demos.",
            shadowDemoTitle: "Demo",
            shadowDemoLink: "Open Shadow Mapping Demo in a new tab",

            valueProjectTitle: 'Project <strong>Value Noise</strong>',
            valueSubtitle: "3D Graphics",
            valueOverviewTitle: "Project Overview",
            valueOverviewText: "Value Noise is a CS250 graphics project focused on generating procedural textures using a C++ value noise algorithm. The project demonstrates 1D, 2D, and 3D noise generation, permutation hashing, smoothing functions, interpolation, texture uploading, and WebGL shader rendering for visualizing procedural noise patterns.",
            valueTasksTitle: "Tasks Completed",
            valueTasks: [
                "Registered the D06 Value Noise demo in the existing demo factory system.",
                "Added the required D06 shader files and noise source files to the project build.",
                "Implemented texture uploading so generated RGBA noise data can be updated on the GPU.",
                "Implemented fade functions for linear, cosine, smoothstep, and quintic smoothing.",
                "Implemented linear, bilinear, and trilinear interpolation helpers for 1D, 2D, and 3D noise.",
                "Implemented noise coordinate generation for base indices, next indices, and interpolation values.",
                "Implemented permutation hashing to support repeatable and tileable procedural noise.",
                "Implemented Value Noise evaluation for 1D, 2D, and 3D inputs.",
                "Adjusted texture filtering and wrapping so low-resolution noise and tiling behave correctly in the WebGL demo.",
                "Built and embedded the WebGL release version into this portfolio page."
            ],
            valueReflectionTitle: "Reflection",
            valueReflectionText: "This project helped me understand how procedural noise is built from random values, hashing, smoothing, and interpolation. The most challenging part was making the 1D, 2D, and 3D noise modes behave consistently while also matching the expected texture tiling and filtering behavior. I also learned how CPU-generated data can be uploaded to a GPU texture and displayed through a simple shader in an interactive graphics demo.",
            valueDemoTitle: "Demo",
            valueDemoLink: "Open Value Noise Demo in a new tab",

            gradientProjectTitle: 'Project <strong>Gradient Noise</strong>',
            gradientSubtitle: "3D Graphics",
            gradientOverviewTitle: "Project Overview",
            gradientOverviewText: "Gradient Noise is a CS250 graphics project focused on implementing Improved 3D Perlin Gradient Noise in GLSL. The project generates procedural noise patterns on the GPU using an offscreen framebuffer, then visualizes the generated texture as both a 2D texture and a displaced 3D surface.",
            gradientTasksTitle: "Tasks Completed",
            gradientTasks: [
                "Registered the D07 Gradient Noise demo in the existing demo factory system.",
                "Added the required D07 source files, shader files, and build entries to the project.",
                "Extended the Texture class to support additional color formats such as RGBA8, RGBA32F, and R32F.",
                "Updated the FrameBuffer class to support configurable color texture formats.",
                "Implemented Improved 3D Perlin Gradient Noise in GLSL using fixed gradient directions and a permutation table.",
                "Implemented Gradient, Fractal Sum, Turbulence, Marble, and Wood procedural noise patterns.",
                "Created shaders to display the generated noise texture as a textured quad.",
                "Created a surface vertex shader that displaces a plane mesh using the generated noise texture.",
                "Built and embedded the WebGL release version into this portfolio page."
            ],
            gradientReflectionTitle: "Reflection",
            gradientReflectionText: "This project helped me understand how gradient noise differs from value noise. Instead of interpolating random values directly, gradient noise uses direction vectors and dot products to create smoother procedural patterns. The most challenging part was making the shader-based noise, framebuffer texture format, tiling behavior, and surface displacement work together correctly. Through this assignment, I learned how procedural noise can be generated on the GPU and reused for both texture visualization and terrain-like surface rendering.",
            gradientDemoTitle: "Demo",
            gradientDemoLink: "Open Gradient Noise Demo in a new tab"
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
            meshesDemoLink: "새 탭에서 Procedural Meshes 데모 열기",

            shadowProjectTitle: '프로젝트 <strong>Shadow Mapping</strong>',
            shadowSubtitle: "3D 그래픽스",
            shadowOverviewTitle: "프로젝트 개요",
            shadowOverviewText: "Shadow Mapping은 depth texture를 사용하여 실시간 그림자를 렌더링하는 CS250 그래픽스 프로젝트입니다. 이 프로젝트는 빛의 시점에서 장면을 렌더링하고, framebuffer에 depth 정보를 저장한 뒤, main render pass에서 shadow map을 사용하여 각 fragment가 빛을 받는지 그림자 안에 있는지 판단하는 과정을 보여줍니다.",
            shadowTasksTitle: "완료한 작업",
            shadowTasks: [
                "기존 demo factory system에 D05 Shadow Mapping 데모를 등록했습니다.",
                "필요한 shadow mapping shader, framebuffer file, camera utility, project build entry를 추가했습니다.",
                "Framebuffer rendering을 위해 Texture class에 depth texture와 빈 RGBA texture 생성 기능을 추가했습니다.",
                "Main camera와 light camera에서 사용하는 camera view matrix와 world matrix 계산을 구현했습니다.",
                "FrameBuffer 생성, texture attachment, binding, completeness checking, cleanup을 구현했습니다.",
                "빛의 시점에서 장면을 렌더링하여 shadow depth map을 생성했습니다.",
                "Shadow map, lighting, gamma correction, fog, debug visualization을 사용하여 최종 장면을 렌더링했습니다.",
                "불안정한 32-bit depth texture 선택 시 더 안정적인 24-bit depth format으로 대체되도록 처리했습니다.",
                "WebGL release 버전을 빌드하고 이 포트폴리오 페이지에 삽입했습니다."
            ],
            shadowReflectionTitle: "회고",
            shadowReflectionText: "이 프로젝트를 통해 shadow mapping이 그래픽스 파이프라인의 여러 부분과 어떻게 연결되는지 이해할 수 있었습니다. 가장 어려웠던 부분은 light camera, depth framebuffer, shadow texture, shader-space transformation이 올바르게 함께 작동하도록 맞추는 것이었습니다. 또한 texture format과 platform support에 따라 그래픽스 기능의 동작이 달라질 수 있으므로, 안정적인 fallback 처리를 만드는 것이 interactive demo에서 중요하다는 점을 배웠습니다.",
            shadowDemoTitle: "데모",
            shadowDemoLink: "새 탭에서 Shadow Mapping 데모 열기",

            valueProjectTitle: '프로젝트 <strong>Value Noise</strong>',
            valueSubtitle: "3D 그래픽스",
            valueOverviewTitle: "프로젝트 개요",
            valueOverviewText: "Value Noise는 C++ value noise algorithm을 사용하여 procedural texture를 생성하는 CS250 그래픽스 프로젝트입니다. 이 프로젝트는 1D, 2D, 3D noise generation, permutation hashing, smoothing function, interpolation, texture uploading, 그리고 procedural noise pattern을 시각화하기 위한 WebGL shader rendering을 보여줍니다.",
            valueTasksTitle: "완료한 작업",
            valueTasks: [
                "기존 demo factory system에 D06 Value Noise 데모를 등록했습니다.",
                "필요한 D06 shader file과 noise source file을 프로젝트 빌드에 추가했습니다.",
                "생성된 RGBA noise data를 GPU texture로 갱신할 수 있도록 texture upload 기능을 구현했습니다.",
                "Linear, cosine, smoothstep, quintic smoothing을 위한 fade function을 구현했습니다.",
                "1D, 2D, 3D noise를 위한 linear, bilinear, trilinear interpolation helper를 구현했습니다.",
                "Base index, next index, interpolation value를 계산하는 noise coordinate generation을 구현했습니다.",
                "반복 가능하고 tileable한 procedural noise를 만들기 위해 permutation hashing을 구현했습니다.",
                "1D, 2D, 3D input에 대한 Value Noise evaluation을 구현했습니다.",
                "낮은 해상도의 noise와 tiling이 WebGL demo에서 올바르게 보이도록 texture filtering과 wrapping을 조정했습니다.",
                "WebGL release 버전을 빌드하고 이 포트폴리오 페이지에 삽입했습니다."
            ],
            valueReflectionTitle: "회고",
            valueReflectionText: "이 프로젝트를 통해 procedural noise가 random value, hashing, smoothing, interpolation을 통해 어떻게 만들어지는지 이해할 수 있었습니다. 가장 어려웠던 부분은 1D, 2D, 3D noise mode가 일관되게 동작하도록 만들고, texture tiling과 filtering이 예시와 비슷하게 보이도록 맞추는 것이었습니다. 또한 CPU에서 생성한 데이터를 GPU texture로 업로드하고 simple shader를 통해 interactive graphics demo에 표시하는 방법을 배웠습니다.",
            valueDemoTitle: "데모",
            valueDemoLink: "새 탭에서 Value Noise 데모 열기",

            gradientProjectTitle: '프로젝트 <strong>Gradient Noise</strong>',
            gradientSubtitle: "3D 그래픽스",
            gradientOverviewTitle: "프로젝트 개요",
            gradientOverviewText: "Gradient Noise는 GLSL에서 Improved 3D Perlin Gradient Noise를 구현하는 CS250 그래픽스 프로젝트입니다. 이 프로젝트는 offscreen framebuffer를 사용하여 GPU에서 procedural noise pattern을 생성하고, 생성된 texture를 2D texture와 displacement가 적용된 3D surface로 시각화합니다.",
            gradientTasksTitle: "완료한 작업",
            gradientTasks: [
                "기존 demo factory system에 D07 Gradient Noise 데모를 등록했습니다.",
                "필요한 D07 source file, shader file, build entry를 프로젝트에 추가했습니다.",
                "RGBA8, RGBA32F, R32F 같은 추가 color format을 지원하도록 Texture class를 확장했습니다.",
                "설정 가능한 color texture format을 지원하도록 FrameBuffer class를 수정했습니다.",
                "고정된 gradient direction과 permutation table을 사용하여 GLSL에서 Improved 3D Perlin Gradient Noise를 구현했습니다.",
                "Gradient, Fractal Sum, Turbulence, Marble, Wood procedural noise pattern을 구현했습니다.",
                "생성된 noise texture를 textured quad로 표시하는 shader를 작성했습니다.",
                "생성된 noise texture를 사용하여 plane mesh를 displacement하는 surface vertex shader를 작성했습니다.",
                "WebGL release 버전을 빌드하고 이 포트폴리오 페이지에 삽입했습니다."
            ],
            gradientReflectionTitle: "회고",
            gradientReflectionText: "이 프로젝트를 통해 Gradient Noise가 Value Noise와 어떻게 다른지 이해할 수 있었습니다. Gradient Noise는 random value를 직접 보간하는 대신 direction vector와 dot product를 사용하여 더 부드러운 procedural pattern을 만듭니다. 가장 어려웠던 부분은 shader 기반 noise, framebuffer texture format, tiling behavior, surface displacement가 함께 올바르게 동작하도록 맞추는 것이었습니다. 이 과제를 통해 GPU에서 procedural noise를 생성하고 이를 texture visualization과 terrain-like surface rendering에 재사용하는 방법을 배웠습니다.",
            gradientDemoTitle: "데모",
            gradientDemoLink: "새 탭에서 Gradient Noise 데모 열기"
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

    // Shadow Mapping project page
    setHTML(".shadow-project-title", translations[lang].shadowProjectTitle);
    setText(".shadow-project-subtitle", translations[lang].shadowSubtitle);

    setText(".shadow-overview-title", translations[lang].shadowOverviewTitle);
    setText(".shadow-overview-text", translations[lang].shadowOverviewText);

    setText(".shadow-tasks-title", translations[lang].shadowTasksTitle);
    setList(".shadow-tasks-list", translations[lang].shadowTasks);

    setText(".shadow-reflection-title", translations[lang].shadowReflectionTitle);
    setText(".shadow-reflection-text", translations[lang].shadowReflectionText);

    setText(".shadow-demo-title", translations[lang].shadowDemoTitle);
    setText(".shadow-demo-link", translations[lang].shadowDemoLink);

    // Value Noise project page
    setHTML(".value-project-title", translations[lang].valueProjectTitle);
    setText(".value-project-subtitle", translations[lang].valueSubtitle);

    setText(".value-overview-title", translations[lang].valueOverviewTitle);
    setText(".value-overview-text", translations[lang].valueOverviewText);

    setText(".value-tasks-title", translations[lang].valueTasksTitle);
    setList(".value-tasks-list", translations[lang].valueTasks);

    setText(".value-reflection-title", translations[lang].valueReflectionTitle);
    setText(".value-reflection-text", translations[lang].valueReflectionText);

    setText(".value-demo-title", translations[lang].valueDemoTitle);
    setText(".value-demo-link", translations[lang].valueDemoLink);

    // Gradient Noise project page
    setHTML(".gradient-project-title", translations[lang].gradientProjectTitle);
    setText(".gradient-project-subtitle", translations[lang].gradientSubtitle);

    setText(".gradient-overview-title", translations[lang].gradientOverviewTitle);
    setText(".gradient-overview-text", translations[lang].gradientOverviewText);

    setText(".gradient-tasks-title", translations[lang].gradientTasksTitle);
    setList(".gradient-tasks-list", translations[lang].gradientTasks);

    setText(".gradient-reflection-title", translations[lang].gradientReflectionTitle);
    setText(".gradient-reflection-text", translations[lang].gradientReflectionText);

    setText(".gradient-demo-title", translations[lang].gradientDemoTitle);
    setText(".gradient-demo-link", translations[lang].gradientDemoLink);
}
