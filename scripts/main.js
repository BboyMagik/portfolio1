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


function LargerNumber() {
    let num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the Second integer", "0");
    
    // num1 and num2 are variables. They represent the integers inputted by the user
    
    if(num1 > num2) { 
      alert ("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
      }   
    else if(num1 < num2) {
      alert ("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
      }                  
    else {
       alert ("The values "+ num1+ " and "+num2+ " are equal.");
      }
      }
    
    // The if else statement is used to identify which number is bigger between the two. If num1 is bigger 
    // than num2, the function largerNumber will return the alert that num 1 is bigger than num 2. If num2 is bigger 
    // than num1, the function largerNumber will return the alert that num 2 is bigger than num 1. If both values
    // are equal, then the function will return an alert that says the two values are equal.
    
    
    
    function SignofProduct() {
    let num3, num4, num5;
    num3 = window.prompt("Input the First integer");
    num4 = window.prompt("Input the Second integer");
    num5 = window.prompt("Input the Third integer");
    
    // I am declaring the variables num3, num4, and num5. These are the numbers that will be multiplied
    
    const product = num3 * num4 * num5
    
    // This variable product, represents the product of num3, num4, and num5.
    
    if(product > 0) {
        alert ("The sign of " + product + " is positive. \(+\)");
    } 
    else if(product < 0){
        alert ("The sign of " + product + " is negative \(-\)");
    }
    else {
        alert("Error. Please Do not leave any fields blank. And please do not input the value 0.")
    }
    }
    
    // This function takes three inputs of three numbers and then finds the sign of its product. First, the variable product,
    // calculates the product. From there, the if statement determines wether the product is larger than 0 or smaller.
    // If the product is greater than 0 its positive. If the product is lesser than 0, it is negative. 
    
    
    function ThreeNumberSort() {
    let numex1, numex2, numex3;
    numex1 = window.prompt("Input the First integer");
    numex2 = window.prompt("Input the Second integer");
    numex3 = window.prompt("Input the Third integer");
    
    // numex 1, numex2, and numex3, represent the three integers inputted by the user. 
    
    var allTogether = [numex1, numex2, numex3];
    alert (allTogether.sort(function(a, b){return a-b}));
    }
    // I made numex1, numex2, and numex3 into an array and used the sort function to sort the inputted values
    // in an ascending order. The function (function(a, b){return a-b}). This function defines an alternative sorting order. 
    // Along with the sort function, this functions is able to sort the numbers inputted by the user from least to 
    // Greatest as per instructions.
    
    function ForSumThrees() {
    let sum = 0;
    
    // I am declaring the variable sum, starting at 0 at the beginning of the function. During the loop, the value of
    // sum will drastically increase. 
    
    for (let i = 0; i < 1000; i +=3)
    {
      if (i % 3 === 0)
      {
      sum += i;
      }
    }
    
    console.log (sum);
    
    alert (sum);
    
    }
    
    // This function sets the variable sum to 0 to start with. Then, it adds a multiple of 3 every single time to the sum,
    // running the loop and building the sum by adding the multiples. This loop's stop condition is when the variable i is
    // bigger than 1000. Because at that point, we would be using multiples higher than 3 and we don't want that. Everytime
    // the variable i increases by 3, it adds the value to sum, building it up as the loop goes along. 
    
    
    function WhileSumThrees() {
        let sum = 0;
        let x = 0;
    
    // Like the for loop. I am declaring the sum 0 before the loop. But I am also declaring the variable x 0 at the 
    // beginning too.	
    
        while (x < 1000) {
            sum += x;
            x = x + 3;
        }
    
    // While x < 1000, this loops will continue to run, increasing the value of sum by x and increasing x by itself. Like so
    // sum increases by 3, then 6, then 9, and so on. But the variable x does not add to itself. It rather 
    // gets a reassignment. So the value of x will always go up 3 each time while increasing at a consistent rate like so 
    // (3, 6, 9, 12) while sum increases like (3, 9, 18, 30). Get it? When the statement x < 1000 becomes false, the loop
    // will stop and your sum will be given.
    
    
    console.log(sum);
    
    alert (sum);
    
    }
    
    
    
    function tenFour() {
    let x = 0;
    let fourAndTenCountMultiple = 0
    
        while (x < 100) {
        x = x + 1;
        if (x % 4 === 0 && x % 10 === 0) {
            fourAndTenCountMultiple += ( ('(') + x + (')') + " is a multiple of TenFour! ");
        }
        else if (x % 4 === 0) {
            fourAndTenCountMultiple += ( ('(') + x + (')') + " is a multiple of Four ");
        }
    
        else if (x % 10 === 0) {
            fourAndTenCountMultiple += ( ('(') + x + (')') + " is a multiple of Ten ");
        }
        else 
            fourAndTenCountMultiple += ( " | "+ x + " | ");
        }
        alert(fourAndTenCountMultiple);
    }
    
    // This function uses the x variable to count through integers 1 to 100. It uses a loop to do this. THis loop
    // stops working when x is bigger than 100. I use a while loops because a for loop would check for the conditional
    // statement first. The while loop runs the function then checks if the conditional statement is true. So I am 
    // able to check if 100 is a multiple of 4 and 10 which it is. Anyways, back to the main topic, the if and the 
    // if else statements check if x is equal to a multiple of 4 and 10, 4, and 10. If they evaluate to be true, then the 
    // loop will return a string TenFour, Four, or Ten, depending on which number it is a multiple of. If the number is not 
    // a multiple of either, then it will return as a normal number.  
    
    function tenFour2() {
    let x = 0;
    let fourAndTenCountMultiple = 0
    
        while (x < 100) {
        x = x + 1;
        if (x % 4 === 0 && x % 10 === 0) {
            fourAndTenCountMultiple += ("TenFour");
        }
        else if (x % 4 === 0) {
            fourAndTenCountMultiple += ("Four");
        }
    
        else if (x % 10 === 0) {
            fourAndTenCountMultiple += ("Ten");
        }
        else 
            fourAndTenCountMultiple += ( " | "+ x + " | ");
        }
        alert(fourAndTenCountMultiple);
    }
    
    // Same as the last function, just returns different statements. 
    
    
    
    
    
    
    
    
    
    
    function CenturyFromYear() {
    
    let year = window.prompt('Input the year');
    
    century = Math.floor(year/100) + 1;
    
    alert('The century of the year ' + year + ' is the ' + century + ' century');
    
    }
    
    // In this function, I use two variables, year and century. The user inputs year. The function takes the year, divides 
    // it by 100, then adds 1 to it and floors it to get the century of the year. For example, if you input the year 1897. 
    // the function will take 1897, divide it by 100 (18.97) it will then add 1 (19.97) and then math.floor it (19) to get
    // a whole number. Then, the function will return an alert, telling you what century it is.
    // The century of the year 1897 is the 19 century.
    
    
    
    
    
    function ThirdAngle() {
    let angle1, angle2;
    
    // I declare the variables angle1 and angle 2 here. 
    
    angle1 = window.prompt("Input the First Angle");
    angle2 = window.prompt("Input the Second Angle");
    
    const sum = Number(angle1) + Number(angle2);
    
    if (sum < 180 && sum > 0) {
        const answer = 180 - sum
        alert('The third angle is ' + answer + '°');
    }
    else {
        alert('Invalid. Enter two angles of a triangle.');
    }
    }
    
    // This function takes in two angles, and outputs the third angle of a triangle. I first prompt the user for two inputs. 
    // Then, I add them together to create the sum of the two angles. Then the if statement checks if the sum of the two angles
    // is smaller than 180 and bigger than 0. If both evaluate true, the if statement will run and the function will subtract 
    // 180 by the variable sum. You will get the value of the third angle. If one conditional statement returns negative,
    // the else statement will activate and you will get and alert saying that you didn't input the two angles of a triangle.
    
    
    
    
    
    function MagikEncryption () {
        let originalMessage = window.prompt("Input the message you would like to be encrypted.");
        let encryptMessage = "";
        let firstLetter = "";
        let secondLetter = "";
    
    // Here, I have the variables I will be using to encrypt a message. The user inputs originalMessage through a prompt.
    // The rest of the variables are to be decided...
    
    originalMessage = originalMessage.split(" ");
    
    // I split the originalMessage that the user inputted so I can seperate them into elements (words) 
    // For example. The message (I like hot dogs) Will be seperated into I, like, hot, dogs. Into seperate elements.
    
        for ( let i = 0; i < originalMessage.length; i = i + 1) {
    
    // This loop goes through each word and encrypts it.
    
        if (originalMessage[i].length > 2) {
    
    // This if statement checks if the word has more than two letter. If it does, it will perform the following:
    
            firstLetter = originalMessage[i][0];
    
    // Take the first letter of the word, and save it to variable firstLetter 
    
            secondLetter = originalMessage[i][1];
    
    // Take the second letter of the word, and save it to variable secondLetter 
    
            encryptMessage += (originalMessage[i]).slice(2);
    
    // Takes the word, and removes the first two letters, saving the remaing letters to encryptMessage.
    // Eg. Noodles would become odles
    
            encryptMessage += firstLetter + "oG" + secondLetter + " ";
    
    // Then, we will add to encrypt message, the first letter, the letters oG, and then the second letter.
    // All together it looks like this: Hello = lloHoGe
    
        }
    
    // These else if statements are pretty similar. If the word is === to a, i, A, or I, it will turn it into a code.
    // Because a and i are the only one letter words in the english language, I wanted to put a special code for each 
    // of them. 
    
        else if (originalMessage[i] === "a") {
            encryptMessage += '0n6kd8f '
        }
        else if (originalMessage[i] === "i") {
            encryptMessage += '1n6kd8f '
        }
    
        else if (originalMessage[i] === "A") {
            encryptMessage += '2n6kd8f '
        }
        else if (originalMessage[i] === "I") {
            encryptMessage += '3n6kd8f '
        }
    
        else {
    
    // This else function is for the words that are two letters long. It takes the first letter, adds the code "3Xy5r",
    // And then adds the second letter. For examples: my = m3Xy5ry
    
            encryptMessage += (originalMessage[i][0]) + "3Xy5r" + (originalMessage[i][1]) + " ";
        }
    }
        alert ("Your message: " + originalMessage + " translates to the encrypted message: " + encryptMessage);
    
    // Alert returns the message you entered, and the ecncrypted form of your message.
    
    }
    
    
    
    
    
    function MagikDecryption () {
        let encryptedMessage = window.prompt("Input the message you would like to be encrypted.");
        let decryptedMessage = "";
        let lastPart = "";
        let getFirstTwoLetters = "";
    
    // I declare the variables i'll be using in this function here. encryptedMessage is a prompt that the user inputs. The 
    // rest are to be decided...
    
        encryptedMessage = encryptedMessage.split(" ");
        
    // I split the encryptedMessage that the user inputted so I can seperate them into elements (words) 
    // For example. The message (3n6kd8f keloGi thoGo gsdoGo) Will be seperated into 
    // 3n6kd8f, keloGi, thoGo, gsdoGo . Into seperate elements. 
    
        for ( let i = 0; i < encryptedMessage.length; i = i + 1) {
    
    // This loop goes through each word and decrypts it
    
        encryptedMessage[i] = encryptedMessage[i].replace(/3Xy5r/g, ""); 
        encryptedMessage[i] = encryptedMessage[i].replace(/oG/g, ""); 
    
    // Everytime the loop goes through an iteration, it first removes the codewords from the elements to help with the
    // decryption. For example: lloHoGe turns into lloHe (oG was removed per the above code) [Hello = lloHoGe]
    
        if (encryptedMessage[i] === "0n6kd8f") {
            
            decryptedMessage += 'a '
        }
        else if (encryptedMessage[i] === "1n6kd8f") {
            
            decryptedMessage += 'i '
        }
    
        else if (encryptedMessage[i] === "2n6kd8f") {
            
            decryptedMessage += 'A '
        }
        else if (encryptedMessage[i] === "3n6kd8f") {
            
            decryptedMessage += 'I '
        }
    
    // These else if statements are very similar. They both check for the codes above. Each code above represents a one 
    // letter word. For example, if the user inputted 1n6kd8f, the else if statement would check for that value and 
    // if it was a match, it would return the word i. ( 1n6kd8f = i )
    
        else if (encryptedMessage[i].length > 2) {
    
            // This else if function is for the words that are longer than two letters. 
            
                getFirstTwoLetters = encryptedMessage[i].slice(-2);
    
                // First, I take the last two letters and save them to the variable: getFirstTwoLetters
    
                lastPart = encryptedMessage[i].slice(0, -2);
    
                // Then, I slice the encrypted message by removing the last two letters and saving the rest to variable: 
                // lastPart.
      
                decryptedMessage += getFirstTwoLetters + lastPart + " ";
    
                // Then, this adds it all together. 
                // Eg. lloHe turns into decrypted message += He(getFirstTwoLetters) + llo(lastPart) = Hello
    
            } 
    
        else if (encryptedMessage[i].length <= 2){
    
            // This is for the two letter words. Since at the beginning we remove the 3Xy5r code from each two letter word,
            // We are just left with the two letter words. Eg. a3Xy5rm is the word at the beginning. When the loop goes through it,
            // It will remove the 3Xy5r code first so we are left with am. This else if function just adds the word am to the 
            // decryptedMessage. 
       
            decryptedMessage += encryptedMessage[i] + " ";
    
        }
        }
        alert ("Your encrypted message: (" + encryptedMessage + ") means: " + decryptedMessage);
    
    // Alert returns the encrypted message you entered, and the decrypted form of your message.
    
    }
    