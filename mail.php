<?php
$var=$_POST["email"];
foreach ($var as $key=>$email) {
	mail($email,"My subject","salut");
}
