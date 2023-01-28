function sendEmail(){
    Email.send({
        Host : "smtp.outlook.com",
        Username : "cisonplanilhas@outlook.com",
        Password : "nobodyacbr22",
        To : 'cisonplanilhas@outlook.com',
        From : "cisonplanilhas@outlook.com",
        Subject : "Novo contato",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}