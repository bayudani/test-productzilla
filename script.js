
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // ganti background 
    document.querySelector(".footer").style.backgroundColor = "orange";
    document.querySelector(".header").style.backgroundColor = "orange";
    document.querySelector(".button").style.backgroundColor = "orange";

    // ganti h2
    const headings = document.querySelectorAll("h2");
    headings.forEach(function(heading) {
        heading.style.color = "orange";
    });
});