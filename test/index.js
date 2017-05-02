'use strict';

import test from 'ava';
import Comb from 'csscomb';

const runCssComb = text => {
    const comb = new Comb(require('../config.json'));

    return comb.processString(text);
};

test('csscomb', async t => {
    const text = 'body{background-color:#ff0000;}';
    const expected = 'body {\n    background-color: #f00;\n}\n';

    t.is(await runCssComb(text), expected);
});
