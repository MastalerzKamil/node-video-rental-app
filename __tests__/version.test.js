const version = require('../version');

describe('version test', () => {
  it('Check API version', () =>{
    const expectVersion = 'api_' + require('../package.json').version;

    expect(version).toEqual(expectVersion)
  });
});
