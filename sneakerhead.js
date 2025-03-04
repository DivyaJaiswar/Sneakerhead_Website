document.getElementById("loadingBody").addEventListener("load", showDate());
if (document.getElementById("jumpToTopButton"))
   document.getElementById("jumpToTopButton").addEventListener("click", jumpToTop);
if (document.getElementById("changeTableButton"))
   document.getElementById("changeTableButton").addEventListener("click", changeTable);

function showDate()
{
 	 var rightNow2 =  new Date();
	 var monthNumber = 0, dayOfMonth = 0, year = 0; 
	 var todaysDate = "";  
 	 monthNumber = rightNow2.getMonth() + 1;
    monthName=getMonthName(monthNumber);
	 dayOfMonth = rightNow2.getDate();
	 year = rightNow2.getFullYear();
	 // create a date with hyphens
	 todaysDate = monthName +' '+ dayOfMonth + ',' + year ;  
	 document.getElementById("currentDate").innerHTML = todaysDate;
}


function getMonthName(monthNumber)
{
	var monthName = "";
	/* look at the month number and assign the appropriate month name */
	switch(monthNumber)
	{
		case 1:  monthName="January"; break;
		case 2:  monthName="February"; break;	
		case 3:  monthName="March"; break;
		case 4:  monthName="April"; break;
		case 5:  monthName="May"; break;
		case 6:  monthName="June"; break;
		case 7:  monthName="July"; break;
		case 8:  monthName="August"; break;	
		case 9:  monthName="September"; break;
		case 10: monthName="October"; break;	
		case 11: monthName="November"; break;	
		case 12: monthName="December"; break;				
	}
	return(monthName);
}


function jumpToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function changeTable()
{
	document.getElementById("colorTable").style.color = "lightblue";
	document.getElementById("colorTable").style.borderWidth = "0.3em";
	document.getElementById("colorTable").style.borderStyle = "rigid";
	document.getElementById("colorTable").style.borderColor = "white";
}
