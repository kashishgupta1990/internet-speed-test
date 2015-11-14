var speedTest=require('speedtest-net');
var gmail = require('./gmailSend');

gmail(function (email) {

    /*email.send({
        from: 'guptkashish@gmail.com',
        to: 'guptkashish@gmail.com',
        subject: 'Internet Speed Notification - ' + new Date(),
        body: 'I am body',
        html: '<b>YOYO</b>'
    }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email Send Successfully at ' + new Date());
            console.log(data);
        }
    });*/



    test=speedTest({maxTime:5000});

    test.on('data',function(data){
        console.dir(data);
    });

    test.on('error',function(err){
        console.error(err);
    });


});




