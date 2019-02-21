<?php

//Make short Variable names
$email = $_REQUEST['email'];
$agecheckbox = $_REQUEST['age-verification'];


?><!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="utf-8" />
		<title>Mobile Form Script</title>
		<style>
			.box {
				border: 1px solid #444;
				background-color: #ccc;
				margin: 20px 20px;
				padding: 5px 20px;
			}
		</style>
	</head>

	<body>
		<div class="box">
			<h2>This section contains the email field:</h2>
			<p><strong>Email:</strong> <?php echo htmlentities($email) ?></p>
			<p><strong>Last Name:</strong> <?php echo htmlentities($lastName) ?></p>
		</div>
        
        <div class="box">
		    <h2>This section contains the selected checkbox field values:</h2>
		    <p><strong>Checkbox:</strong> <?php echo htmlentities($agecheckbox) ?></p>
	    </div>
	</body>

</html>
