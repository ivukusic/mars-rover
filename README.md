# Mars Rover Technical Challenge

## Installation

Navigate to your project root folder and run the following command:

Install node_modules

```
yarn install
```

Install pods

```
cd ios && pod install
```

## Run the app

```
react-native run-ios
```

## Running unit tests

Unit tests for rover position

```
yarn test
```

## Running E2E test

[Useful link for running E2E test with detox](https://bitbar.com/blog/detox-superfast-e2e-react-native-ui-testing/)

Useful commands

```
brew tap wix/brew
brew install applesimutils
npm install -g detox-cli
```

Creating build for detox

```
detox build
```

Running tests

```
yarn test:e2e:ios
```

## Note about Mars Rover solution

Path to solution file: src/utils/rover.ts
Path to solution test file: src/utils/rover.test.ts
Method calculateRoversPosition takes two parameters. Input is self explanatory, and errorOnOut defines what should happen on rover getting out of bound. If errorOnOut=true, throws an error and if errorOnOut=false, does not throw an error, just leaves rover on same position

## Challenge

The problem below requires some kind of input. You are free to implement any mechanism for feeding input into your solution
(for example, using hard coded data within a unit test). You should provide sufficient evidence that your solution is complete by,
as a minimum, indicating that it works correctly against the supplied test data.
We highly recommend using a unit testing framework. Even if you have not used it before, it is simple to learn and incredibly useful.
The code you write should be of production quality, using React Native (TypeScript or JavaScript) and most importantly, it should be code you are proud of.

#### Mars Rovers

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be
navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover’s position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point and maintain the same heading. Assume that the square directly North from (x, y) is (x, y+1).

##### Input:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0. The rest of
the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives
the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is
made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished
moving.

##### Output:

The output for each rover should be its final co-ordinates and heading.
Test Input:
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

##### Expected Output:

1 3 N 5 1 E
