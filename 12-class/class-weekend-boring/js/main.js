document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  //case sensitive comparisons
  if (day === "tuesday" || day === "thursday") {
    alert("Class");
  } else if (day === "saturday" || day === "sunday") {
    alert("Weekend");
  } else {
    alert("Boring Day");
  }
}
