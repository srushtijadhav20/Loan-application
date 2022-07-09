
//Created / Generates the captcha function
function DrawCaptcha() {
  var a = Math.ceil(Math.random() * 10) + "";
  var b = Math.ceil(Math.random() * 10) + "";
  var c = Math.ceil(Math.random() * 10) + "";
  var d = Math.ceil(Math.random() * 10) + "";
  var e = Math.ceil(Math.random() * 10) + "";
  var code = a + " " + b + " " + " " + c + " " + d + " " + e;
  document.getElementById("txtCaptcha").value = code;
}

// Validate the Entered input aganist the generated security code function

function ValidCaptcha() {
  var str1 = removeSpaces(document.getElementById("txtCaptcha").value);
  var str2 = removeSpaces(document.getElementById("txtInput").value);
    if (str1 == str2)
     return true;
  }
 

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(" ").join("");
}





//convert loan into word
function convertnum() {
  document.getElementById("words").innerHTML = toWords(
    document.getElementById("loan").value
  );
}

function toWords(num) {
  var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if ((num = num.toString()).length >= 9)
    return "Loan amount must be 9 digit only";
  n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  console.log(n);
  if (!n) return;
  var str = "";
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
        "only "
      : "only";
  return str == "only" ? "" : str.toUpperCase();
}

const email = document.getElementById("email");
const emailID = document.getElementById("emailID");
//localstorage for email
function fun1() {
  const key1 = 1;
  const value1 = email.value;

  if (key1 && value1) {
    localStorage.setItem(key1, value1);
    location.reload();
  }
}
for (let i = 1; i == 1; i++) {
  const key1 = localStorage.key(i);
  const value1 = localStorage.getItem(key1);
  emailID.innerHTML += ` ${value1}<br />`;
}

//localstorage for name
function fun2() {
  const key2 = 2;
  const value2 = fname.value;

  if (key2 && value2) {
    localStorage.setItem(key2, value2);
    location.reload();
  }
}
let j;
const key2 = localStorage.key(j);
const value2 = localStorage.getItem(key2);

fullname.innerHTML += ` ${value2}<br />`;

//validation
function validate() {
  //Validation for Name
  
  let name = /^[a-zA-Z]+(\w+\s+\w+ ?)(?!.{4,})$/;
  if (!name.test(document.getElementById("fname").value)) {
    alert("Name is invalid");
    return false;
  }
  
//Email Validation
let validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!validemail.test(document.getElementById("email").value)) {
    alert("Email is invalid");
    return false;
  }
//PAN Validation
let validpan = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  if (!validpan.test(document.getElementById("pan").value)) {
    alert("PAN is invalid");
    return false;
  }
   


  

  //Loan Amount Validation
  let validloan = /^\d{9}$/;
  if (!validloan.test(document.getElementById("loan").value)) {
  alert("Loan amount  is invalid");
  
  }else{
    alert("Loan Application done successfully");
    window.location.href = "Thankyou.html";
  }
  
 
 
 
}
 


