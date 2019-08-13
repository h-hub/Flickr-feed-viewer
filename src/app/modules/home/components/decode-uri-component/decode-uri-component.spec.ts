import { DecodeURIComponentPipe } from './decode-uri-component';

describe('TitleCasePipe', () => {

    let pipe = new DecodeURIComponentPipe();

    it('transforms URI', () => {
        expect(pipe.transform('http://localhost:3001/home?tag=abc')).toBe(decodeURIComponent('http://localhost:3001/home?tag=abc'));
    });
});

