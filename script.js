// رسالة ترحيب
window.onload = function () {
    alert("اهلا بيك في ال CV بتاعي 🔥");
};

// 🌙 Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// ✨ إظهار وإخفاء المهارات بنعومة
function toggleSkills() {
    var skills = document.getElementById("skillslist");

    if (skills.style.opacity === "0") {
        skills.style.opacity = "1";
        skills.style.height = "auto";
    } else {
        skills.style.opacity = "0";
        skills.style.height = "0";
    }
}

// 🎯 تغيير لون المهارة عند الضغط
var items = document.querySelectorAll("#skillslist li");

items.forEach(function (item) {
    item.addEventListener("click", function () {
        this.style.backgroundColor = "#90caf9";
    });
});
