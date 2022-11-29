#!/usr/bin/env node
import minimist from "minimist"
import roll from "../lib/roll.js"

const args = minimist(process.argv.slice(2));

let sides = args.sides || 6;
let dice = args.dice || 2;
let rolls = args.rolls;

console.log(JSON.stringify(roll(sides, dice, rolls)));
