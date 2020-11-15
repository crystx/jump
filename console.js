document.addEventListener('DOMContentLoaded', () => {

const prince = document.querySelector('.character');
const grass = document.querySelector('.grass');
const stone = document.querySelector('.stone');

let bottom = 0;
let gravity = 0.9;
let isJumping = false;
let isGoingLeft = false;
let isGoingRight = false;
let slide = 0;
let leftTimerId;
let rightTimerId;


function jump() {
    if (isJumping) return;
    let timerUpId = setInterval( function() {

        if (bottom > 250) {
            clearInterval(timerUpId)
            let timerDownId = setInterval( function(){
                if (bottom < 80) {
                    clearInterval(timerDownId);
                    isJumping = false;
                    if (isGoingLeft) {
                        clearInterval(leftTimerId);
                        isGoingLeft = false;
                    }
                    if (isGoingRight) {
                        clearInterval(rightTimerId);
                        isGoingRight = false;
                    }
                    // if 
                    // ((prince.style.bottom = stone.style.bottom + stone.style.height) && 
                    //  (prince.style.left + prince.style.width > stone.style.left) &&
                    //  (prince.style.right + prince.style.width > stone.style.right) &&
                    //  !isJumping)
                    //  {
                    //     clearInterval(timerDownId);
                    //  }
                }
                bottom -=5;
                prince.style.bottom = bottom + 'px';
            }, 20)
        }
        isJumping = true;
        bottom +=30;
        bottom = bottom * gravity;
        prince.style.bottom = bottom + 'px';
    }, 20)
}

function slideLeft() {
    if (isGoingLeft) return;
    if (isGoingRight) {
        clearInterval(rightTimerId)
        isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval( function() {
        slide -= 5;
        console.log('going left')
        prince.style.left = slide + 'px';
    }, 20)
}

function slideRight() {
    if (isGoingRight) return;
    if (isGoingLeft) {
        clearInterval(leftTimerId)
        isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval( function() {
        slide += 5;
        console.log('going right')
        prince.style.left = slide + 'px';
    }, 20)
} 


// function land() {
//     if 
//     (
//      (prince.bottom = stone.bottom + stone.height) && 
//      (prince.left + prince.width > stone.left) &&
//      (prince.right + prince.width > stone.right) &&
//      !isJumping
//     )
//      {
//         clearInterval(timerDownId);
//      }

// }

//assign functions to keycodes
function control(event) {
    if (event.keyCode === 38) {
        jump()
    } 
    else if(event.keyCode === 37) {
        slideLeft()
    }  
    else if(event.keyCode === 39) {
        slideRight()
    }  
    else if(event.keyCode === 40) {
        clearInterval(leftTimerId)
        isGoingLeft = false;
        clearInterval(rightTimerId)
        isGoingRight = false;
    }  
}
document.addEventListener('keydown', control)

})