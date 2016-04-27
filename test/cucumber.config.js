exports.config = {
    framework: 'cucumber',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    cucumberOpts: {
        require: ['step_definitions/*/*_steps.js', 'step_definitions/hooks/*.js'],
        format: 'pretty'
    },
    seleniumServerJar: 'selenium/selenium-server-standalone-2.53.0.jar'
};