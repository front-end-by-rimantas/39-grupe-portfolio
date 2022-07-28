/**
 * @jest-environment jsdom
 */

import { Achievements } from "./Achievements.js";

describe('Blogi variantai', () => {
    test('Be parametru', () => {
        document.body.innerHTML = '';
        const ach = new Achievements();

        expect(ach.selector).toBe(undefined);
        expect(ach.data).toBe(undefined);
        expect(ach.DOM).toBe(null);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Selector is number', () => {
        document.body.innerHTML = '';
        const ach = new Achievements(5);

        expect(ach.selector).toBe(5);
        expect(ach.data).toBe(undefined);
        expect(ach.DOM).toBe(null);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Selector is empty string', () => {
        document.body.innerHTML = '';
        const ach = new Achievements('');

        expect(ach.selector).toBe('');
        expect(ach.data).toBe(undefined);
        expect(ach.DOM).toBe(null);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Selector is non-empty string', () => {
        document.body.innerHTML = '';
        const ach = new Achievements('#ach_block');

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toBe(undefined);
        expect(ach.DOM).toBe(null);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Selector is non-empty string', () => {
        document.body.innerHTML = '<div id="random"></div>';
        const ach = new Achievements('#ach_block');

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toBe(undefined);
        expect(ach.DOM).toBe(null);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Find target element', () => {
        document.body.innerHTML = '<div id="ach_block"></div>';
        const ach = new Achievements('#ach_block');

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toBe(undefined);
        expect(ach.DOM).not.toBe(null);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Data is number', () => {
        document.body.innerHTML = '<div id="ach_block"></div>';
        const data = 5;
        const ach = new Achievements('#ach_block', data);

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toBe(data);
        expect(ach.DOM).not.toBe(null);
        expect(ach.isValidData()).toBe(false);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Data is empty array', () => {
        document.body.innerHTML = '<div id="ach_block"></div>';
        const data = [];
        const ach = new Achievements('#ach_block', data);

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toBe(data);
        expect(ach.DOM).not.toBe(null);
        expect(ach.isValidData()).toBe(false);
        expect(ach.endedSuccesfully).toBe(false);
    })

    test('Data without valid items', () => {
        document.body.innerHTML = '<div id="ach_block"></div>';
        const correctData = [];
        const incorrectData = [1];
        const data = [...correctData, ...incorrectData];
        const ach = new Achievements('#ach_block', data);

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toStrictEqual(correctData);
        expect(ach.DOM).not.toBe(null);
        expect(ach.endedSuccesfully).toBe(true);
    })

    test('Data without valid items', () => {
        document.body.innerHTML = '<div id="ach_block"></div>';
        const correctData = [{
            icon: 'globe',
            number: 850,
            label: 'Happy customers',
        }];
        const incorrectData = [null, {}, [], 1, '', true, false];
        const data = [...correctData, ...incorrectData];
        const ach = new Achievements('#ach_block', data);

        expect(ach.selector).toBe('#ach_block');
        expect(ach.data).toStrictEqual(correctData);
        expect(ach.DOM).not.toBe(null);
        expect(ach.endedSuccesfully).toBe(true);
    })
})