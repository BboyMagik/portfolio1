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
    let Num1 = prompt("Please enter your first integer");
    let Num2 = prompt("Please enter your second integer");
    let biggerNum = "";

    //Here I tried to clarify that  Num1 and Num2 will be my valuables and that the user will be asked to insert ther integer upon clicking this button
    
    if (Num1 == Num2){
        biggerNum = "Both are Equal";
    }

    else if (Num1 > Num2){
        biggerNum = Num1;
    }

    else if (Num1 < Num2){
        biggerNum = Num2;
    }

    else {
        biggerNum = "The characters you entered are not integers. Please try again";
    }
    document.getElementById("riddle-button1").innerHTML = biggerNum
    //Here I accounted for all the different potential outcomes and told the computer what to send in case a similar situation occured. If the characters entered didn't fit any rules, the user may have entered a letter or another unuseable character
}

//Javascript Exercise #2 Finding the sign of the product from 3 numbers {
function SignofProduct() {
    let num1 = prompt ("Please enter your first integer");
    let num2 = prompt ("Please enter your second integer");
    let num3 = prompt ("your third integer");
    let plusminus = "";
    let product = num1 * num2 * num3;
    if (product == 0) {
        plusminus =  "Your product is neutral";
    }
        
    else if (product < 0) {
        plusminus = "Your product is negative";
    }

    else if (product > 0) {
        plusminus = "Your product is positive";
    }
        
    else {
        plusminus = "please enter a valid number"
    }

    document.getElementById("riddle-button2").innerHTML = plusminus;
}
    
//Javascript Exercise #3 Sorting 3 Integers
function ThreeNumberSort () {
    let output = ""
    let var1 = parseInt(prompt ("Please enter your first integer"));
    let var2 = parseInt(prompt ("Please enter your second integer"));
    let var3 = parseInt(prompt ("Please enter your third integer"));
    //With this code, I meant to tell the system that I want var1, var2 and var3 to represent the 3 integers that will be sorted.
    //If the user’s first integer is the largest, followed by second and the third is the least
    if (var1 > var2 && var2 > var3) {
        output = ('Your first integer is the largest, followed by the second and the third is the least of the three');
    }
    //If the user’s first integer is the largest, followed by third and the second is the least
    else if (var1 > var3 && var3 > var2) {
        output = ('Your first integer is the largest, followed by the third and the second is the least of the three');
    }
    //If the user’s second integer is the largest, followed by first and the third is the least
    else if (var2 > var1 && var1 > var3) {
        output = ('Your second integer is the largest, followed by the first and the third is the least of the three');
    }
    //If the user’s second integer is the largest, followed by third and the second is the least
    else if (var2 > var3 && var3 > var1) {
        output = ('Your second integer is the largest, followed by the third and the first is the least of the three');
    }
    //If the user’s third integer is the largest, followed by first and the second is the least
    else if (var3 > var1 && var1 > var2) {
        output = ('Your third integer is the largest, followed by the first and the second is the least of the three');
    //If the user’s third integer is the largest, followed by second and the first is the least
    }
    else if (var3 > var2 && var2 > var1) {
        output = ('Your third integer is the largest, followed by the second and the first is the least of the three');
    }
    else {
        output = ('Invalid character unable to process');
    }
    document.getElementById("riddle-button3").innerHTML = output;
    //I'm not too sure how to perform this task using loops so I mapped out all possible pathways and made an alert to demonstrate what the answer would be based on the variables user's entered
}

//Javascript Exercise #4 Adding all multiples of 3 under 1000 using loops
function ForSumThrees() {
    let forsumthreesunder1000 = 0
    //this is saying that the total sum is 0 and the variable I'll be using to represent the sum is "forsumthreesunder1000"
    for (let x = 0; x < 1000; x +=3) {
    }
    
    if (x % 3 === 0) {
    }
    //here I am stating that the initial sum starts at a value of 0 and adds the multiple of 3 as everytime it's increased by a multiple of 3 as long as it's under 1000
    forsumthreesunder1000 += x;
        output = (forsumthreesunder1000);
    document.getElementById("riddle-button4").innerHTML = output;
    //This allows the my variable (forsumthreesunder1000) increase exponentially as the multiple we're adding evertime is increasing. It also means that whenever "x" is increased by 3, the same number gets translated to the variable.
}

//Javascript Exercise #5 Adding all multiples of 3 under 1000 using while loops
function WhileSumThrees () {
    let whilesumthreesunder1000 = 0
    let x = 0
    //I'll be using the same "x" to represent the sum added to the total sum "whilesumthreesunder1000"
    while (x < 1000) {
		whilesumthreesunder1000 += x;
		x = x + 3;
            output = (forsumthreesunder1000);
    //here I'm trying to say that x will increase by 3 every time and the loop will keep running until x is bigger or equal to 1000
    }
    document.getElementById("riddle-button5").innerHTML = output;
    //Whereas in the previous loop the variable (forsumthreesunder1000) increased by 3 every time "x" increased by three, in this loop "x" still increases by 3 and forsumthreeunder1000 increases by "x" so there's exponential growth
}

