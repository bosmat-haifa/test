/*
    light and dark mode buttons shit
*/

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

/*
    languages shit
*/

const translators = document.getElementsByClassName("translator");


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

function hebrew() {
    for (let i = 0; i < translators.length; i++) {
        var translator = translators[i].children;
        translator[0].innerHTML = translator[1].innerHTML;
        document.getElementById("pages").style.margin = "0 0 0 -3rem";
    }
    var languages = document.getElementById("languages");
    var he = document.getElementById("hebrew");
    var en = document.getElementById("english");
    var ru = document.getElementById("russian");
    languages.replaceChild(he, en);
    languages.replaceChild(he, ru);
    languages.appendChild(en);
    languages.appendChild(ru);
    // languages = document.getElementById("languages");
}

function english() {
    for (let i = 0; i < translators.length; i++) {
        var translator = translators[i].children;
        translator[0].innerHTML = translator[2].innerHTML;
        document.getElementById("pages").style.margin = "0 0 0 -4rem";
    }
    var languages = document.getElementById("languages");
    var he = document.getElementById("hebrew");
    var en = document.getElementById("english");
    var ru = document.getElementById("russian");
    languages.replaceChild(en, he);
    languages.replaceChild(en, ru);
    languages.appendChild(he);
    languages.appendChild(ru);
    // languages = document.getElementById("languages");
}

function russian() {
    for (let i = 0; i < translators.length; i++) {
        var translator = translators[i].children;
        translator[0].innerHTML = translator[3].innerHTML;
        document.getElementById("pages").style.margin = "0 0 0 -6rem";
    }
    var languages = document.getElementById("languages");
    var he = document.getElementById("hebrew");
    var en = document.getElementById("english");
    var ru = document.getElementById("russian");
    languages.replaceChild(ru, he);
    languages.replaceChild(ru, en);
    languages.appendChild(en);
    languages.appendChild(he);
    // languages = document.getElementById("languages");
}