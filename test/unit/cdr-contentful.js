import CedarContentful from '../../src/cdr-contentful';

describe('CedarContentful', () => {
  let cedarContentful;

  beforeEach(() => {
    cedarContentful = new CedarContentful();
  });

  describe('Greet function', () => {
    beforeEach(() => {
      spy(cedarContentful, 'greet');
      spy(cedarContentful.client, 'space');
      cedarContentful.greet();
    });

    it('should have been run once', () => {
      expect(cedarContentful.greet).to.have.been.calledOnce;
    });

    it('should call space', () => {
      expect(cedarContentful.client.space).to.have.been.calledOnce;
    });
  });
});
