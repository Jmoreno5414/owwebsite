// boxes

const box1 = document.querySelector("box-1-sermon");
const box2 = document.querySelector("box-2-sermon");
const box3 = document.querySelector("box-3-sermon");

const boxes = [box1, box2, box3]

// box images

const thumb_one = document.querySelector(".thumb-one");
const thumb_two = document.querySelector(".thumb-two");
const thumb_three = document.querySelector(".thumb-three");

// box titles
const title_one = document.querySelector(".title-one");
const title_two = document.querySelector(".title-two");
const title_three = document.querySelector(".title-three");

// box dates
const date_one = document.querySelector(".date-one");
const date_two = document.querySelector(".date-two");
const date_three = document.querySelector(".date-three");

// box times

const length_one = document.querySelector(".length-one");
const length_two = document.querySelector(".length-two");
const length_three = document.querySelector(".length-three");

// buttons

const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");

// saved images

const saved_images = ["../images/backgroundsermons.png", 
    "../images/worship.png", 
    "../images/churchbackground.png"
];



title_one.textContent = "place1";
title_two.textContent = "place2";
title_three.textContent = "place3";



const saved_titles = ["Placeholder title 1", "Placeholder title 2", "Placeholder title 3"];

let index = 1; 
left_arrow.addEventListener('click', () => {
    update_left()
})



function update_left() {
    newindex = index - 1;
    

    if (newindex < 0) {
        index = 2;

    } else {
        index = newindex;
    }

   


    leftindex = (index - 1 + 3) % 3;
    rightindex = (index + 1) % 3;

    title_one.textContent = saved_titles[leftindex];
    title_two.textContent = saved_titles[index];
    title_three.textContent = saved_titles[rightindex];
    
}   



function update_right() {
     newindex = index + 1;
    

    if (newindex > 2) {
        index = 0;

    } else {
        index = newindex;
    }

   


    leftindex = (index - 1 + 3) % 3;
    rightindex = (index + 1) % 3;
    


 


}