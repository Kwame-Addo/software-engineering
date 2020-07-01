let displayMessage = require('App.svelte');
let message =  text;
test("test to check if message gets displayed", ()=>{
    expect(displayMessage(text, seconds)).toBe(message, seconds*1000)
});

let setAnswerVisiblity = require('App.svelte');
test("test to check answer visibiliity", ()=>{
    expect(setAnswerVisiblity(show)).toBe(answer)
});

let startGame = require('App.svelte');
test ("to check if message is displayed when game is started", ()=>{
    expect(startGame()).toBe("Face off! First team to call out their answer goes first.")
});

let  pass = require('App.svelte');
let currentTeam = "alpha";
let teamName = [currentTeam];
test("test to show current team on board" , ()=>{
    expect(pass()).toBe(`Team alpha now has the board.`)
});

let nextRound = require('App.svelte');
let winningTeam = teamMoney[0] > teamMoney[1] ? 0 : 1;
let teamMoney = [];
let teamNames = [];
test ("to display who wins the game" , ()=>{
    expect( nextRound(e)).teBe(("Team " + teamNames[winningTeam] + " wins the game!" || "Face off!")