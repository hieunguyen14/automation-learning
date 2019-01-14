exports.config = {
    specs: [
        './LoginForm.js'
    ],
    host: 'localhost',
    port: 9515,
    path: '/',
    capabilities: [
        {
            browserName: 'chrome'
        }
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000, 
    },
    logLeve: 'verbose'
}