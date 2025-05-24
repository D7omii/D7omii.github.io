let lang = localStorage.getItem('lang');
const langSwitch = document.getElementById('lang-switch');

// const arContent = () =>{
//     document.getElementById("logo").innerHTML() = "عبدالرحمن";
// }
// const enContent = () =>{}

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`${lang}.json`);
    return response.json();
}

const arLang = async () => {
    document.body.classList.add("ar");
    localStorage.setItem('lang', 'ar');
    const langData = await fetchLanguageData("ar");
    updateContent(langData);
}
const enLang = async () => {
    document.body.classList.remove("ar");
    localStorage.setItem('lang', 'en');
    const langData = await fetchLanguageData("en");
    updateContent(langData);
}

if (lang === "ar") arLang();
if (lang !== "ar") enLang();

langSwitch.addEventListener("click", () => {
    lang = localStorage.getItem('lang');
    lang !== "ar" ? arLang() : enLang();
});

