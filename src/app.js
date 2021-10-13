"use strict";
exports.__esModule = true;
exports.player_strike = exports.evaluate = exports.score = exports.probability = exports.players_name = exports.outplayers = exports.newplayer = void 0;
var boardruns = [0, 1, 2, 3, 4, 5, 6, -2], players = [0, 0, 0, 0], player = 0, overs, count, runs = 40, finalscore = [];
var ball_left = 24, players_score = [0, 0, 0, 0], scoring, players_balls = [0, 0, 0, 0];
var traverse, names = ["Kirat Boli", "N.S.Nodhi", "R Rumrah", "Shashi Henra"], notoufinalscore = [], res = true;
exports.newplayer = [];
exports.outplayers = [];
exports.players_name = ["Kirat Boli", "N.S.Nodhi", "R Rumrah", "Shashi Henra"];
function probability() {
    return Math.floor(Math.random() * (7 - 0 + 1) + 0);
}
exports.probability = probability;
function score(player) {
    var index = probability();
    var result = boardruns[index];
    if (result > 0)
        players[player] += Number(result);
    return Number(result);
}
exports.score = score;
function evaluate() {
    for (overs = 0; overs < 4; overs++) {
        console.log(4 - overs + "overs left." + runs + "runs to win");
        for (count = 1; count <= 6; count++, ball_left--, players_balls[player] += 1) {
            scoring = score(player);
            if (scoring > 0) {
                runs = runs - scoring;
                players_score[player] += scoring;
            }
            if (runs <= 0) {
                console.log(overs + "." + count + exports.players_name[player] + "scores" + scoring + "runs");
                console.log("Bangalore won by " + ((exports.players_name.length) - 1) + " wickets " + ball_left + " balls remaining");
                scoreboard();
                //To display the results of the Match
                return runs;
            }
            else {
                if (scoring == 0)
                    console.log(overs + "." + count + exports.players_name[player] + "scores 0 run , it is a DOT BALL");
                else if (scoring == 1)
                    console.log(overs + "." + count + exports.players_name[player] + "scores" + scoring + "run");
                else if (scoring > 1)
                    console.log(overs + "." + count + exports.players_name[player] + "scores" + scoring + "runs");
                player = player_strike(player, count, scoring);
                if (scoring == -2) {
                    exports.outplayers.splice(-1, 0, exports.players_name[player]);
                    finalscore.splice(-1, 0, [exports.players_name[player], players_score[player], players_balls[player]]);
                    console.log(overs + "." + count + exports.players_name[player] + "is OUT");
                    players_score.splice(player, 1);
                    exports.players_name.splice(player, 1);
                    players_balls.splice(player, 1);
                    player = 1;
                    if (res) {
                        exports.newplayer[0] = exports.players_name[player];
                        res = false;
                    }
                    if (exports.players_name.length == 1) {
                        //If all the wickets are lost ,checkimg whether Bangalore lost the match or the match is tie
                        if (runs > 1)
                            console.log("Bangalore lost by " + runs + "runs");
                        else if (runs == 1)
                            console.log("Bangalore lost by " + runs + "run");
                        else
                            console.log("It's a Tie");
                        scoreboard();
                        return runs;
                    }
                }
            }
        }
        if (ball_left === 0 && runs > 0) {
            console.log("Bangalore lost by " + runs + "runs");
            return runs;
        }
    }
    return runs;
}
exports.evaluate = evaluate;
function player_strike(player, count, scoring) {
    if (count < 6) {
        if (scoring == 1 || scoring == 3 || scoring == 5) {
            if (player == 0)
                return 1;
            else
                return 0;
        }
        else
            return player;
    }
    else if (count == 6) {
        if (scoring == 0 || scoring == 2 || scoring == 4 || scoring == 6) {
            if (player == 0)
                return 1;
            else
                return 0;
        }
        else
            return player;
    }
}
exports.player_strike = player_strike;
function scoreboard() {
    for (var i = 0; i < players_score.length; i++)
        notoufinalscore.splice(i, 0, [exports.players_name[i], players_score[i], players_balls[i]]);
    for (var i = 0; i < names.length; i++) {
        traverse = exports.players_name.indexOf(names[i]);
        if (traverse != -1) 
        //Displaying the scores of players on the crease
        {
            if (notoufinalscore[traverse][2] != 0)
                console.log(names[i] + "  -  " + notoufinalscore[traverse][1] + "*(" + notoufinalscore[traverse][2] + "balls)");
        }
        //Displaying the scores of the players who are OUT
        else {
            traverse = exports.outplayers.indexOf(names[i]);
            console.log(names[i] + "  -  " + finalscore[traverse][1] + "(" + finalscore[traverse][2] + "balls)");
        }
    }
}
console.log(evaluate());
