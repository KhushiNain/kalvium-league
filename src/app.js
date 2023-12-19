//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  let detailarray=[]
  detailarray.push(managerName);
  detailarray.push(managerAge);
  detailarray.push(currentTeam);
  detailarray.push(trophiesWon)
  return detailarray
}
createManager()
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}



//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
//write your function here
function createFormation([defenderr,midfieldd, forwardd]){
  // console.log(defenderr,midfieldd,forwardd)
  if(!defenderr&&!midfieldd&&!forwardd){
    return null
  }
  let formation ={
    defender: defenderr,
    midfield: midfieldd,
    forward: forwardd
  }
  return formation

}
// Dont edit the following code
try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}



//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  playerArray=[]
  players.forEach((player)=>{
    if (player.debut== year){
      playerArray.push(player)
    }
  })
  return playerArray
}



//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  positionArray=[]
  players.forEach((player)=>{
    if (player.position== position){
      positionArray.push(player)
    }
  })
  return positionArray
}



//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  awardArray=[]
  players.forEach((player)=>{
    for(let i=0;i<player.awards.length;i++){
      if (player.awards[i].name== awardName){
        awardArray.push(player)
      }
    }
    
  })
  return awardArray
}



//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  awardArray=[]
  players.forEach((player)=>{
    let count=0;
    for(let i=0;i<player.awards.length;i++){
      if (player.awards[i].name== awardName){
        count++
      }
    
    }
    if(count== noOfTimes){
      awardArray.push(player)
    }
  })
  return awardArray
}


//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  awardArray=[]
  players.forEach((player)=>{
    for(let i=0;i<player.awards.length;i++){
      if (player.awards[i].name== awardName && player.country==country){
        awardArray.push(player)
      }
    }
  })
  return awardArray
  
}


//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  awardArray=[]
  players.forEach((player)=>{
      if (player.awards.length >= noOfAwards && player.age<=age && player.team==team){
        awardArray.push(player)
      }
    
  })
  return awardArray


}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  players.sort((a, b) => b.age - a.age);
  return players;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  teamarray=[]
  players.forEach((player)=>{
    if (player.team== team){
      teamarray.push(player)
    }

  })
  teamarray.sort((a,b)=> b.awards.length-a.awards.length)
      return teamarray
}




//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names


function filterByAwardxTime(awardName, noOfTimes,country){
  awardArraaay=[]
  players.forEach((player)=>{
    let count=0;
    for(let i=0;i<player.awards.length;i++){
      if (player.awards[i].name== awardName && player.country==country){
        count++
      }
    }
    if(count== noOfTimes){
      awardArraaay.push(player)
    }

  })
  awardArraaay.sort((a,b)=>
  a.name-b.name)
  return awardArraaay
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age){
  array=[]
  players.forEach((player)=>{
    if(player.age>age){
      array.push(player)
    }
  })
  array.sort((a,b)=> b.awards.year - a.awards.year)
  return array
}