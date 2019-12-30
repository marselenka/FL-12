let gameQuestion = confirm('Do you want to play a game?');
let totalPrize = 0;
let attempts = 3;
let rangeValueIncrement = 4;
let gameIndex = 2;
let countReset = -1;
let maxRange = 8;
let startMaxPrize = 100;
let possiblePrize;
let userNumber, gameRandomNumb;

if (!gameQuestion) {
    alert('You did not become a billionaire, but can');
}
while (gameQuestion) {
    possiblePrize = startMaxPrize;
    gameRandomNumb = Math.floor(Math.random() * (maxRange + 1));
    for (let i = 0; i < attempts; i++) {
        if (i > 0) {
            possiblePrize /= gameIndex;
        }
        userNumber = +prompt(`Choose a roulette pocket number from 0 to ${maxRange}
            Attemts left:${attempts - i} 
            Total prize: ${totalPrize}$ 
            Possible prize on current userAttempts:${possiblePrize}$`);
        if (userNumber === gameRandomNumb) {
            totalPrize += possiblePrize;
            alert(`Congratulation, you won! Your prize is:${totalPrize}$`);
            if (confirm('Do you want to continue?')) {
                gameRandomNumb = Math.floor(Math.random() * (maxRange + 1));
                maxRange += rangeValueIncrement;
                startMaxPrize *= gameIndex;
                possiblePrize = startMaxPrize;
                i = countReset;
            } else {
                alert(
                    `Thank you for your participation.Your prize is: ${totalPrize}$`
                );
                totalPrize = 0;
                break;
            }
        } else if (isNaN(userNumber)) {
            alert(`Thank you for your participation.Your prize is: ${totalPrize}$`);
            break;
        }
    }
    gameQuestion = confirm('Do you want to play again?');
    totalPrize = 0;
}
