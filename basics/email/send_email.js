var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'abdullah.mohamed102001@gmail.com',
            pass: 'ervrjzjasmqecrwz'
        },
    }
);

//! Basic mail options
var basicMailOpthions = {
    from: 'abdullah.mohamed102001@gmail.com',
    //?We can send to multible emails
    //to : 'mail1', 'mail2', .....
    to: 'abdullah.mohamed@appenza-studio.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

//! Html email options
var htmlMailOpthions = {
    from: 'abdullah.mohamed102001@gmail.com',
    //?We can send to multible emails
    //to : 'mail1', 'mail2', .....
    to: 'nermeen.mamdouh44@gmail.com',
    // to: 'abdullah.mohamed@appenza-studio.com',
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
          <h1>بحبك</h1>
          <a href="https://florette.ae/cdn/shop/collections/Florette_Venice_Bouquet_July_5_22_480x480_964dcd53-3135-46eb-8f65-8ea0579f1754_1285x1246.webp?v=1671181266" class="button">دوسي هنا كده</a>
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