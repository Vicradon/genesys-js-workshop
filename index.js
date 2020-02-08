// These commands select an element from the html document 
const inputBox = document.querySelector('input');
const button = document.querySelector('button');
const ouputBox = document.querySelector('p');

// This array specifies vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// This function checks if there is a word in the box and analyses any word found
function analyseWord(event){
  const vowerObj = {
    a:0,
    e:0,
    i:0,
    o:0,
    u:0
  }
  if (inputBox.value){
    const word = inputBox.value.toLowerCase();
    const wordArr = word.split('');

    // This for loop loops through the array and checks if that element of the array is in the vowels array

    //If it is there, it increments the count of that vowel in the vowel object
    for (let i = 0; i < wordArr.length; i++){
      if (vowels.includes(wordArr[i])){
        vowerObj[String(wordArr[i])]++;
      }
    }

    let a = '';
    //This for loops loops through the vowels object and stores the data in a string variable 'a'

    //It eventually sends the whole string variable 'a' to the outputBox
    for (let i in vowerObj){ 
      a += `${i} - ${vowerObj[i]}<br />`;
    }
    ouputBox.innerHTML = a;
  }
  else {
    alert('please, input a value')
  }
}
/*
The function above uses
1. An object
2. A conditional (if else statement)
3. for loops
3. variables
*/

// An event listener is added to the button. This is where the power of JS comes in
button.addEventListener('click', analyseWord);