const model = {};
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHx9PTyaSCnEJZPjSGH8025pP6v9wV4sc",
    authDomain: "daovanhieu-5ee09.firebaseapp.com",
    projectId: "daovanhieu-5ee09",
    storageBucket: "daovanhieu-5ee09.appspot.com",
    messagingSenderId: "646318026569",
    appId: "1:646318026569:web:f1e6a0b067f1520ffdb498"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
model.register = async (data) => {
    console.log("111")
    try {
        let dataUser = '';
        let response = await auth.createUserWithEmailAndPassword(data.email, data.password);
        view.setScreenActive("loginPage");
        auth.currentUser.sendEmailVerification();
        await firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + data.lastName
        })
        dataUser = auth.currentUser.displayName;
        view.setScreenActive("loginPage");
    } catch (error) {
        alert(error.message);
    }
}
model.login = async (data) => {
    try {
        let response = await auth.signInWithEmailAndPassword(data.email, data.password);
        let result = firebase.auth().currentUser.email
        console.log(result)
        if (response) {
            view.setScreenActive("webapp");
        } else {
            alert("please verify email")
        }
    } catch (error) {
        alert(error.message);
    }
}
// model.saveChat = (data)=>{
//     let addField={
//         message:data

//     }

//     let uid ="messList";
//     const firestoreQueries=async () => {
//         try {
//             let response = await firebase.firestore()
//             .collection("messSave")
//             .doc(messList)
//             .update({message:firebase.firestore.FieldValue.arrayUnion(data)});
//         } catch (error) {
//             console.log(error.message);
//         }
//     }
//     firestoreQueries();
// }
// model.getChat = async () => {
//     try {
//         let response = await firebase.firestore()
//         .collertion("messSave")
//         .doc("messList")
//         .get()
//         let result= response.data().message
//         if(result!== undefined) {
//             let listChat=document.getElementsById("listChat");
//         listChat.innerHTML=result
//         }
//     }catch(err) {
//         console.log(err.message);
//     }
// }
model.dataSendFirebase = (data) => {
    let uid = "sHI3gEn1a7kyI7LWUNfd"
    const firestoreQueries = async () => {
        try {
            let response = await firebase.firestore()
                .collection("listMessage")
                .doc(uid)
                .update({ message: firebase.firestore.FieldValue.arrayUnion(data) });
           
        } catch (error) {
            console.log(error.message)
        }
    }
    firestoreQueries();
}
model.getListMessage = async () => {
    try {
        let response = await firebase.firestore()
            .collection("listMessage")
            .doc("sHI3gEn1a7kyI7LWUNfd")
            .get()
        let result = response.data().message
        console.log(result);
        view.renderListChat(result);

    } catch (err) {
        console.log(err.message);
    }
}
