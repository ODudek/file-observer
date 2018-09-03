const { Observer } = require('../src/index');
const config = require('../src/observer.conf');
const assert = require('assert');

describe('Observer', () => {
    const c = config;
    describe('General', () => {
        it('Should exists', () => {
            assert(typeof Observer === 'function');
        });
    });

    describe('Config', () => {
        it('Should have "files" key which is an Array', () => {
            assert(Array.isArray(c.files) === true);
        });
        it('Should have "command" key which is a string', () => {
            assert(typeof c.command === 'string');
        });
        it('Should have "clearAfterChange" key which is a boolean', () => {
            assert(typeof c.clearAfterChange === 'boolean');
        });
    });

    describe('Constructor', () => {
        it('Should be a constructor', () => {
            const observer = new Observer(c);
            assert(observer instanceof Observer);
        });
        it('Should store config', () => {
            const o = new Observer(c);
            assert(o.config === c);
        });
    });

    describe('Setup', () => {
        it('Should contains method "setup"', () => {
           const o = new Observer(c);
           assert(typeof o.setup === 'function');
        });
    });
});
