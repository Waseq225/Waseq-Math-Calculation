var answer;
var score = 0;
var backImage = [];

function nextQuestion(){
    const num1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = num1;

    const num2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = num2;
    answer = num1 + num2;
}

function checkAnswer(){
    const prediction = predictImg();
    console.log(`Answer: ${answer}, prediction: ${prediction}`);
    
    if(answer==prediction){
        score++;
        console.log(`Correct, Score: ${score}`);
        if(score <=6){
            backImage.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backImage;
        }
        else{
            alert('CONGRATULATIONS! Wanna start again?');
            score = 0;
            backImage = [];
            document.body.style.backgroundImage = backImage;
        }
        
    }
    else{
        if(score!=0){score--;}
        backImage
        console.log(`Incorrect, Score: ${score}`);
        alert('Try again! Check calculations!');
        setTimeout(function () {
            backImage.pop();
            document.body.style.backgroundImage = backImage;
        }, 1000);
    }

}

