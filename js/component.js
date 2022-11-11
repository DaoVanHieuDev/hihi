const component = {};
component.registerPage = `
<div class="register-container" >
<form class="register-form" id="registerForm" >
    <h2> Hello World </h2>
    <div>
        <input type="text" placeholder="firstName" name="firstName">
        <div class="error" id="firstName"></div>
    </div>
    <div>
        <input type="text" placeholder="lastName" name="lastName">
        <div class="error"id="lastName" ></div>
    </div>
    <div>
        <input type="text" placeholder="email" name="email">
        <div class="error" id="email"></div>
    </div>
    <div>
        <input type="text" placeholder="pasword" name="password">
        <div class="error" id="password" ></div>
    </div>
    <div>
        <input type="text" placeholder="confirmPassword" name="confirmPassword">
        <div class="error" id="confirmPassword" ></div>
    </div>
    <div>
        Bạn đã có tài khoản <a id="redirectLogin" >(Login)</a>
    </div>
    <button type="submit" id="register" >Register</button>
</form>
</div>
`
component.loginPage = `
<div class="login-container">
<form  class="login-form" id="loginForm" >
    <h2> Hello World </h2>
    <div>
        <input type="text" placeholder="email" name="email">
        <div class="error" id="email"></div>
    </div>
    <div>
        <input type="text" placeholder="password" name="password">
        <div class="error" id="password" ></div>
    </div>
 
    <div>
        Bạn chưa có tài khoản <a id="redirectRegister">(Đăng kí)</a>
    </div>
    <button type="submit">Login</button>
</form>
</div>

`
component.loginWeb = `

<div class="chat-container">
    <div class="header">
        Hello Bro!
    </div>
    <div class="main"> 
        <div class="conversation-detail">
            <div class="tittle">
              Homie
            </div>
            <div class="list-chat" id="list-chat">           
                
            </div>
            <form id="valueInputForm" class="form-chat">
                <div class="input-chat">
                    <input placeholder="Messsage chat!" name="valueInput">
                </div>
                <button onclick="xuong()" id="sendData" class="send" type="submit" ><i  class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    </div>
   </div>

`