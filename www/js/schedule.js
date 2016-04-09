function roundToPennies(n)
{
 pennies = n * 100;

 pennies = Math.round(pennies);

 strPennies = "" + pennies;
 len = strPennies.length;

 return strPennies.substring(0, len - 2) + "." + strPennies.substring(len - 2, len);
}

function formatNumber (payment) {
        return payment.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

    }

function Monthly(principal, years, apr)
{
 rate = apr / 12;
 payments = years * 12;
 return roundToPennies(principal * rate / (1 - (1 / Math.pow(1 + rate, payments))));
}

function MonthlyAmortization(principal, years, apr)
{
 payments = years * 12;
 monthlyInterest = apr / 12;
 monthlyPayment = Monthly(principal, years, apr);
$(".schedule").empty();


var inter = [];
    var pay = [];
    var bal = [];

 var table = "<table>";

 for(i = 1; i <= payments; i++)
 {


   table += "<TR>";
   table += "<TD>" + i + "</TD>";

 interestPayment = principal * monthlyInterest;
   table += "<TD >" +localStorage.getItem("currency") + formatNumber(roundToPennies(interestPayment)) + "</TD>";

var interest = roundToPennies(interestPayment);

 principalPayment = monthlyPayment - interestPayment;
   table += "<TD >" +localStorage.getItem("currency") + formatNumber(roundToPennies(principalPayment)) + "</TD>";

     var payment = roundToPennies(principalPayment);

 principal -= principalPayment;
   table += "<TD >" +localStorage.getItem("currency") + formatNumber(roundToPennies(principal)) + "</TD>";

var balance = roundToPennies(principal);

   table += "</TR>";
//     '<span class = "curr">'+'$'+'</span>'
     inter[i] = interest;
     pay[i]=payment;
     bal[i]=balance;
 }
    localStorage.setItem("interest",inter);
    localStorage.setItem("balance",bal);
    localStorage.setItem("payment",pay);



  table += "</table>";

  $(".schedule").append(table);

}

var compute = function (form)
{
 if((form.principal.value.length != 0) &&
 (form.apr.value.length != 0) &&
 (form.years.value.length != 0))
 {
 var principal = eval(form.principal.value);
 apr = eval(form.apr.value) / 100.0;
 years = eval(form.years.value);

 if(years == 0.0)
 {
 alert(
 "You have no monthly payment, since the number of years is zero.");
 }
 else
 {
 MonthlyAmortization(principal, years, apr);
 }
 }
 else
 {
 alert("You must fill in all the fields.");
 }
}
