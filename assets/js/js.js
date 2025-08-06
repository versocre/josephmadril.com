window.onload = function () {
    document.getElementById("monav").onclick = function () {
        openNav()
    };

    document.getElementById("navionm").onclick = function () {
        closeNav()
    };

    document.getElementById("exitmonav").onclick = function () {
        closeNav()
    };
}

function openNav() {
    document.getElementById("mobinavman").style.bottom = "-7vh";
    document.body.style.overflow = 'hidden';
    document.getElementById("navionm").style.display = "block";
    setTimeout(function () {
        document.getElementById("mobinavman").style.display = "none";
        document.getElementById("navionm").style.background = "var(--blurbg)";
    }, 50);
    setTimeout(function () {
        document.getElementById("content").style.right = "0";
        document.getElementById("menufoot").style.bottom = "1%";
    }, 50);
}

function closeNav() {
    document.getElementById("mobinavman").style.display = "block";
    document.body.style.overflow = 'visible';
    document.getElementById("content").style.right = "-25vh";
    document.getElementById("menufoot").style.bottom = "-10vh";
    setTimeout(function () {
        document.getElementById("navionm").style.background = "#ffffff00";
        document.getElementById("mobinavman").style.bottom = "0";
    }, 50);
    setTimeout(function () {
        document.getElementById("navionm").style.display = '';
    }, 50);
    const el = document.querySelector('#mobinavman')
    el.style.removeProperty('display');
}