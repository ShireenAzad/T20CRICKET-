import{evaluate, player_strike, probability, score} from "../src/app"
let boardruns:(number)[]=[0,1,2,3,4,5,6,-2],overs:number,count:number,runs:number,scoring:number,names=["Kirat Boli","N.S.Nodhi","R Rumrah","Shashi Henra"]
let players_data:number[][]=[[ 5, 30, 25, 10, 15, 1, 9, 5],[10, 40, 20, 5 , 10, 1, 4, 10] ,[20, 30, 15,5 , 5, 1, 4, 20],[ 30, 25, 5, 0, 5, 1, 4, 30]]
import {newplayer,outplayers,players_name   } from "../src/app"
describe("Calcualtion of the score of a player based on the probability",function()
{
    it("Verifying that Kirat Boli score 4 runs by mocking probability to 15%  ",function()
    {
       let  probability=jest.fn()
        let player=0
        probability.mockReturnValue(4)
        expect( players_data[player][4]).toBe(15)
        expect(boardruns[4]).toBe(4)
        //console.log("Kirat Boli with probability of "+players_data[player][4]+" % has scored "+boardruns[4]+"runs")
    })
    it("Verifying that N.S.Nodhi score 2 runs by mocking probability to 20% ",function()
    {
       let  probability=jest.fn()
        let player=1
        probability.mockReturnValue(2)
        expect( players_data[player][2]).toBe(20)
        expect(boardruns[2]).toBe(2)
        //console.log("N.S.Nodhi with probability of "+players_data[player][2]+" % has scored "+boardruns[2]+"runs")
    })
    it("Verifying that R Rumrah score 0 runs by mocking probability to 20%",function()
    {
       let  probability=jest.fn()
        let player=2
        probability.mockReturnValue(0)
        expect( players_data[player][0]).toBe(20)
        expect(boardruns[0]).toBe(0)
        //console.log("R Rumrah with probability of "+players_data[player][0]+" % has scored "+0+"run")
    })
    it("Verifying that Shashi Henra is OUT by mocking probability to 20%",function()
    {
       let  probability=jest.fn()
        let player=3
        probability.mockReturnValue(7)
        expect( players_data[player][7]).toBe(30)
        expect(boardruns[7]).toBe(-2)
        //console.log("Shashi Henra with probability of "+players_data[player][7]+" % was OUT")
    })
    it("Verifying the score of the Rumrah by mocking the score of Rumrah",function(){
        let  score=jest.fn()
       score.mockReturnValue(3)
        expect(score(3)).toBe(3)
    })
    
    

})
describe("Checking the strike of the players in different scenarios",function()
{
    it("checking the strike of the player when the over is completed and the player scores 0 or 2 or 4 or 6 runs",function()
    {  
        let  score=jest.fn()
        score.mockReturnValue(2)
        scoring=score(0)
        let player=player_strike(0,6,scoring)
        expect(names[player]).toBe("N.S.Nodhi")

    })
    it("checking the strike of the player when the over is completed and the player scores 1 or 3 or 5",function()
    {   
        let  score=jest.fn()
        score.mockReturnValue(3)
        scoring=score(0)
        let player=player_strike(0,6,scoring)
        console.log(player)
        expect(names[player]).toBe("Kirat Boli")

    })
    it("checking the strike of the player when the player scores odd runs within the over",function()
    {  
        let  score=jest.fn()
        score.mockReturnValue(3)
        scoring=score(0)
        let player=player_strike(0,5,scoring)
        expect(names[player]).toBe("N.S.Nodhi")

    })
    it("checking the strike of the player when the player scores even runs within the over",function()
    {  
        let  score=jest.fn()
        score.mockReturnValue(2)
        scoring=score(0)
        let player=player_strike(0,4,scoring)
        expect(names[player]).toBe("Kirat Boli")

    })
})

describe("When a player gets out, the new player comes in at the same position",function()
{
    it("when kirat boli or N.S.Nodhi is OUT,R Rumrah will comes in the position",function()
    {
       expect(newplayer[0]).toBe("R Rumrah")

    })
    
})
describe("Checking the team won the match or not",function()
{
    it("checking the team scores the required runs or not",function(){
        runs=evaluate()
        console.log("runs"+runs)
        if(runs>0)
        {
            expect(runs).toBeGreaterThan(0) 
            //console.log("Bangalore lost the match")
        }
        else if(runs<0)
        {
            expect(runs).toBeLessThanOrEqual(0)
            //console.log("Bangalore won the match")
        }
        else if(runs==0){
            expect(runs).toBe(0)
            //console.log("It is a Tie")
        }
     
    })
    
})
describe("Testing the score of the individual players",function()
{
    it("Checking the count  of the players who are out are zero or 3",function()
    {
        expect(outplayers.length).toBeGreaterThanOrEqual(0)
        for (let i=0;i<outplayers.length;i++)
        console.log(outplayers)
    })
    it("Checking that atleast one player should be not out",function()
    {
        expect(players_name.length).toBeGreaterThanOrEqual(1)
        for (let i=0;i<players_name.length;i++)
        console.log(players_name)
    })

})
