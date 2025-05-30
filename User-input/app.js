function signUpHandler() {
    var LastName = document.getElementById("LastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var firstName = document.getElementById("firstName");

    var userinput = {
        firstName: firstName.value,
        LastName: LastName.value,
        email: email.value,
        password: password.value,
    };

    var getUsers = localStorage.getItem("user");

    if (getUsers == null) {
        var arr = [userinput];
        localStorage.setItem("user", JSON.stringify(arr));
        alert("You Are Successfully Signed Up");
        window.location.href = "./index.html";
    } else {
        var userArr = JSON.parse(getUsers);

        // ✅ Check for duplicate email
        for (var i = 0; i < userArr.length; i++) {
            if (userinput.email === userArr[i].email) {
                alert("Email Already Exists");
                return;
            }
        }

        // ✅ Push and store new user
        userArr.push(userinput);
        localStorage.setItem("user", JSON.stringify(userArr));
        alert("You Are Successfully Signed Up");
        window.location.href = "./index.html";
    }
}


function loginHandler() {

    var userEmail = document.getElementById("email")
    var userPassword = document.getElementById("password")

    var getUser = JSON.parse(localStorage.getItem("users"))
    console.log(getUser);





}