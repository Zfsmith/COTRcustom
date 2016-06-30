<?php

//variable for location of files
$directory = 'Files';

//look for files in directory
if ($handle = opendir($directory.'/')) {
	
	//create array and fill with file names
	$list = array();
	while ($file = readdir($handle)) {
		if ($file!='.'&& $file!='..'){
			//echo ''.$file.'<br>';
			array_push($list, $file);
			
		}
	}
	//print_r($list);
	//echo '<br>';
}
	
?>

<html>
	<head>
		
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		
		<meta name="description" content="">
		<meta name="author" content="">
		
		<title>Dropdown</title>
		<meta name = "viewport" content = "width=device-width, initial-scale=1.0">
		<link href = "css/bootstrap.css" rel = "stylesheet">
		<link href = "css/styles.css" rel = "stylesheet">
		

	
	</head>
	<body>
		<div id="main">
		
			<!-- option menu for months -->
			<select id="month" onchange="CreateDays()">
				<option value="0">Select Month</option>	
			</select>
			
			<!-- options menu for days -->
			<select id="day" onchange="CreateDownload()">
			</select>
			
			<br>
			
			<!-- download link default hidden -->
			<a class="btn btn-primary" id ="download" href="" style="visibility: hidden" download >Download</a>
				
		</div>
		

	</body>
	<footer>
		<!--get array from php-->
		<script>var list = <?php echo json_encode($list) ?>;</script>
		
		<script type="text/javascript" src="js/custom.js" ></script>
		<script type="text/javascript" src="js/jquery.js" ></script>
		<script type="text/javascript" src="js/bootstrap.js" ></script>
		
	
	</footer>
</html>