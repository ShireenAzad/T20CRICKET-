let boardruns:(number)[]=[0,1,2,3,4,5,6,-2],players:number[]=[0,0,0,0],player:number=0,overs:number,count:number,runs:number=40,finalscore:(string|number)[][]=[]
let ball_left=24,players_score:number[]=[0,0,0,0],scoring:number,players_balls:number[]=[0,0,0,0]
let traverse:number, names=["Kirat Boli","N.S.Nodhi","R Rumrah","Shashi Henra"],notoufinalscore:(string|number)[][]=[],res:boolean=true
export let newplayer:string[]=[]
export let outplayers:string[]=[]
export let players_name:string[]=["Kirat Boli","N.S.Nodhi","R Rumrah","Shashi Henra"]
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
export function evaluate():number
{
  for(overs=0;overs<4;overs++)
  {
    console.log(4-overs+"overs left."+runs+"runs to win")
    for(count=1;count<=6;count++,ball_left--,players_balls[player]+=1)
    {
      scoring=score(player)
       if(scoring>0) 
       {
          runs=runs-scoring
          players_score[player]+=scoring
       }
          if(runs<=0)
          {
          console.log(overs+"."+count+players_name[player]+"scores" +scoring+"runs")
          console.log("Bangalore won by "+((players_name.length)-1)+" wickets "+ball_left+" balls remaining")
          scoreboard()
          //To display the results of the Match
          return runs
          } 
          else
          {if(scoring==0)
            console.log(overs+"."+count+players_name[player]+"scores 0 run , it is a DOT BALL")
            else if(scoring==1 )
            console.log(overs+"."+count+players_name[player]+"scores" +scoring+"run")
            else if(scoring>1)
            console.log(overs+"."+count+players_name[player]+"scores" +scoring+"runs")
            player=player_strike(player,count,scoring)
            if(scoring==-2)
            {
              outplayers.splice(-1,0,players_name[player])
              finalscore.splice(-1,0,[players_name[player],players_score[player],players_balls[player]])
              console.log(overs+"."+count+players_name[player]+"is OUT")
              players_score.splice(player,1)
              players_name.splice(player,1)
              players_balls.splice(player,1)
              player=1
              if(res)
              {
                newplayer[0]=players_name[player]
                res=false
              }
              
              if(players_name.length==1)
            {
                //If all the wickets are lost ,checkimg whether Bangalore lost the match or the match is tie
                if(runs>1)
                console.log("Bangalore lost by "+runs+"runs");
                else if(runs==1)
                console.log("Bangalore lost by "+runs+"run");
                else
                console.log("It's a Tie")
                scoreboard()
                return runs
          
            }
            }
          }    
    }
    if(ball_left===0 && runs>0)
        {
            console.log("Bangalore lost by "+runs+"runs")
            return runs
        }
  } 
  return runs
}
export function player_strike(player:number,count:number,scoring:number)
{
  if(count<6)
  {
  if(scoring==1 ||scoring==3 ||scoring==5)
  {
    if(player==0)return 1
     else return 0

  }
  else
  return player
}
  else if(count==6)
  {
    if(scoring==0 || scoring==2 ||scoring==4 ||scoring==6)
    {
      if(player==0)return 1
       else return 0
    }
    else 
    return player
  }
}

function scoreboard()
    {

        for(let i=0;i<players_score.length;i++)
        notoufinalscore.splice(i,0,[players_name[i],players_score[i],players_balls[i]])
        for (let i=0;i<names.length;i++)
        {
       traverse=players_name.indexOf(names[i])
       if(traverse!=-1)
       
       {if(notoufinalscore[traverse][2]!=0)
       console.log(names[i]+"  -  "+notoufinalscore[traverse][1]+"*("+notoufinalscore[traverse][2]+"balls)")
       }
       
       else
       {
       traverse=outplayers.indexOf(names[i])
       console.log(names[i]+"  -  "+finalscore[traverse][1]+"("+finalscore[traverse][2]+"balls)")
       }
    }
    }
evaluate()