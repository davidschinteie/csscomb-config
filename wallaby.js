module.exports = function(wallaby) {
    return {
        files: [
            'config.json'
        ],

        tests: [
            'test/**/*.js'
        ],

        env: {
            type: 'node'
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['env']
            })
        },

        testFramework: 'ava'
    };
};