//Javascript Exercise #6 Counting from 1-100 but subbing multiples of 4, 10 and both 4 and 10 with the words Four, Ten and Fourten respectively
function tenFour () {
    let numBer = prompt ('Please enter your number under 100')
    //So here my goal is to ask the user to enter a number from the prompt.
    while (numBer < 100) 
    if (numBer % 4 === 0 && numBer % 10 === 0) {
        return ('TenFour')
    } 
    else if (numBer % 4 === 0) {
        return ('Four')
    }
    else if (numBer % 10 === 0) {
        return ('Ten')
    }
    else if (numBer % 4 !== 0 && numBer % 100 !==0)
        return (numBer)
    else {
        output = ('Invalid character unable to process');
    }
    //So here what I'm trying to say that since this function is supposed to identify which numebrs from 1-100 are multiples of four, ten, four-ten, none of the above or if it's an invalid number. Here, if the user entered the number 11. I wrote (numBer % 4 !== 0 && numBer % 100 !==0) which means that the function will divide 11 by 4, then 11 by 10 and if both are invalid, it'll return the origional number like counting.
    document.getElementById("riddle-button6").innerHTML = output;
}

//Javascript Exercise #7 Determining the Century based on the year entered
function CenturyFromYear () {
    let year = prompt ('Please insert your year here')
    let century = (year/100) + 1
        alert (century)
}

//Javascript Exercise #8 Finding the 3rd angle of a triangle using 2 existing angles
function ThirdAngle () {
    let angleOne, angleTwo;
    let sum = angleOne + angleTwo;
    let x = 180 - sum;
    angleOne = prompt ('Please enter your first angle here')
    angleTwo = prompt ('Please enter your second angle here')
    sum = angleOne + angleTwo
    if (sum < 180 && sum > 0) {
        x = 180 - sum
        alert (x)
    }
    else if (sum > 180) {
        alert ('Invalid characters Please try again')
    }
    else if (sum < 0) {
        alert ('Invalid characters Please try again')
    }
    document.getElementById("riddle-button8").innerHTML = output;
}
//So, with this function, I'm basically stating that the two variables I'll be using are angleOne and angleTwo. Then I stated that I want to add these two variables. This third, new variable will be called sum. I then say if sum is less than 180 and it's positive, I'll subtract 180 by our sum to find the third angle. If the sum is over 180 or negative or anything else, I want to tell them that their entered integers aren't compatible.

//Javascript Encoder
function MagikEncryption () {
    let magikTextE = prompt ('Enter your text here')
    let scramblescramble = "";
    let savedLetter1biggerthan3 = "";
    let savedLetter2biggerthan3 = "";
    let savedLetter3biggerthan3 = "";
    let savedLetter1equalto3 = "";
    let savedLetter2equalto3 = "";
    let savedLetter1equalto2 = "";
    let savedLetter1equalto1 = "";
    //Here, I just stated the variables I'll be using "scramblescramble" representing the encoded message and "savedLetter1" and "saveLetter2" representing the 1st and 2nd letters the user inputted. I also made magikTextE (variable for origional text) prompt the user to enter their word(s). I close magikTextE as my variable since magik is my nickname, it's a text and the e stands for encode.
    //After working on decoding I had what I thought was a great idea changing each function's savedLetter variable into different ones to make decoding process easier.
    magikTextE = magikTextE.split (" ");
    //Here I'm saying that the origional user entered text will be split at every space (" "). I think this would be splitting the origional user entered text into elements and creating a list.
    for (let x = 0; x < magikTextE.length; x = x + 1) {
        if (magikTextE[x].length > 3) {
            savedLetter1biggerthan3 = magikTextE[x][0];
            savedLetter2biggerthan3 = magikTextE[x][1];
            savedLetter3biggerthan3 = magikTextE[x][2];
            scramblescramble += (magikTextE[x]).slice(3);
            scramblescramble += savedLetter1biggerthan3 + "!j2qs" + savedLetter3biggerthan3 + savedLetter2biggerthan3 + " ";
            alert (magikTextE + "is" + scramblescramble + "in magik")
        }
        //Here, I tried clarifying that my goal is to check every word/element represented by the variable "x". Next, I stated that if the user entered text is above 3 digits, I'd run the processes beneath it. The first of these processes is that I'll save the first letter in the user's text with the variable "savedLetter1", the 2nd one "savedLetter2" and the third one "savedLetter3". Next, I would slice off the first 3 letters and save the remaining integers in the variable "scramblescramble". Finally, what I did was adding the saved integers in "scramblescramble" with the integer in "savedLetter1", then added "!j2qs" to make it look messy, then added the integer in "savedLetter3" and finally the integer in "savedLetter2". For example, my favourite word "indubitably" would be changed into ubitablyi!j2qsdn. This doesn't look as strange with longer words but with 5-6 letter words, it'll be nearly impossible to tell without having inside knowledge!
        else if (magikTextE[x].length === 3) {
            savedLetter1equalto3 = magikTextE[x][0];
            savedLetter2equalto3 = magikTextE[x][1];
            scramblescramble += (magikTextE[x]).slice(2);
            scramblescramble += "wf2" + savedLetter2equalto3 + "pk3a5" + savedLetter1equalto3 + " ";
            alert (magikTextE + "is" + scramblescramble + "in magik")
        //I did the same thing as above but with less variables for if the user entered something with 3 integers.
        }
        else if (magikTextE[x].length === 2) {
            savedLetter1equalto2 = magikTextE[x][0];
            scramblescramble += (magikTextE[x]).slice(1);
            scramblescramble += savedLetter1equalto2 + "D12" + " ";
            alert (magikTextE + "is" + scramblescramble + "in magik")
        }
        //Here I accounted for if the user entered something with 2 variables
        else {
            savedLetter1equalto1 = (magikTextE[x][0])
            savedLetter1equalto1 += "hIf5reia?1" + " ";
            alert (magikTextE + "is" + scramblescramble + "in magik")
        }
    }
    //Since the user's entered thing wasn't more than 3 digits, 3 digits or 2 digits, I'd say it's safe to assume it's only one digit. In that case, I just saves their one digit in the variable "savedLetter1". Finally, I added the saved integer now in "savedLetter1" to hIf5reia?1.
    document.getElementById("encrypt-button").innerHTML
}

