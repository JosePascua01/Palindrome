//Initialize all
const checkButton = document.getElementById('check-btn');

const checkPalindrome = () => {
  const result = document.getElementById('result');
  const inputText = document.getElementById('text-input');

  if(inputText.value === ""){
    alert("Please input a value");
  } else{
    console.log(inputText.value.split(" "));
  }
}

checkButton.addEventListener('click', checkPalindrome);


