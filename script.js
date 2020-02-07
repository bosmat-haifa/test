const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('light');

    const YOSHA = document.getElementById("YOSHA");
    const YOSHABLACK = document.getElementById("YOSHABLACK");
    const background = document.getElementsByClassName("background")[0];

    YOSHA.classList.toggle("hidelogo");
    YOSHABLACK.classList.toggle("hidelogo");
    background.classList.toggle("hidebackground");

    const btnNot4 = document.getElementsByClassName("btn");
    if (document.body.classList.contains("light")) {
        for (const btn of btnNot4) {
            if (btn.classList.contains("btn4")) continue;
            btn.style.color = "black";
        }
    } else {
        for (const btn of btnNot4) {
            if (btn.classList.contains("btn4")) continue;
            btn.style.color = "white";
        }
    }
});

const sections = ["v-header", "sectionA", "sectionB", "sectionC"];
var currentSec = 0;
var isScrolling = false;
window.addEventListener("wheel", (e) => {
    if (e.deltaY < 0 && currentSec > 0 && !isScrolling) {
        document.getElementById(sections[--currentSec]).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    } else if (e.deltaY > 0 && currentSec < sections.length - 1 && !isScrolling) {
        document.getElementById(sections[++currentSec]).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }
});

const value = document.getElementById("languages");
const translators = document.getElementsByClassName("translator");
const values = ["hebrew", "english", "russian"];
for (let i = 0; i < translators.length; i++) {
    var translator = translators[i].children;
    for (const child of translator) {
        if (child.tagName.toLowerCase() != "p") {
            child.style.display = "none";
        } else {
            child.style.margin = "0";
        }
    }
}
value.onchange = function() {
    for (let i = 0; i < translators.length; i++) {
        var translator = translators[i].children;
        translator[0].innerHTML = translator[values.indexOf(value.value)+1].innerHTML;
    }
}