//Javascript Decoder
function MagikDecryption () {
    let magikTextE = document.getElementById("encrypt-button").innerHTML
    let magikTextD = prompt ('Enter your magik code here');
    let getLetter1 = "";
    let getLetter2 = "";
    let getLetter3 = "";
    let getLetter12 = "";
    let getLetter13 = "";
    let getLetter21 = "";
    let getLetter23 = "";
    let getLetter31 = "";
    let getLetter32 = "";
    let getLetter123 = "";
    let getLetter132 = "";
    let getLetter213 = "";
    let getLetter231 = "";
    let getLetter312 = "";
    let getLetter321 = "";
    let getmostletters = ""; 
    //Here I stated the variables I'll be using with magikTextD representing decryption. I am kinda dumb so the only way I thought of to decrease the size and make my function cleaner looking in general down the raod was to map all possible combinations of my 3 integers. I won't use all of them ofc but just in case.
    magikTextD = magikTextD.split (" ");
    //Here I'm spliting the code into elements to create a string.
    for ( let x = 0; x < magikTextE.length; x = x + 1) {
        magikText[x] = [x].replace("!j2qs", ""); 
        magikText[x] = magikText[x].replace("wf2", "");
        magikText[x] = magikText[x].replace("pk3a5", ""); 
        magikText[x] = magikText[x].replace("D12", ""); 
        magikText[x] = magikText[x].replace("hIf5reia?1", "");
    }
    //My goal here was to remove all my useless integers that don't signal the user's word.I want to leave letters only from their word
    if (magikTextE[x].length > 3) {
        getLetter132 += savedLetter1biggerthan3 + savedLetter2biggerthan3 + savedLetter3biggerthan3;
    //my goal here was to make get letter 132 now contiain the first 3 letters of the user's entered word
        getmostletters += (magikTextE[x]).slice();
    //Since I already copied organised the first 3 letters and they're not in the code anymore, the rest of the integers in the code should all be in order starting from the user's 4th integer. Here, I'm trying to slive everything and save it to "getmostletters"
        magikTextD = getLetter132 + getmostletters;
    //Since "getLetter132" has our  first 3 letters and "getmostletters" has the rest, we should be ok just combining them. The final variable containing the whole word will be "magikTextD"
    }
    else if (magikTextE[x].length === 3) {
        getLetter21 += savedLetter1equalto3 + savedLetter2equalto3;
        getmostletters += (magikTextE[x]).slice();
        magikTextD = getLetter21 + getmostletters;
    }
    else if (magikTextE[x].length === 2) {
        getLetter1 += savedLetter1equalto2;
        getmostletters += (magikTextE[x]).slice();
        magikTextD = getLetter1 + getmostletters;
    }
    else {
        magikTextD += (magikTextE[x]).slice(0);
    //Since the integers I added to make the code look more anonymous was already removed, there should only be one letter here. So I sliced it and put it into "magikTextD"
    }
    alert ("Your Message is" + magikTextD)
    //After doing that process, I had another idea that since magikTextE was how I saved the user's message, I could cheat by having it displayed here again but I guess there's no shortcuts 
}