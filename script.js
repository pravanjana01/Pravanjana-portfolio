window.onload = function(){
    alert("👋 Welcome to Pravanjana's AI Portfolio!");
}
function greet(){
    alert("🚀 Keep Learning, Keep Growing!");
}
function darkMode(){
    document.body.classList.toggle("dark");
}
let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});
