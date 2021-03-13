import {Hello} from './Hello';

beforeEach(jest.resetAllMocks);

describe('test', () => {
  const hello = new Hello();

  it('just track', () => {
    // just spy to track, but not change the implementation
    const spiedGreeting = jest.spyOn(hello, 'sayGreeting');
    expect(() => hello.sayGreeting()).toThrow();
    expect(spiedGreeting).toBeCalled();
  })

  it('track and mock', () => {
    const spiedGreeting = jest.spyOn(hello, 'sayGreeting').mockReturnValue('hello');
    expect(hello.sayGreeting()).toBe('hello');
    expect(spiedGreeting).toBeCalled();
  })
})
