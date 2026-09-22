
const image_block = document.querySelector(".instruction-image")
const images = ["../images/instructionplaceholder1.png", "../images/instructionplaceholder2.png", "../images/instructionplaceholder3.png", "../images/instructionplaceholder4.png"];

const instruction_title = document.querySelector(".instruction-title")

const instruction_titles = ["Download Church Center", "Find One Way Christian Church", "Sign in or create an account", "Explore and get involved"]


const instruction_step = document.querySelector(".instruction-step")

const instruction_bios = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit, cum officia aspernatur quibusdam alias! 1", 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit, cum officia aspernatur quibusdam alias! 2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit, cum officia aspernatur quibusdam alias! 3",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit, cum officia aspernatur quibusdam alias! 4"
];

const instruction_button = document.querySelector(".change-button");

let index = 0;


if (instruction_button && image_block) {
    instruction_button.addEventListener('click', () => {
        index++;

        if (index >= instruction_titles.length) {
            index = 0;
        }

        image_block.src = images[index];
        instruction_title.textContent = instruction_titles[index]
        instruction_step.textContent = instruction_bios[index]
        console.log("success")

    });
}

// kids rgb(175, 220, 227);