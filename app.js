window.onload = function () {
  document.getElementById("generateButton").onclick = generateRandomNumber;
};

function generateRandomNumber() {
  const minimum = document.getElementById("minimum").value;
  const maximum = document.getElementById("maximum").value;

  const randomNumber = Math.floor(
    Math.random() * (maximum - minimum) + minimum
  );
  updateDisplayNumber(randomNumber);
}

function updateDisplayNumber(randomNumber) {
  document.getElementById("result").innerHTML = randomNumber;
}

//how it works debbuger --> it stops the function until the debbuger line and it provides you the whole function or you could indicate brekpoints so you can see your code behaviour until the breakpoint you indicate.
//finish function
//value string = number
