/*

					 .(4,7)	
           |
           |
	.(1,2)---+--------.(10,2)
           |
           |
           |
           |
           |
           .(4,-8)
*/

const fs = require("fs");

const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

const wireCommands = input.map(wire => {
  return wire.split(",");
});

/* * * * * * * * * * * * * * */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(p) {
    return Math.abs(this.x - p.x) + Math.abs(this.y - p.y);
  }

  nextPoint(command) {
    const direction = command.slice(0, 1);
    const steps = parseInt(command.slice(1), 10);

    switch (direction) {
      case "U":
        return new Point(this.x, this.y - steps);
      case "R":
        return new Point(this.x + steps, this.y);
      case "D":
        return new Point(this.x, this.y + steps);
      case "L":
        return new Point(this.x - steps, this.y);
    }
  }
}

function pointsBetween(a, b) {
		
}

function comparePoints(a, b) {
  return a.x === b.x && a.y === b.y;
}

const wires = wireCommands.map(commands => {
  const points = [new Point(0, 0)];

  for (let = i = 1; i < commands.length; i++) {
    const previous = points[i - 1];
    const next = previous.nextPoint(commands[i]);
    const between = pointsBetween(previous, next);

    console.log(between);

    points.push(next);
  }

  return points;
});

console.log(wires);
