
function myFunction() {
	var txtvalue = document.getElementById("txtNumbers").value;

	var FinalString='';
	for (var i=1;i<=txtvalue;i++)
	{

		if (i%5==0 && i%3==0) {

          FinalString = FinalString + "FizzBuzz" + "<br>";
      	}
		else if(i%3==0) 
		{
          FinalString = FinalString + "Fizz" + "<br>";
      	} 
      	else if(i%5==0)
      	{
          FinalString = FinalString + "Buzz"+ "<br>";
      	} 
      else 
      	{
      		FinalString = FinalString + i+ "<br>";
           
		}
	}
	document.getElementById('pResults').innerHTML=FinalString;
	document.getElementById("txtNumbers").value = "";
}