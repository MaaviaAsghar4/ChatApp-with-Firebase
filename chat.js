const messageList = document.getElementById('message-text');
const messageForm = document.getElementById('form-send');
const messages = document.getElementById('messages-list');
const userName = document.getElementById('displayName');
const userImage = document.getElementById('displayImage');
const activeUserId = document.getElementById('user-name');
const activeUserImage = document.getElementById('user-image');
const friendsContainer = document.getElementById('friend-list')

// Appending Messages
messageForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = messages.value;
    displayMessages(message);
    messages.value = ''
})


let displayMessages = message =>{
    const container = document.createElement('div');
    container.setAttribute('class', 'message-container');
    container.innerHTML = message;
    messageList.appendChild(container)
}

// User Details
const userId = localStorage.getItem('dispName');
const userImg = localStorage.getItem('dispImage');
userName.innerText = userId;
userImage.src = userImg;