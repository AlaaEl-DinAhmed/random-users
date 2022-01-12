import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  let pipe: UserNamePipe;

  beforeEach(() => {
    pipe = new UserNamePipe();
  });

  it('create an instance', () => {
    const pipe = new UserNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform the name object into a readable name', () => {
    const expectedResult = 'Mr. Alaa Ahmad';

    const transformedResult = pipe.transform({
      title: 'Mr',
      first: 'Alaa',
      last: 'Ahmad',
    });

    expect(transformedResult).toEqual(expectedResult);
  });
});
