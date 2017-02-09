<!DOCTYPE html>
 <link rel="stylesheet" type="text/css" href="style.css">
<?php
function curPageURL() {
 $pageURL = 'http';
 if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
 $pageURL .= "://";
 if ($_SERVER["SERVER_PORT"] != "80") {
  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
 } else {
  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
 }
 return $pageURL;
}
?>
<?php $pages =array("http://localhost:8080/frontpage.php", "http://localhost:8080/fame.php", "http://localhost:8080/cults.php", "http://localhost:8080/links.php");?>
	<?php reset($pages);?>
<?php foreach ($pages as $value) {
	if ($value !=curPageURL())
		echo '<a href="' . $value . '">"' . $value . '"</a> <br />';}?>

<!-- <?php if (curPageURL() == "http://localhost:8080/frontpage.php"): ?>
	<h1>Navigate the Catsite!</h1>
	<h3> Currently on: Frontpage!!!<h3>
  <ul id="directory">
<li><a href="fame.php"> Famous Cats! </a></li>
<li><a href="cults.php"> Cat Cults and How to Join!!! </a></li>
  <li> <a href= "links.php"> Educational Links </a></li>
            </ul>
        <?php endif; ?>

        <?php if (curPageURL() == "http://localhost:8080/fame.php"): ?>
	<h1>Navigate the Catsite!</h1>
	<h3> Currently on: Famous Felines!!<h3>
  <ul id="directory">
<li><a href= "frontpage.php"> Front Page </a></li>
<li><a href="cults.php"> Cat Cults and How to Join!!! </a></li>
  <li> <a href= "links.php"> Educational Links </a></li>
            </ul>
        <?php endif; ?>

      	<?php if (curPageURL() == "http://localhost:8080/cults.php"): ?>
	<h1>Navigate the Catsite!</h1>
		<h3> Currently on: Cat Worship throught the ages<h3>
  <ul id="directory">
<li><a href= "frontpage.php"> Front Page </a></li>
<li><a href="fame.php"> Famous Cats! </a></li>
  <li> <a href= "links.php"> Educational Links </a></li>
            </ul>
        <?php endif; ?>

        <?php if (curPageURL() == "http://localhost:8080/links.php"): ?>
	<h1>Navigate the Catsite!</h1>
		<h3>Currently on: Enrich yourself with education!<h3>
  <ul id="directory">
<li><a href= "frontpage.php"> Front Page </a></li>
<li><a href="fame.php"> Famous Cats! </a></li>
<li><a href="cults.php"> Cat Cults and How to Join!!! </a></li>
            </ul>
        <?php endif; ?> -->