const view = {};
let dataUsername = '';
view.dataUser = (dataUser) => {
    dataUsername = dataUser
}
view.setScreenActive = (ScreenName) => {
    console.log(ScreenName);
    switch (ScreenName) {
        case "registerPage":
            let app = document.getElementById("app");
            app.innerHTML = component.registerPage;

            let registerForm = document.getElementById("registerForm");
            registerForm.addEventListener("submit", (e) => {
                e.preventDefault();
                // let a= registerForm.firstName.value;
                // console.log(a);
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(data);

            })
            view.setErrorMessage = (id, content) => {
                document.getElementById(id).innerHTML = content
            }

            let redirectLogin = document.getElementById("redirectLogin");
            redirectLogin.addEventListener("click", () => {
                // e.preventDefault(e);
                view.setScreenActive("loginPage")
            })
            break;
        case "loginPage":
            document.getElementById("app").innerHTML = component.loginPage;
            // let loginPage = document.getElementById("app");
            // appLogin.innerHTML = component.loginPage;
            // console.log(appLogin);
            let loginForm = document.getElementById("loginForm");
            // console.log(appLogin);
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(data);
            });
            // view.setErrorMessage = (index, value) => {
            //     document.getElementById(index).innerText = value;
            // }
            let redirectRegister = document.getElementById("redirectRegister");
            redirectRegister.addEventListener("click", () => {
                view.setScreenActive("registerPage");
            })
            break;
        case "webapp":
            document.getElementById("app").innerHTML = component.loginWeb;
            let sendData = document.getElementById("sendData");
            sendData.addEventListener("click", (e) => {

                e.preventDefault();
                let valueInput = document.getElementById("valueInputForm").valueInput.value
                document.getElementById("valueInputForm").valueInput.value = ""
                var today = new Date();
                var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date + ' ' + time;
                let checkMessage = {
                    message: {
                        owner: firebaseApp.auth().currentUser.email,
                        content: valueInput,
                        createdAt: dateTime,
                    },
                }
                let listChat = document.getElementById("list-chat");
                console.log(listChat);
                listChat.scrollTop = listChat.scrollHeight;
                controller.checkMessage(checkMessage);
                model.getListMessage();
            })
            break;
            //  let signOut=document.getElementById("signOut");
            //  signOut.addEventListener("click",()=>{
            //      let confirmSignOut=confirm("Bạn có muốn thoát khỏi trang!");
            //     if(confirmSignOut) {
            //         firebaseApp.auth().signOut();
            //     }
            // })
            // document.getElementById("app").innerHTML=component.loginweb;

            // e.preventDefault();
            // let node=document.createElement("div");
            // node.appendChild(textnode);
            // document.getElementById("me").appendChild(node);
            // let bot=document.createElement("div");
            // bot.classList.add("content");
            // let  textBot=document.createTextNode(`${valueInput}`);
            // bot.appendChild(textBot);
            // document.getElementById("owner").appendChild(bot);
            // console.log(textBot);

            document.getElementById("valueInputForm").valueInput.value = "";
            const nodeUser = document.createElement("div");
            nodeUser.classList.add("message", "me", "content");
            const textnodeUser = document.createTextNode("hihiih");
            nodeUser.appendChild(textnodeUser);
            document.getElementById("list-chat").appendChild(nodeUser);

            document.getElementById("valueInputForm").valueInput.value = "";
            const nodeBot = document.createElement("div");
            nodeBot.classList.add("message", "owner");
            const textnodeBot = document.createTextNode("hoho");
            nodeBot.appendChild(textnodeBot);
            document.getElementById("list-chat").appendChild(nodeBot);
        // vua conment
        // let listChat = document.getElementById("list-chat");
        // listChat.scrollTop = listChat.scrollHeight;
        // // view.message(message);
        // // view.message(messageFromBot);
        // model.saveChat(listChat.innerHTML);
    }
}
view.messageChat = (mess) => {
    let createElementDiv = document.createElement("div");
    createElementDiv.classList.add("message");
    if (mess.owner == "owner") {
        createElementDiv.classList.add("me");
        createElementDiv.innerHTML
    }
}
view.renderListChat = (listMessage) => {

    let result = '';
    let listChat = document.getElementById("list-chat");
    // console.log("firebase.auth().currentUser ", firebase.auth().currentUser);
    for (let i = 0; i < listMessage.length; i++) {
        if (listMessage[i].message.owner == firebase.auth().currentUser?.email) {
            result += `
            <div class="message me " id ="me">
            <div class="box-img">
                <img   class="img1" src="https://www.pngall.com/wp-content/uploads/3/Puss-In-Boots-PNG-HD-Image.png" alt="">
            </div>   
            <div class="bigdiv1">
            <div class="content  "  style:"word-break: break-all" >
                    ${listMessage[i].message.content}
                </div>
                </div>  
                <div class="contentTime ">
                    ${listMessage[i].message.createdAt}
                </div>
            </div>     
        `
        } else {
            result +=
                `
            <div class="message owner" id="me" >
                          <img class="img2" src="https://www.pngall.com/wp-content/uploads/3/Puss-In-Boots-Transparent.png" alt="">
                <div class="bigdiv2">    
                    <div class="content box-content2" >
                        ${listMessage[i].message.owner}
                     </div>
                </div>
                <div class="bigdiv3">
                    <div class="content box-content1">
                        ${listMessage[i].message.content}
                    </div>
                </div>
                <div class="content footer ">
                ${listMessage[i].message.createdAt}
                </div>
            </div>     
            `
        }
    }
    console.log(listChat);
    listChat.innerHTML = result;
    
    listChat.scrollTop=listChat.scrollHeight;
    
    //console.log(createElementDiv);
}