jest.autoMockOff();

describe('Index', function() {
  it('Make sure output is formatted correctly...', function() {
    var WinstonSumoLogic = require('../index');

    var d = new Date().toISOString();

    var transport = new WinstonSumoLogic({
      filename: 'error.log'
    });

    var output = d + ' INFO [project-name] {"some":"data","is":false}\n';

    expect(transport.formatOutput(d, "INFO", "project-name", { some: 'data', is: false })).toBe(output);
  });
});
