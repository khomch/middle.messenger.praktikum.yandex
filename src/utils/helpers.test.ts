import { expect } from "chai";
import { set } from "./helpers";

describe('set function', () => {
  const keypath = 'test';
  const value = 'some value';

  let obj: Record<string, unknown>;

  beforeEach(() => {
    obj = {};
  })

  it ('should set a value by keypath to the object', () => {
    // arrange

    // act
    set(obj, keypath, value);

    // assert
    expect(obj).to.haveOwnProperty(keypath, value);
  });

  it ('should return original object', () => {
    const result = set(obj, keypath, value);
    obj['test2'] = 'another value'

    // assert
    expect(result).to.equal(obj);
  });

  it('should return original argument if it\'s not an object ',  () => {
    const argument = 'string';

    const result = set(argument, keypath, value);

    expect(result).to.eq(argument)

  });

  it('should throw an error if keypath is not a string',  () => {
    const keypathNotAString = 14;
    // @ts-ignore because we want to check behaviour in runtime
    const f = () => set(obj, keypathNotAString, value);

    expect(f).to.throw(Error)

  });
});