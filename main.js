document.getElementById("03").addEventListener("click", function() {
    document.getElementById("second").style.display = "block";
    document.getElementById("04").innerHTML = 'Login: ' + document.getElementById("01").value;
    document.getElementById("05").innerHTML = 'Password: ' + document.getElementById("02").value;
    localStorage.setItem('Login', (document.getElementById("01").value));
    localStorage.setItem('Pasword', (document.getElementById("02").value))
});