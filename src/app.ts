let boardruns:(number)[]=[-1,1,2,3,4,5,6,-2],players:number[]=[0,0,0,0]
export function probability():number
{
  return Math.floor(Math.random() * (7 - 0 + 1) + 0)
}
export function score(player:number):number
{ 
    let index=probability()
      let result=boardruns[index]
        if(result>0)
        players[player]+=Number(result);
          return Number(result);
             
}
console.log(score(0))