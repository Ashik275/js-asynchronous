const paymentSuccess = true;
const marks = 70;

function enroll(callback){
    console.log("Course enrollment is in progress.");

    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }else{
            console.log('Payment Failed');
        }
    },3000);
}

function progress(callback){
    console.log("Course on progress....");
    if(marks >= 80){
    callback();
    }else{
        console.log("You could not get enough marks to get the certificate");
    }
}

function getCertificate(){
    console.log('Preparing your certificate!!');
    setTimeout(function(){
        console.log("Congrats! You got the certificate");
    },3000)
}

enroll(function(){
    progress(getCertificate);
})