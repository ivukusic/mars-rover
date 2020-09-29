import { calculateRoversPosition } from './rover';

describe('Utils - rovers', () => {
  /**
   * test case with task input
   * */
  it('should calculate rovers position', () => {
    const input = ['5 5', '1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];
    const res = ['1 3 N', '5 1 E'];
    expect(calculateRoversPosition(input)).toEqual(res);
  });

  /**
   * test case with input that forces rover outside of plateau - standard plateau 5x5
   * in case that rover tries to go outside of plateau, rover stays on the same spot
   * */
  it('should calculate rovers position - plateau 5x5 - if does not throw error on out of plateau', () => {
    const input = ['5 5', '2 3 E', 'MLMLMRMMLMLMM', '3 3 E', 'MMRMMRMRRM'];
    const res = ['1 3 S', '5 1 E'];
    expect(calculateRoversPosition(input)).toEqual(res);
  });

  /**
   * test case with input that forces rover outside of plateau - standard plateau 5x5
   * in case that rover tries to go outside of plateau, throws error "Out of plateau"
   * */
  it('should calculate rovers position - plateau 5x5 - if throws an error on out of plateau', () => {
    const input = ['5 5', '2 3 E', 'MLMLMRMMLMLMM'];
    expect(calculateRoversPosition(input, true)).toEqual(new Error('Out of plateau'));
  });

  /**
   * test case with input that forces rover outside of plateau - larger plateau 7x7
   * in case that rover tries to go outside of plateau, throws error "Out of plateau"
   * */
  it('should calculate rovers position - plateau 7x7 - if does not throw error on out of plateau', () => {
    const input = ['7 7', '2 3 E', 'MLMLMRMMLMLMM'];
    const res = ['1 4 S'];
    expect(calculateRoversPosition(input)).toEqual(res);
  });
});
