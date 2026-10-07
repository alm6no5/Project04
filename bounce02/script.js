const languageBtn = document.getElementById("languageBtn");
let currentLanguage = "en";

const words = {
    en: {
        field: "Cyber Security",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        aboutTitle: "About Me",
        aboutText: "I am interested in Cyber Security. My skills include penetration testing, web application security, vulnerability assessment, SIEM and log analysis, and incident response.",
        skillsTitle: "Skills",
        skill1: "Penetration Testing",
        skill2: "Web Application Security",
        skill3: "Vulnerability Assessment",
        skill4: "SIEM & Log Analysis",
        skill5: "Incident Response",
        projectsTitle: "Projects",
        project0: "Discovery Web Piscine exercises.",
        project1: "Basic HTML and CSS exercises.",
        project2: "Web development practice exercises.",
        project3: "JavaScript and web practice exercises.",
        cyberProjectTitle: "Cyber Security Project",
        cyberProject: "Design and Implementation of a Hybrid VPN Communication Tool.",
        hobbiesTitle: "Hobbies",
        hobbiesText: "Technology, learning Cyber Security, and problem solving.",
        contactTitle: "Contact"
    },
    ar: {
        field: "الأمن السيبراني",
        navAbout: "عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "التواصل",
        aboutTitle: "عني",
        aboutText: "أنا مهتم بمجال الأمن السيبراني. من مهاراتي اختبار الاختراق وأمن تطبيقات الويب وتقييم الثغرات وتحليل السجلات والاستجابة للحوادث.",
        skillsTitle: "المهارات",
        skill1: "اختبار الاختراق",
        skill2: "أمن تطبيقات الويب",
        skill3: "تقييم الثغرات",
        skill4: "تحليل SIEM والسجلات",
        skill5: "الاستجابة للحوادث",
        projectsTitle: "المشاريع",
        project0: "تمارين Discovery Web Piscine.",
        project1: "تمارين أساسية في HTML و CSS.",
        project2: "تمارين في تطوير الويب.",
        project3: "تمارين JavaScript والويب.",
        cyberProjectTitle: "مشروع الأمن السيبراني",
        cyberProject: "تصميم وتنفيذ أداة اتصال Hybrid VPN.",
        hobbiesTitle: "الهوايات",
        hobbiesText: "التكنولوجيا وتعلم الأمن السيبراني وحل المشاكل.",
        contactTitle: "التواصل"
    }
};

languageBtn.addEventListener("click", function () {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";
        languageBtn.textContent = "English";
    } else {
        currentLanguage = "en";
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        languageBtn.textContent = "العربية";
    }

    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(function (element) {
        const key = element.getAttribute("data-key");
        element.textContent = words[currentLanguage][key];
    });
});
