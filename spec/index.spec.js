import install from 'jasmine-es6';
import { Observer } from '../src/index';
import config from '../src/observer.conf';

install();

describe('Observer', () => {
    const c = config;
    describe('General', () => {
        it('Should exists', () => {
            expect(Observer).toBeDefined();
            expect(Observer).not.toBeNull();
        });
    });

    describe('Config', () => {
        it('Should have "files" key which is an Array', () => {
            expect(Array.isArray(c.files)).toBeTruthy()
        });
        it('Should have "command" key which is a string', () => {
            expect(typeof c.command).toBe('string');
        });
    });

    describe('Constructor', () => {
        it('Should be a constructor', () => {
            const observer = new Observer(c);
            expect(observer instanceof Observer).toBeTruthy();
        });
        it('Should store config', () => {
            const o = new Observer(c);
            expect(o.config).toBe(c);
        });
    });

    describe('Setup', () => {
        it('Should contains method "setup"', () => {
           const o = new Observer(c);
           expect(typeof o.setup).toBe('function');
        });
    });
})
