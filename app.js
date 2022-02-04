// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state
// console.log('in', friendInputEl);
let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const input = friendInputEl.value;
    // console.log('i', input);
    friendInputEl.value = '';
    // create a new friend object
    const friend = {
        name: input,
        satisfaction: 2
    };
    // push it into the friends state array, passed in as an argument
    friendData.push(friend);
    // reset the input
    // display all the friends (use a function here)
    displayFriends();
});

function eatMushroom(friend) {
    friendsEl.innerHTML = '';

    if (friend.satisfaction < 3) { 
        friend.satisfaction++; 
        mushroomCount--;
    } 
    
    if (mushroomCount === 0) {
        alert('no more mushrooms!');       
    } else if (mushroomCount < 0) {
        mushroomCount = 0;
    }

    console.log('ate', friend, mushroomCount);
    displayFriends();
    displayMushrooms();
}

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.innerHTML = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        const friendEl = renderFriend(friend);
       
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             then display your friends and mushrooms with the updated state
        friendEl.addEventListener('click', () => {
            eatMushroom(friend);
            console.log('clicked', friend);
        });
        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.innerHTML = '';
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        let mushroom = renderMushroom(i);
        mushroomsEl.append(mushroom);
    }
}

displayFriends();
displayMushrooms();
