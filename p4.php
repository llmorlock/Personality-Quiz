<!DOCTYPE html>	<!-- guess.php -->
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Project 4: Guessing Game</title>

   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
         rel="stylesheet" crossorigin="anonymous"
         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3">
   
   <link href="../index.css" rel="stylesheet">
   <link href="p4.css" rel="stylesheet">


</head>

<body>
<header class="container-fluid">
   <div class="row">
      <div class="col-lg-12">
         <h1 class="display-1">Project 4: Personality Quiz</h1>
      </div>
   </div>
</header>

<div class="container-fluid">
  <form method="post" action="p4.php">
    <p>I'm thinking of a number between 1 and 10.</p>
    <p>Your guess? <input type="number" name="num" min="1" max="10" autofocus></p>
    <input type="submit" value="Guess">
  </form>
</div>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $randNum = rand(1, 10);
   
   if ($randNum == $_POST["num"]) {
      echo "<h1>Correct!</h1>";
   }
   else {
      echo "<p>No, I was thinking of $randNum.</p>";
   }        
}
?>


<footer class="container-fluid">
   <p>Made by Lauren, 2022</p>
   <p><em>Last updated 06262022</em></p>
</footer>

</body>

</html>