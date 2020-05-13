const nodes = require('./exercise1.json')
const {
    expectedPaths,
    getPathsOf
} = require('./exercise1');

test('getPathsOf() return the right result given an object', () => {
    expect(getPathsOf(nodes)).toEqual(expectedPaths);
});