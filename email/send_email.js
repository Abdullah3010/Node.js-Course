var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'abdullah.mohamed102001@gmail.com',
            pass: 'gwjtblebgbaubcwj'
        },
    }
);

//! Basic mail options
var basicMailOpthions = {
    from: 'abdullah.mohamed102001@gmail.com',
    //?We can send to multible emails
    //to : 'mail1', 'mail2', .....
    to: 'abdelrhmanmohamed5335@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

//! Html email options
var htmlMailOpthions = {
    from: 'abdullah.mohamed102001@gmail.com',
    //?We can send to multible emails
    //to : 'mail1', 'mail2', .....
    to: 'nermeen.mamdouh44@gmail.com',
    subject: 'Sending Email using Node.js',
    html : `<!DOCTYPE html>
    <html>
      <head>
        <title>Beautiful Email</title>
        <style>
          /* Define the styles for the email */
          body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            color: #444444;
            line-height: 1.4;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
          }
          
          h1 {
            font-size: 28px;
            color: #333333;
            margin: 0;
            padding: 0;
            line-height: 1.2;
          }
          
          p {
            margin-bottom: 20px;
          }
          
          a {
            color: #007bff;
            text-decoration: none;
          }
          
          .button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            font-size: 16px;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
          }
          
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #cccccc;
            text-align: center;
            color: #999999;
            font-size: 14px;
          }
        </style>
      </head>
      
      <body>
        <div class="container">
          <h1>السلام عليكم ورحمه الله</h1>
          <p>ايه رايك في الحركه دي بتعلم node.js وباعتلك الايميل من الكود</p>
          <p>الحوار جااامد</p>
          <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyq2RSA5ls472H5747Gt7cXtb7YWY31QIKlw&usqp=CAU" class="button">دوسي هنا كده</a>
        </div>
        
        <div class="footer">
          <p>This email was sent by Abdullah Moahmed</p>
        </div>
      </body>
    </html>`
}

transporter.sendMail(basicMailOpthions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});