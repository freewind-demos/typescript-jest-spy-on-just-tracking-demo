import {Hello} from './Hello';

beforeEach(jest.resetAllMocks);

describe('test', () => {
  const hello = new Hello();
  it('no spy', () => {
    const greeting = hello.sayGreeting()
    expect(greeting).toBe('Hello, Jest!');
  })

  it('spy', () => {
    jest.spyOn(hello, 'getName').mockReturnValue('mockedName');
    const greeting = hello.sayGreeting();
    expect(greeting).toBe('Hello, mockedName!');
  })
})
