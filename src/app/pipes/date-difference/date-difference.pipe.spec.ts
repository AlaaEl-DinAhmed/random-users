import { DateDifferencePipe } from './date-difference.pipe';

describe('DateDifferencePipe', () => {
  let pipe: DateDifferencePipe;

  beforeEach(() => {
    pipe = new DateDifferencePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the difference between two dates', () => {
    const expectedResult = 1;
    const userDate = '2021-04-15T15:35:56.506Z';

    const transformedDate = pipe.transform(userDate);

    expect(transformedDate).toEqual(expectedResult);
  });
});
