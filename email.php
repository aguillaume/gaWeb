<?php
    $subject = $_POST['subject'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'gllm.lp.17@gmail.com';
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from the user $subject.\n".
                            "Here is the message:\n $message";

    $to = "gllm.lp.17@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
?>
