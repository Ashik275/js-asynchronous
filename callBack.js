/* Callback function invocation:
The enroll function is called first with an anonymous function as an argument.
Inside this anonymous function, progress is called with getCertificate as its argument.
So, getCertificate becomes the callback function for progress.
The execution flow is such that once enrollment is successful, it checks the progress. If the progress is satisfactory, it proceeds to get the certificate. */

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