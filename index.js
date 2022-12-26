var readlineSync=require('readline-sync')

//creating question and answer objects
questionOne={
    question:"Where am I from? ",
    answer:"Ranchi"
}
questionTwo={
    question:"What is my age? ",
    answer:"25"
}
questionThree={
    question:"What is the name of my girlfriend? ",
    answer:"xxxx"
}
questionFour={
    question:"How many siblings do I have? ",
    answer:"2"
}
questionFive={
    question:"What is my favourite color? ",
    answer:"Black"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]
var score=0;

function play(question,answer)
{
    var userAnswer=readlineSync.question(question)

    if(userAnswer===answer)
    {
        console.log("Correct!!!");
        score++;
    }
    else{
        console.log("Wrong!!!")
    }
}

function game()
{
    for(var i=0;i<questions.length;i++)
    {
        var question=questions[i].question;
        var answer=questions[i].answer;

        play(question,answer);
    }
}

function welcome()
{
    var name=readlineSync.question("Please enter your name ;)  ")
    console.log("Hi "+name+"!!! let's see how well do you know me!")

}

function viewScore()
{
    console.log("Quiz finished!")
    if(score===5){
        console.log("Damn! you know me very well.")
    }
    else if(score===0)
    {
        console.log("You don't know me at all :) Lets meet for a cup of  coffee and know eachother ")
    }
    console.log("You scored "+score+" out of 5.")
}

welcome()
game()
viewScore()