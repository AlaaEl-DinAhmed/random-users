import { UserNamePipe } from './user-name.pipe';

describe('UserNamePipe', () => {
  let pipe: UserNamePipe;

  beforeEach(() => {
    pipe = new UserNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform the name object into a readable name', () => {
    const expectedResult = 'Mr. Alaa Ahmad';

    const transformedName = pipe.transform({
      title: 'Mr',
      first: 'Alaa',
      last: 'Ahmad',
    });

    expect(transformedName).toEqual(expectedResult);
  });
});
