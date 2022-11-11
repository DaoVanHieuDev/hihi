window.onload = () => {
    //view.setScreenActive("registerPage");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            view.setScreenActive("webapp");
            model.getListMessage1 = async () => {
                try {
                    let response = await firebase
                        .firestore()
                        .collection("listMessage")
                        .doc("sHI3gEn1a7kyI7LWUNfd")
                        .get();
                    let result = response.data().message;
                    console.log(result);
                    view.renderListChat(result);
                } catch (err) {
                    console.log(err.message);
                }
            };

            model.getListMessage1();
        } else {
            view.setScreenActive("registerPage");
        }
        firebase
            .firestore()
            .collection("listMessage")
            .doc("sHI3gEn1a7kyI7LWUNfd")
            .onSnapshot((doc) => {
                console.log("Current data:", doc.data().message);
                view.renderListChat(doc.data().message);
            });
    });
};
//     let newMessage={
//         content:"hello",
//         owner:"daovanhieu204@gmail.com",
//         createdAt:"11h00p"
//     }
//     let updateListMessage={
//         message:firebase.firestore.FieldValue.arrayUnion(newMessage)

//     }
//     let uid="messList";
//     const firestoreQueries =async () => {
//         try {
//             let response= await firebase.firestore()
//             .collection("messSave")
//             .doc(uid)
//             .update(updateListMessage)
//         } catch (error ) {
//             console.log(error.message);
//         }
//     }
//     firestoreQueries();

// }

// thao tắc với firestore

// getOne document
//
//     const firestoreQueries= async()=>{
//         try{
//         let response= await  firebase.firestore()
//         .collection("users")
//         .doc("2PAtja3XkHjK85z55nqL")
//         .get();
//        console.log(response.data());
//         } catch(error) {
//             console.log(error.message);
//         }
//     }
//    firestoreQueries();
// }

// create document
// let addField={
//     phone:"000000000000",
//     name:"hieuhieubiet"
// }
// const firestoreQueries= async()=>{
//     try{
//     let response= await  firebase.firestore()
//     .collection("users")
//     .add(addField);
//    console.log(response);
//     } catch(error) {
//         console.log(error.message);
//     }
// }
// firestoreQueries();
// }

// update document

// let addField={
//     phone:"000000000000",
//     name:"hieuthongminh"
// }
// let uid="wlIzvkw2bftnG9r95Tsl"
// const firestoreQueries= async()=>{
//     try{
//     let response= await  firebase.firestore()
//     .collection("users")
//     .doc(uid)
//     .update(addField);
//    console.log(response);
//     } catch(error) {
//         console.log(error.message);
//     }
// }
// firestoreQueries();
// }

// delete document
// let uid="tJpbvM1fNeVBdxZbeSQR"
// const firestoreQueries= async()=>{
//     try{
//     let response= await  firebase.firestore()
//     .collection("users")
//     .doc(uid)
//     .delete();
//    console.log(response);
//     } catch(error) {
//         console.log(error.message);
//     }
// }
// firestoreQueries();
// }
