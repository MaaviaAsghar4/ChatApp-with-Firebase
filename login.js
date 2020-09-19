const signInG = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.location = 'chat.html'
            localStorage.setItem('dispName', user.displayName);
            localStorage.setItem('dispImage', user.photoURL);
            // dispname.innerText = user.displayName
            // dispimage.src = user.photoURL
            
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage)
        });

}


const signInF = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.location = 'chat.html'
            localStorage.setItem('dispName', user.displayName);
            localStorage.setItem('dispImage', user.photoURL);
            // dispname.innerText = user.displayName
            // dispimage.src = user.photoURL
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage)
        });
}