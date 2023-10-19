



// 1 rock
// 2 paper
// 3 scissors



function didPlayerWin(playerChoice)
{
    let computerChoice = Number(Math.floor(Math.random() * 3)) + 1;
    if (playerChoice==computerChoice){
        document.getElementById("demo").innerHTML = "It's a Tie !";
        return;
    }
        switch (playerChoice){
            case 1:
                if (computerChoice == 3){
                    
                    document.getElementById("demo").innerHTML = "You win \\ [ ' ^ ' ] /!";
                }else{
                    document.getElementById("demo").innerHTML = "Computer wins :c !";
                }
                break;
            case 2:
                if (computerChoice == 1){
                    document.getElementById("demo").innerHTML = "You win \\ [ ' ^ ' ] /!";
                }else{
                    document.getElementById("demo").innerHTML = "Computer wins :c !";
                }
                break;
            case 3:
                if (computerChoice == 2){
                    document.getElementById("demo").innerHTML = "You win \\ [ ' ^ ' ] /!";
                }else{
                    document.getElementById("demo").innerHTML = "Computer wins :c !";
                }
                break;
            default:
                alert("Errror occured, invalid input, you shouldn'see this message!");
                break;
        }
         

        
    
}