//Website Assignment 4 Buttons (Seperate from assignment 5 since I still need to get marked on assignment 4)
function message1() {
 alert ('Welcome to the domain of Jie Shen. All information required to answer all these questions will be hinted throughout my website so look carefully. Reach assessment number 9 to unlock my favourite riddle. If you are Ms. Pais, feel free to look at my code to find the answers xDD. Do note that I dont know how to change when alert buttons appear so I have to trust that you wont skip to the last button right away. Please play fairly to experience the intended game and I wish anyone attempting to complete this treacherous quest best of luck!')
}

function message2() {
    let password
        password = prompt('What is this website owners first name?')
        if (password==='Jie') {
            alert ('Correct! Please proceed to the next button! Fun fact: My favourite food are dumplings since dumplings are meant to be eaten during special occasions and as such, theyre usually made and eaten with the entire family. On top of often being associated with happiness, dumplings also have plenty of room for customization as you can choose what filling you would like and can cook it in a variety of different ways. It has many nutrients as theres carbs, proteins, vegetables and whatever else you like to add which makes it a healthy, bite sized meal where every bite allows you to taste a blend of all the ingredients');
        }
            else {
                alert ('Sorry but that is not the correct answer. Feel free to try as many times as you like. All info required to complete all these questions are within the website so please look around for the answers! Do note that all first letters need to be capital');
        }
    }

function message3() {
    alert ('I see you made it past the first question. Dont worry if you found it too easy since questions will get harder from now on and will require you to actually browse my website. Tip: Its ok to take breaks in between these obstacles to browse the website or simply to grab a snack or do something else!');
}

function message4() {
    let password
        password = prompt('I love basketball but it has lead to me wasting way too much time focusing on the NBA and playing ball especially when procrastinating homework. isnt it ironic? Especially since all NBA players are super driven and work hard everyday to improve. Who is my favourite basketball player. Hint: I admire this player for their basketball skills, personality and drive to get better. Enter first and last names here');
        if (password==='Russell Westbrook') {
        alert ('Correct! Good eye! I mentioned how Westbrook was my favourite basketball player in my role model section! Please proceed to the next button for more.');
        }
        else {
            alert ('Sorry but that is not the correct answer. Feel free to try as many times as you like. Most information is present in the website itself so keep looking! You can do it!');
        }
    }

function message5() {
    alert ('Congratulations! You are more than halfway there already! A hint for the next question is: Dont look only towards the website. The answer may lay in one of the alerts given after completing a question!');
}

function message6() {
    let password
        password = prompt('Almost there! Just a couple more buttons till you reach my favourite riddle! This buttons question is: What is my favourite food? Feel free to use the inspect element to check for answers within answers you may have missed. Hint: its thought to have originated from China and is very popular around the world!');
        if (password==="Dumplings") {
        alert ('Correct! Please proceed to the next button! Only one more question till the riddle reveal!')
        }
        else {
            alert ('Sorry but that is not the correct answer. Feel free to try as many times as you like. Most information is present in the website itself so keep looking! You can do it!');
        }
    }

function message7() {
    alert ('Congratulations on making it so far! You got so many correct already so take it all the way!');
}

function message8() {
    let password
        password = prompt('Wow great job! This is the last question! You have done great so far so Im sure you will have no trouble with this one either! What occupation would I like to pursue in the future?');
        if (password==="Software Engineer") {
        alert ('Correct! Congratulations on completing all the questions and please enjoy the riddle you will find in the next and final button! Thank you for playing and please share this website if you liked it!');
        }
        else {
            alert ('So close but not quite! Try a couple more times! Im sure you can do it! Remember capitalization and spelling matter!');
        }
    }

function message9() {
    alert ('Since you did such a good job, I would like to reward you with not one but 2 riddles! I find them hilarious and I hope you like them too! Riddle number one: What Type of Coat is Always Wet When You Put it On? Answer: A coat of paint! Riddle number 2: What Makes YOU Young? Answer: NG! xDD I hope you enjoyed and thank you once more for playing!');
}

//Javascript Exercise #1 Output Larger of 2 Sums
function LargerNumber() {
    let Num1, Num2;
    let Num1 = prompt("Please enter your first integer");
    let Num2 = prompt("Please enter your second integer");
    let biggerNum = "";

    //Here I tried to clarify that  Num1 and Num2 will be my valuables and that the user will be asked to insert ther integer upon clicking this button
    
    if (Num1 == Num2){
        biggerNum = "Both are Equal";
    }
    document.getElementById("riddle-button1").innerHTML = biggerNum

    else if (Num1 > Num2){
        biggerNum = Num1 ;
    }
    document.getElementById("riddle-button1").innerHTML = biggerNum

    else if (Num1 < Num2){
        biggerNum = Num2;
    }
    document.getElementById("riddle-button1").innerHTML = biggerNum

    else {
        biggerNum = "The characters you entered are not integers. Please try again";
    }
;    document.getElementById("riddle-button1").innerHTML = biggerNum
    //Here I accounted for all the different potential outcomes and told the computer what to send in case a similar situation occured. If the characters entered didn't fit any rules, the user may have entered a letter or another unuseable character
}

