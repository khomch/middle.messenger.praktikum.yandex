import * as proxyquire from 'proxyquire';
import { expect } from 'chai';
import * as sinon from 'sinon';
import type BlockType from './Block'

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
}

const { default: Block } = proxyquire('./Block', {
  './EventBus': {
    EventBus:  class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    }
  }
}) as { default: typeof BlockType };

describe.only('Block', () => {
  class ComponentMock extends Block {}

  it('should fire init event on initialization',  () => {
    new ComponentMock({});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });
});