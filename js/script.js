function toggleDarkTheme(){
    var b = document.body;
    b.classList.toggle('dark-theme');
}

var toggle = setInterval(toggleDarkTheme, 2000);
clearInterval(toggle);

setTimeout(() => {
    var b = document.body;
    b.classList.toggle('dark-theme');
}, 5000);