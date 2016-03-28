function roundToPennies(n)
{
 pennies = n * 100;

 pennies = Math.round(pennies);

 strPennies = "" + pennies;
 len = strPennies.length;

 return strPennies.substring(0, len - 2) + "." + strPennies.substring(len - 2, len);
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
$(".hide").empty();



    
 var hide_table = "<table>";

 for(i = 1; i <= payments; i++)
 {
     

   hide_table += "<TR>";
   hide_table += "<TD>" + i + "</TD>";

 interestPayment = principal * monthlyInterest;
   hide_table += "<TD  class = 'interest'>"  + roundToPennies(interestPayment) + "</TD>";

 principalPayment = monthlyPayment - interestPayment;
   hide_table += "<TD class = 'pay_amount'>"  + roundToPennies(principalPayment) + "</TD>";

 principal -= principalPayment;
    hide_table += "<TD class = 'balance'>" + roundToPennies(principal) + "</TD>";

    hide_table += "</TR>";
    
 }
   

   hide_table += "</table>";

  $(".hide").append( hide_table);

}

function computeer(form)
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
