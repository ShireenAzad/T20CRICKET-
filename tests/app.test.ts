


describe("Calcualtion of the score of a player based on the probability",function()
{
    it("Checking the probabilities",function()
    {
        probability=jest.fn()
        let player=0
        probability.mockReturnValue(4)
        expect( players_data[player][probability]).toBe(15)
    })
})