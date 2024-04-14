var alertCount = 0; // Counter variable to keep track of alert occurrences

function checkScreenWidth() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (screenWidth < 768 && alertCount < 1) {
        alert("Switch to Desktop view/PC - ♥ Pavan");
        alertCount++; // Increment the counter after showing the alert
    }
}

window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;


var typed = new Typed(".text", {
    strings: ["Web Developer", "Frontend &", "Backend"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwpJ6dGjx6RHKQGVHSZg-v4bNTZACaQRPfQ9WV5pZ68DcJDUuOLRYL6wjXzWq0B3QFG/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent sucessfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    });

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
