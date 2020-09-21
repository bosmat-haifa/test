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
}