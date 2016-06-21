import test from 'ava';
import Comb from 'csscomb';

const runCssComb = text => {
    const comb = new Comb(require('../config.json'));

    return comb.processString(text);
};

test('csscomb', t => {
    const text = 'body{background-color:#ff0000;}';
    const expected = 'body {\n    background-color: #f00;\n}\n';

    t.is(runCssComb(text), expected);
});
