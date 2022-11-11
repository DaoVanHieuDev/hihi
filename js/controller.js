const controller = {};
controller.register = (data) => {
    console.log(data);
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    if (data.firstName == "") {

        view.setErrorMessage("firstName", "Please input firstName again!")
    } else if (data.firstName.length < 4) {
        view.setErrorMessage("firstName", "Please input more than 4 characters !")

    } else {
        view.setErrorMessage("firstName", "")

    }
    if (data.lastName == "") {
        view.setErrorMessage("lastName", "Please input lastName again!")
    } else if (data.firstName.length < 4) {
        view.setErrorMessage("lastName", "Please input more than 4 characters !")
    } else {
        view.setErrorMessage("lastName", "")
    }
    if (data.email == "") {
        view.setErrorMessage("email", "Please input email again!")
    }
    else if (!emailIsValid(data.email)) {
        view.setErrorMessage("email", " Email have @ gmail.com again!")
    } else {
        view.setErrorMessage("email", "")
    }
    if (data.password == "") {
        view.setErrorMessage("password", "Please input password again!")
    } else if (data.password.length < 6) {
        view.setErrorMessage("password", "Password more than 6 characters!")
    } else {
        view.setErrorMessage("password", "")
    }
    if (data.confirmPassword == "") {
        view.setErrorMessage("confirmPassword", "Please input confirmPassword again!")
    } else if (data.confirmPassword !== data.password) {
        view.setErrorMessage("confirmPassword", " ConfirmPassword not true !")
    } else {
        view.setErrorMessage("confirmPassword", "")
    }
    if (data.firstName != "" && data.lastName != "" && data.email != "" &&
        data.password != "" && data.confirmPassword == data.password
    ) {
        model.register(data);
    }
}
controller.login = (data) => {
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    if (data.email == "") {
        view.setErrorMessage("email", "Please input email again!")
    }
    else if (!emailIsValid(data.email)) {
        view.setErrorMessage("email", " Email have @ .com again!")
    }
    else {
        view.setErrorMessage("email", "")

    }
    if (data.password == "") {
        view.setErrorMessage("password", "Please input password again!")
    } else if (data.password.length < 6) {
        view.setErrorMessage("password", "Password more than 6 characters!")
    } else {
        view.setErrorMessage("password", "")
    }
    if (data.password && data.email
    ) {
        model.login(data);
    }
}
// function signout() {


//     if (confirm("signOut") == true) {
//         firebaseApp.auth().signout
//     }
// }

controller.checkMessage = (checkMessage) => {
    
    if (checkMessage.message.content !== "") {
        model.dataSendFirebase(checkMessage);

        let listChat = document.getElementById("list-chat");
        listChat.scrollTop = listChat.scrollHeight;
        
    }else{
        let listChat = document.getElementById("list-chat");
         listChat.scrollTop=listChat.scrollHeight;

    }

}
