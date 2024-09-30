
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // ganti background 
    document.querySelector(".footer").style.backgroundColor = "#e74c3c";
    document.querySelector(".header").style.backgroundColor = "#e74c3c";
    document.querySelector(".button").style.backgroundColor = "#e74c3c";

    // ganti h2
    const headings = document.querySelectorAll("h2");
    headings.forEach(function(heading) {
        heading.style.color = "#e74c3c";
    });
});
document.getElementById("darkMode").addEventListener("change", function() {
    if (this.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});
