import Router from "./Router";
import { expect } from "chai";
import { ComponentConstructable } from "./Route";
import sinon = require("sinon");


describe.only('Router', () => {

  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window?.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  };

  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window?.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  }

  const getContentFake = sinon.fake.returns(document.createElement('div'))

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as ComponentConstructable<any>;

  describe('.use()', () => {
    it('should return Router instance', () => {
      const result = Router.use('/', BlockMock)

      expect(result).to.eq(Router)
    })
  })

  describe('.back()', () => {
    it('should render a page on history backward', () => {
      window.location.pathname = '/profile';

      Router
        .use('/', BlockMock)
        .use('/profile', BlockMock)
        .start();

      Router.back();

      expect(getContentFake.callCount).to.eq(1);
    })

    describe('.start()', () => {
      it('should render a page on start', () => {
        Router
          .use('/', BlockMock)
          .start();

        expect(getContentFake.callCount).to.eq(1);
      })
      }
    )

  })
})