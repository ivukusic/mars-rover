class MarsRover {
  errorOnOut: boolean;
  plateau: any;
  rovers: any;

  constructor(input: string[], errorOnOut: boolean) {
    const plateau: any = input.shift()?.split(' ');
    this.plateau = [parseInt(plateau[0], 10), parseInt(plateau[1], 10)];
    this.rovers = this.getRovers(input);
    this.errorOnOut = errorOnOut;
  }

  getRovers = (input: string[]) => {
    const rovers: string[][] = [];
    let rover: string[] = [];
    input.map((item, index) => {
      if (index % 2 === 0) {
        if (rover.length) {
          rovers.push(rover);
        }
        rover = [];
        rover.push(item);
      } else {
        rover.push(item);
      }
    });
    if (rover.length) {
      rovers.push(rover);
    }
    return rovers;
  };

  moveRover = (currentPosition: number[], direction: string) => {
    let x = currentPosition[0];
    let y = currentPosition[1];
    switch (direction) {
      case 'N':
        if (currentPosition[1] + 1 <= this.plateau[1]) {
          y = currentPosition[1] + 1;
        } else if (this.errorOnOut) {
          throw new Error('Out of plateau');
        }
        return [x, y];
      case 'E':
        if (currentPosition[0] + 1 <= this.plateau[0]) {
          x = currentPosition[0] + 1;
        } else if (this.errorOnOut) {
          throw new Error('Out of plateau');
        }
        return [x, y];
      case 'S':
        if (currentPosition[1] + 1 >= 0) {
          y = currentPosition[1] - 1;
        } else if (this.errorOnOut) {
          throw new Error('Out of plateau');
        }
        return [x, y];
      case 'W':
        if (currentPosition[0] - 1 >= 0) {
          x = currentPosition[0] - 1;
        } else if (this.errorOnOut) {
          throw new Error('Out of plateau');
        }
        return [x, y];
      default:
        return currentPosition;
    }
  };

  newDirection = (direction: string, current: string) => {
    const side: string[] = ['N', 'E', 'S', 'W'];
    if (direction !== 'L' && direction !== 'R') {
      return current;
    }
    if (direction === 'L') {
      if (current === 'N') {
        return 'W';
      }
      return side[side.indexOf(current) - 1];
    }
    if (current === 'W') {
      return 'N';
    }
    return side[side.indexOf(current) + 1];
  };

  transferRover = (start: string, movement: string): string => {
    const startPosition = start.split(' ');
    let position = [parseInt(startPosition[0], 0), parseInt(startPosition[1], 0)];
    let direction = startPosition[2];
    movement.split('').forEach(m => {
      if (m === 'M') {
        position = this.moveRover(position, direction);
      } else {
        direction = this.newDirection(m, direction);
      }
    });
    return `${position[0]} ${position[1]} ${direction}`;
  };

  calculateRoversPosition = () => {
    const calculated: any = [];
    this.rovers.map((rover: string[]) => {
      const position = this.transferRover(rover[0], rover[1]);
      calculated.push(position);
    });
    return calculated;
  };
}

export const calculateRoversPosition = (input: string[], errorOnOut = false) => {
  try {
    const marsRover = new MarsRover(input, errorOnOut);
    return marsRover.calculateRoversPosition();
  } catch (e) {
    return e;
  }
};
