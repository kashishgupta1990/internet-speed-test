var speedTest=require('speedtest-net');
var gmail = require('./gmailSend');

gmail(function (email) {

    test=speedTest({maxTime:5000});

    test.on('data',function(speedResult){

        email.send({
            from: 'guptkashish@gmail.com',
            to: 'guptkashish@gmail.com',
            subject: 'Internet Speed Notification - ' + new Date(),
            body: JSON.stringify(speedResult)
        }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('Email Send Successfully at ' + new Date());
            }
        });

    });

    test.on('error',function(err){
        email.send({
            from: 'guptkashish@gmail.com',
            to: 'guptkashish@gmail.com',
            subject: 'Internet Speed Notification - ' + new Date(),
            body: JSON.stringify(err)
        }, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('Error Report Send Successfully at ' + new Date());
            }
        });
    });

});