//Javascript Exercise #2 Finding the sign of the product from 3 numbers {
    let num1, num2, num3;
    let num1 = prompt ("Please enter your first integer");
    let num2 = prompt ("Please enter your second integer");
    let num3 = prompt ("your third integer");
    let plusminus = "";
    let num1 * num2 * num3 = product;
    //Here I'm trying to say that num1, num2 and num3 will be my variables and the 3 integers that will be multiplied to find the sign
    
()num1 * num2 * num3 if product == 0 {
        plusminus =  "Your product is neutral";
    }

    else if (num1 * num2 * num3 < 0) {
        plusminus = "Your product is negative";
    }

    else if (num1 * num2 * num3 == 0) {
        plusminus = "Your product is neutral"
    }

    else {
        signofproducts = "please enter a valid number"
    }
    document.getgetElementById("riddle-button2").innerHTML = signofproducts;
    //Here I tried to account for all possible outcomes and planning an alert for what would happen if such event were to occur. If the user entered any amounts of 0 in a slot, the outcome would result in a 0 so in order to prevent a lot of invalids come up, I made a "neutral" alert which told the useer their product isn't positive or negative
}

//Javascript Exercise #3 Sorting 3 Integers
function ThreeNumberSort () {
    let var1, var2, var3;
    let var1 = prompt ("Please enter your first integer")
    let var2 = prompt ("Please enter your second integer")
    let var3 = prompt ("Please enter your third integer")
    //With this code, I meant to tell the system that I want var1, var2 and var3 to represent the 3 integers that will be sorted.
    //If the user’s first integer is the largest, followed by second and the third is the least
    if (var1 > var2 && var2 > var3) {
        alert ('Your first integer is the largest, followed by the second and the third is the least of the three');
    }
    //If the user’s first integer is the largest, followed by third and the second is the least
    else if (var1 > var3 && var3 > var2) {
        alert ('Your first integer is the largest, followed by the third and the second is the least of the three');
    }
    //If the user’s second integer is the largest, followed by first and the third is the least
    else if (var2 > var1 && var1 > var3) {
        alert ('Your second integer is the largest, followed by the first and the third is the least of the three');
    }
    //If the user’s second integer is the largest, followed by third and the second is the least
    else if (var2 > var3 && var3 > var1) {
        alert ('Your second integer is the largest, followed by the third and the first is the least of the three');
    }
    //If the user’s third integer is the largest, followed by first and the second is the least
    else if (var3 > var1 && var1 > var2) {
        alert ('Your third integer is the largest, followed by the first and the second is the least of the three');
    //If the user’s third integer is the largest, followed by second and the first is the least
    else if (var3 > var2 && var2 > var1) {
        alert ('Your third integer is the largest, followed by the second and the first is the least of the three');
    }
        else {
    //I'm not too sure how to perform this task using loops so I mapped out all possible pathways and made an alert to demonstrate what the answer would be based on the variables user's entered
}

//Javascript Exercise #4 Adding all multiples of 3 under 1000 using loops
function ForSumThrees () {
    let forsumthreesunder1000 = 0
    //this is saying that the initial sum is 0
    for (let x = 0; x < 1000; x +=3) {
    }
    if (x % 3 === 0) {
    }
    forsumthreesunder1000 += x;
        alert (forsumthreesunder1000);
    //This allows the my variable (forsumthreesunder1000) increase exponentially as the multiple we're adding evertime is increasing. It also means that whenever "x" is increased by 3, the same number gets translated to the variable.
}

//Javascript Exercise #5 Adding all multiples of 3 under 1000 using while loops
function WhileSumThrees () {
    let forsumthreesunder1000 = 0
    let x = 0
    while (x < 1000) {
		forsumthreesunder1000 += x;
		x = x + 3;
            alert (forsumthreesunder1000)
    }
    //Whereas in the previous loop the variable (forsumthreesunder1000) increased by 3 every time "x" increased by three, in this loop "x" still increases by 3 and forsumthreeunder1000 increases by "x" so there's exponential growth
}

//Javascript Exercise #6 Counting from 1-100 but subbing multiples of 4, 10 and both 4 and 10 with the words Four, Ten and Fourten respectively
function tenFour () {
    let x = 0 
    while (x < 100) 
        x = x + 1;
    if (x % 4 === 0 && x % 10 === 0) {
        return ('TenFour')
    } 
    else if (x % 4 === 0) {
        return ('Four')
    }
    else if (x % 10 === 0) {
        return ('Ten')
    }
}

//Javascript Exercise #7 Determining the Century based on the year entered
function CenturyFromYear () {
    let year = prompt ('Please insert your year here')
    let century = (year % 100) + 1
        alert (century)
}

//Javascript Exercise #8 Finding the 3rd angle of a triangle using 2 existing angles
function ThirdAngle () {
    let angleOne, angleTwo;
    angleOne = prompt ('Please enter your first angle here')
    angleTwo = prompt ('Please enter your second angle here')
    sum = angleOne + angleTwo
    if (sum < 180 && sum > 0) {
        x = 180 - sum
        alert (x)
    else 
        alert ('Invalid characters Please try again')
}