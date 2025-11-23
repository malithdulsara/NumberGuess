let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
function guess() {
  let guess = document.getElementById("txtNumber").value; 
  guess = parseInt(guess); 

  if (guess > 0 && guess <= 10) {

    if (guess < num) {
      Swal.fire({
        title: "Wrong!",
        text: "Too Low!",
        icon: "info",
      });

    } else if (guess > num) {
      Swal.fire({
        title: "Wrong!",
        text: "Too High!",
        icon: "info",
      });

    } else if(num==guess){
      Swal.fire({
        title: "Correct!",
        text: "You guessed the right number!",
        icon: "success",
      });
    }

  } else {
    Swal.fire({
      title: "Oops!",
      text: "Invalid Number! Enter between 1 - 10",
      icon: "warning",
    });
  }
}
