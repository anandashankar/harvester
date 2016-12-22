<?php
 +	header("Access-Control-Allow-Origin: http://localhost:3000/api/harvesters/pressure");
 +	date_default_timezone_set("UTC");
 +	$now =  date("H:i:s", time());
 +	//Get random numbers
 +	$randomValueRetail = this.pressure;
 +	//Output
 +   	echo  "&label=".$now."&value=".$randomValueRetail;
 +?>