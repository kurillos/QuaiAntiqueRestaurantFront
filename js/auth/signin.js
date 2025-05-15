const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Info factice, nécessite un call API pour vérifier les identifiants en BDD

    if(mailInput.value === "test@mail.com" && passwordInput.value === "123"){

      //il faudra récupérer le vrai token
      const token = "zpvnabvanivniBµVµNOUB"
      setToken(token);

      //placer le token en cookie
      setCookie(RoleCookieName, "admin", 7);
      window.location.replace("/");
} else {
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
    }
}