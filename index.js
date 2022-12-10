const nodemailer = require('nodemailer');
 
// generate random 6 digit number 
const value  = () => {
    return Math.floor(100000 + Math.random() * 900000);
}


let mailtransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '###############',
        pass: '#############'

        // note: not works fine with gmail account
    }
});

let mailDetails = {
    from: '###################',
    to: `#############`,
    subject: 'OTP Sending ',
    text: 'Your OTP is ' + value() 
};

mailtransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
}
);