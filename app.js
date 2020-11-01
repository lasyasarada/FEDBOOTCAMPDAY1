let score = [1,0]

var team1 = {
    name : "Alaves",
    goals : [],
    score : 0
}

var team2 = {
    name : "Barcelona",
    goals : [],
    score : 0
}

var turn;


window.onload = () => {
    selectTurn();  //Deciding the toss
    updateButton(); //Updating the button name and result
    updateScore(); // Updating the scire iin the score board
    updateGoals();
} 


//Es6 was of writing functions
selectTurn = () =>{
    turn = Math.round(Math.random())+1;
}

//Traditional way of writing function
function updateButton() {
    var button = document.getElementById("bat-button");
    var result = document.getElementById("result")

    result.style.visibility="";
    
    button.textContent = `${turn === 1 ? team1.name : team2.name} Kick`

    if(team1.goals.length == 6 && team2.goals.length == 6){
        button.remove();

        result.textContent = team1.score === team2.score ? 'It is draw': team1.score > team2.score ? team1.name + " Wins" : team2.name +" Wins"
    }
    else {
        turn = team1.goals.length === 6 ? 2 : team2.goals.length === 6 ? 1 : turn; 
    }
}


updateScore = () => {

  document.getElementById("team-1-score").textContent = team1.score;
  document.getElementById("team-2-score").textContent = team2.score;
}

var handleStrikeButton = () => {
   
    var goals = score[Math.floor(Math.random() * score.length)]
    
    goals = goals === 1 ? 0 : 1
    
    if(turn === 1){
        team1.goals.push(goals) 
        team1.score = calculateScore(team1.goals)
        console.log(team1.score)
    }
    else{
        team2.goals.push(goals) 
        team2.score = calculateScore(team2.goals)
        console.log(team1.score)
    }
    updateButton();
    updateGoals()
    updateScore()
}

var calculateScore =(goals) =>{
    return goals.map( (goal) => {
        return goal == 0 ? 0 : 1;
        }
    ).reduce( (total , goals) =>  total + goals) 
}

updateGoals  =() =>{
    var teamOneRoundElement = document.getElementById("team-1-round-goals").children;
    var teamTwoRoundElement = document.getElementById("team-2-round-goals").children;
    team1.goals.forEach( (goal , index) =>{
        teamOneRoundElement[index].textContent = goal;
    })
    team2.goals.forEach( (goal , index) =>{
        teamTwoRoundElement[index].textContent = goal;
    })
}
