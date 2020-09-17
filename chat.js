const messageList = document.getElementById('message-text');
const messageForm = document.getElementById('form-send');
const messages = document.getElementById('messages-list');
const userName = document.getElementById('displayName');
const userImage = document.getElementById('displayImage');
const friendsContainer = document.getElementById('friends-list');
const friendDelete = document.getElementById('delete-user');

// Retrieving data from firebase
firebase.database().ref('messages').on('child_added', userMessage => {
    const container = document.createElement('div');
    container.setAttribute('class', 'message-container');
    container.innerHTML = `${userMessage.val().userId}: ${userMessage.val().message}`;
    messageList.appendChild(container);
})

firebase.database().ref('users').on('child_added', userDetails => {
    const friendList = document.createElement('li');
    friendDelete.setAttribute('id',userDetails.val().key)
    friendList.innerHTML = userDetails.val().userId;
    friendsContainer.appendChild(friendList);
    // signOut(userDetails.val());
})

// Appending Messages
messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messages.value;
    displayMessages(message);
    messages.value = ''
})


let displayMessages = message => {
    //Adding to firebase
    let key = firebase.database().ref('messages').push().key;
    let messageItem = {
        key,
        message: message,
        userId,
        userImg,
    }

    firebase.database().ref('messages').child(key).set(messageItem);
}

// User Details
const userId = localStorage.getItem('dispName');
const userImg = localStorage.getItem('dispImage');
userName.innerText = userId;
userImage.src = userImg;

//Displaying User
let displayUser = (userId, userImg) => {
    let key = firebase.database().ref('users').push().key;
    let userItem = {
        key,
        userId,
        userImg,
    }
    firebase.database().ref('users').child(key).set(userItem);
}

displayUser(userId, userImg);

const signOut = (e) => {
    firebase.auth().signOut()
    .then(function (provider) {
        // Sign-out successful.
        firebase.database().ref('users').child(e.id).remove();
        window.location = 'login.html'
    fire
    })
    .catch(function (error) {
        // An error happened.
        console.log(error)
    });
}