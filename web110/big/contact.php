<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Huy Xuon Lieu: Contact Form</title>
    <meta name="robots" content="noindex,nofollow" />
    <meta name="viewport" content="width=device-width" />
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../css/portal.css" />
    <link rel="stylesheet" href="../css/nav.css" />
    <link rel="stylesheet" href="../css/forms.css" />
  </head>
  <body>
    <header>
      <h1>Huy's Contact Form</h1>
      <nav class="topnav" id="myTopnav">
        <a href="../index.html">Welcome</a>
        <a href="../elements.html" ">HTML Elements</a>
        <a href="../aia.html">AIA</a>
        <a href="../big/index.html">BIG</a>
        <a href="http://w3schools.com" target="_blank">W3 Schools</a>
        <a href="https://www.linkedin.com/learning/" target="_blank"
          >LinkedIn Learning</a
        >
        <a href="../flowchart.html" >Flowchart</a>
        <a href="../fp/index.html">Final Project</a>
        <a href="contact.php" class="active">Contact Huy</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()"
          >&#9776;</a
        >
      </nav>
    </header>

    <div class="wrapper">
      <h2 class="subheader">
        Contact Huy
      </h2>
      <?php
        /*
         * Below are 2 different forms to be re-used       
         * 
         * Only use one at a time, comment out the other!       
         *
         */

        include '../includes/contact_include.php'; #site keys & code here
    
        $toAddress = "lxhuy2051999@gmail.com";  //place your/your client's email address here
        $toName = "DAO"; //place your client's name here
        $website = "queenannenailsspa";  //place NAME of your client's website

        // echo loadContact('simple.php');#demonstrates a simple contact form
        echo loadContact('multiple.php');#demonstrates multiple form elements

	?>
      <p class="clear-recapcha"></p>

      <footer>
        <p>
          <small
            >&copy; 2021 by <a href="contact.php">Huy Xuon Lieu</a>, All Rights
            Reserved ~
            <a
              href="https://validator.w3.org/nu/?doc=https://web-students.net/site48/it161/index.html"
              target="_blank"
              >Valid HTML</a
            >
            ~
            <a
              href="https://jigsaw.w3.org/css-validator/check?uri=referer"
              target="_blank"
              >Valid CSS</a
            ></small
          >
        </p>
      </footer>
    </div>

    <!-- Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon -->

    <script>
      // alert(location.href);

      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    </script>
  </body>
</html>
