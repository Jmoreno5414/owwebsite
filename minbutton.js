const button1 = document.querySelector(".lm1");
const button2 = document.querySelector(".lm2");
const button3 = document.querySelector(".lm3");
const button4 = document.querySelector(".lm4");
const button5 = document.querySelector(".lm5");
const button6 = document.querySelector(".lm6");



const titlearray = ["KIDS", "STUDENTS", "NEXT GEN", "WORSHIP", "SMALL GROUPS", "I-TEAM"]
const spanarray = ["Ages: 5-12", "Middle school - College", "Young adults", "All ages welcome", "Community groups", "Serving team"]
const images = ["../images/owkids.PNG",
    "../images/studentminis.jpg",
    "../images/nextgenlogo.PNG",
    "../images/worship.png",
    "../images/smallgroup.png",
    "../images/placeholder.png"
]

const description = ["KIDS ipsum dolor sit amet consectetur adipisicing elit. In nisi nulla doloribus voluptatem eveniet quos quisquam voluptatibus magni modi consequuntur a accusamus fuga aliquid dolorum aperiam suscipit veritatis consequatur Kids"
,"Students Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi nulla doloribus voluptatem eveniet quos quisquam voluptatibus magni modi consequuntur a accusamus fuga aliquid dolorum aperiam suscipit veritatis consequatur"
,"Next Gen Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi nulla doloribus voluptatem eveniet quos quisquam voluptatibus magni modi consequuntur a accusamus fuga aliquid dolorum aperiam suscipit veritatis consequatur"
,"Worship Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi nulla doloribus voluptatem eveniet quos quisquam voluptatibus magni modi consequuntur a accusamus fuga aliquid dolorum aperiam suscipit veritatis consequatur"
,"Small Groups Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi nulla doloribus voluptatem eveniet quos quisquam voluptatibus magni modi consequuntur a accusamus fuga aliquid dolorum aperiam suscipit veritatis consequatur"
,"I-Team Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi nulla doloribus voluptatem eveniet quos quisquam voluptatibus magni modi consequuntur a accusamus fuga aliquid dolorum aperiam suscipit veritatis consequatur"

];

const loopimages = [""]
const popupframe = document.querySelector(".pop-up-block")
const popuptitle = document.querySelector(".pop-up-title")
const desc = document.querySelector(".pop-up-desc")
const popspan = document.querySelector(".pop-up-under-title")
const poplogo = document.querySelector(".pop-up-logo")

const leftarrow = document.querySelector(".left-arrow")
const rightarrow = document.querySelector(".right-arrow")


let index = 0;

// cards

const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")
const card6 = document.querySelector(".card6")



// Reminder for me, adding the learn more buttons would just need me to get the classes then use updateopup(1) or updatepopup(2)

const cardarray = [card1, card2, card3, card4, card5, card6]

function updatePopup(currentinx) {
    index = currentinx;
    popuptitle.textContent = titlearray[index];
    desc.textContent = description[index]
    popspan.textContent = spanarray[index]
    poplogo.src = images[index];
    cardarray.forEach(c => {
            c.classList.remove("active");
        });
    cardarray[currentinx].classList.add("active");
}

if (popupframe) {
    leftarrow.addEventListener('click', () => {
        index--

        if (index < 0) {
            index = 5
        }
        updatePopup(index);
    });
};

if (popupframe) {
    rightarrow.addEventListener('click', () => {
        index++
        if (index >= titlearray.length ) {
            index = 0
        }
        updatePopup(index);

    });
};



cardarray.forEach((card, i) => {
    card.addEventListener('click', () => {
        card.classList.add("active");
        updatePopup(i);
        index = i;

    });


});