<?php
    $name = $_Post['name'];
    $visitor_email = $_Post['email'];
    $message = $_POST['message'];

    $email_from = 'isadora.galindohohn@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n";
    $email_body .= "User Email: $visitor_email.\n"; 
    $email_body .= "User Message: $message.\n";

    $to = "isadora.galindohohn@gmail.com";

    $headers = "From $email_from \r \n";

    $headers .= "Reply-To: $visitor_email \r \n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>