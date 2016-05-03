exports.config = {
    framework: 'cucumber',
    cucumberOpts: {
        require: ['step_definitions/*/*_steps.js', 'step_definitions/hooks/*.js'],
        format: 'pretty'
    },
    seleniumServerJar: 'selenium/selenium-server-standalone-2.53.0.jar'
};