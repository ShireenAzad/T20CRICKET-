import{probability} from "../src/app"
let boardruns:(number)[]=[-1,1,2,3,4,5,6,-2]
let players_data:number[][]=[[ 5, 30, 25, 10, 15, 1, 9, 5],[10, 40, 20, 5 , 10, 1, 4, 10] ,[20, 30, 15,5 , 5, 1, 4, 20],[ 30, 25, 5, 0, 5, 1, 4, 30]]
describe("Calcualtion of the score of a player based on the probability",function()
{
    it("Checking the probabilities",function()
    {
       let  probability=jest.fn()
        let player=0
        probability.mockReturnValue(4)
        expect( players_data[player][4]).toBe(15)
        expect(boardruns[4]).toBe(4)
        console.log("Kirat Boli with probability of "+players_data[player][4]+" % has scored "+boardruns[4]+"runs")
    })
    it("Checking the probabilities",function()
    {
       let  probability=jest.fn()
        let player=1
        probability.mockReturnValue(2)
        expect( players_data[player][2]).toBe(20)
        expect(boardruns[2]).toBe(2)
        console.log("N.S.Nodhi with probability of "+players_data[player][2]+" % has scored "+boardruns[2]+"runs")
    })
    it("Checking the probabilities",function()
    {
       let  probability=jest.fn()
        let player=2
        probability.mockReturnValue(0)
        expect( players_data[player][0]).toBe(20)
        expect(boardruns[0]).toBe(-1)
        console.log("R Rumrah with probability of "+players_data[player][0]+" % has scored "+0+"run")
    })
    it("Checking the probabilities",function()
    {
       let  probability=jest.fn()
        let player=3
        probability.mockReturnValue(7)
        expect( players_data[player][7]).toBe(30)
        expect(boardruns[7]).toBe(-2)
        console.log("R Rumrah with probability of "+players_data[player][7]+" % was OUT")
    })
})