window.onbeforeunload = () => {
    window.scrollTo (0, 0);
}

const btnChange = document.querySelector('button');

btnChange.addEventListener('click', () => {
    if (btnChange.innerText === "Click me") {
        document.getElementById("aboutMe").scrollIntoView({behavior: "smooth"});
        btnChange.innerText = "Say hello";
    }else if (btnChange.innerText === "Say hello") {
        document.getElementById("homeP").scrollIntoView({behavior: 'smooth'});
        btnChange.innerText = "Click me";
    }
});













