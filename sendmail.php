if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['subject'])
    ){
        $name = $_POST["userName"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $name = $_POST["name"];


        $to = "asifaleemkhan@gmail.com";
        $subject = "New Contact Form Submission";
        $body = "UserName: {$userName}\nEmail: {$email}\nSubject: {$subject}\nDetail: {$name}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}