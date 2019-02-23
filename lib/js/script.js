var d = new Date();

var myVar = setInterval(myTimer, 1000);

//////// Setting the time of the Clcok with this function
document.getElementById("hours").innerHTML = d.getHours();
document.getElementById("minutes").innerHTML = ": " + d.getMinutes();
document.getElementById("seconds").innerHTML = ": " + d.getSeconds();

function myTimer() {
  var d = new Date();
 	
  document.getElementById("minutes").innerHTML = ": " + d.getMinutes();
  document.getElementById("seconds").innerHTML = ": " + d.getSeconds();
}

$(document).ready(function(){
    $('input[name="hours"]').change(function(){
        if($('#hours12').prop('checked')){
        	if($("#hours").text() > 12 ){
        		$("#hours").text(d.getHours()-12);
        		$("#day").text("PM");
    		} else if ( $("#hours").text() == 12){
    			$("#day").text("PM");
    		} else{
    			$("#day").text("AM");
    		}
        }else{
            $("#hours").text(d.getHours());
            $("#day").text("");        }
    });
});

$(document).ready(function(){
    $('input[name="seconds"]').change(function(){
        if($('#hideSeconds').prop('checked')){
            $("#seconds").hide();
        }else{
            $("#seconds").show();
        }
    });
});

/// Set the time button click
$("#setTime").click(function(){
	var a = prompt("Enter the Hours");
	var b = prompt("Enter the Minutes");
	var c = prompt("Enter the Seconds");

	if(a == null){
		$("#hours").text(d.getHours());
	}
	else{
	d.setHours(a);
	d.setMinutes(b);
	d.setSeconds(c);

	$("#hours").text(d.getHours());
	$("#minutes").text(d.getMinutes());
	$("#seconds").text(d.getSeconds());

	if(a == null){
		$("#hours").text(d.getHours());
	}}
})


$("#showSecond").click(function(){
	$("#showSeconds").attr('checked', true);
})


function timeSetting(){
	
}