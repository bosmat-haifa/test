const sections = ["v-header", "sectionA", "sectionB", "sectionC"];
var currentSec = 0;
var isScrolling = false;
window.addEventListener("wheel", (e) => {
    if (e.deltaY < 0 && currentSec > 0 && !isScrolling) {
        document.getElementById(sections[--currentSec]).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    } else if (e.deltaY > 0 && currentSec < sections.length-1 && !isScrolling) {
        document.getElementById(sections[++currentSec]).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
});
