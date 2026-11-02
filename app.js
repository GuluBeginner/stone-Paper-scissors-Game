let userscore = 0;
let compscore = 0;
 const msg = document.querySelector("#msg");
 const userscorepara = document.querySelector("#user-score");
 const compscorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); 
        playgame(userchoice);

    })
})
const gencompchoice = () => {
    const options = ["rock", "Paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const draw = () => {
    console.log("It was a Draw");
    msg.innerText= "It was a Draw!";
    msg.style.backgroundColor = "#081b31";
}
const showinner = (userwin) => {
   if(userwin){
    userscore++
    userscorepara.innerText = userscore;
    console.log("you win");
    msg.innerText= "you win!";
    msg.style.backgroundColor = "green";
   } else {
    compscore++
    compscorepara.innerText = compscore;
    console.log("you lose");
    msg.innerText= "you lose!";
    msg.style.backgroundColor = "red";
   }
}

const playgame = (userchoice) => {
    console.log("user choice is = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice is =",compchoice);
    if(compchoice === userchoice) {
        draw();
    } else {
       let  userwin =  "true"
       if(userchoice === "rock") {
        userwin = compchoice === "paper" ? false : true;
       } else if( userchoice === "paper") {
        userwin = compchoice === "scissors" ? false : true;
       } else {
        userwin = compchoice === "rock" ? false : true;
       }
       showinner(userwin);
    }
}