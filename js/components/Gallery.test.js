/**
 * @jest-environment jsdom
 */

import { Gallery } from "./Gallery.js";

describe('Blogi variantai', () => {
    describe('Selector', () => {
        test('Be parametru', () => {
            const gallery = new Gallery();
            expect(gallery.selector).toBe(undefined);
            expect(gallery.data).toBe(undefined);
            expect(gallery.DOM).toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Selector as number', () => {
            const gallery = new Gallery(123);
            expect(gallery.selector).toBe(123);
            expect(gallery.data).toBe(undefined);
            expect(gallery.DOM).toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Selector as boolean', () => {
            const gallery = new Gallery(false);
            expect(gallery.selector).toBe(false);
            expect(gallery.data).toBe(undefined);
            expect(gallery.DOM).toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Selector as empty string', () => {
            const gallery = new Gallery('');
            expect(gallery.selector).toBe('');
            expect(gallery.data).toBe(undefined);
            expect(gallery.DOM).toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Selector as non-empty string, without target element', () => {
            document.body.innerHTML = ``;
            const gallery = new Gallery('#portfolio_block');

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toBe(undefined);
            expect(gallery.DOM).toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Selector as non-empty string, with target element', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const gallery = new Gallery('#portfolio_block');

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toBe(undefined);
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })
    })

    describe('Invalid data', () => {
        test('Data is a number', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const gallery = new Gallery('#portfolio_block', 555);

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toBe(555);
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Data is a null', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const gallery = new Gallery('#portfolio_block', null);

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toBe(null);
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Data is an object', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const gallery = new Gallery('#portfolio_block', {});

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toStrictEqual({});
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Data is an empty array', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const gallery = new Gallery('#portfolio_block', []);

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toStrictEqual([]);
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })
    })

    describe('Valid data', () => {
        test('Item is number', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const data = [1];
            const gallery = new Gallery('#portfolio_block', data);

            console.log(document.body.innerHTML);

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toStrictEqual(data);
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })

        test('Item is null', () => {
            document.body.innerHTML = `<div id="portfolio_block"></div>`;
            const data = [null];
            const gallery = new Gallery('#portfolio_block', data);

            console.log(document.body.innerHTML);

            expect(gallery.selector).toBe('#portfolio_block');
            expect(gallery.data).toStrictEqual(data);
            expect(gallery.DOM).not.toBe(null);
            expect(gallery.lightboxEnabled).toBe(false);
        })
    })
})


