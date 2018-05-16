
require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'features/step_definitions',
        '--format', 'json:cucumberReport/cucumber.json',
        'features'
    ]
});

module.exports = {
    custom_assertions_path: 'custom_asserts',
    custom_commands_path: 'custom_commands',
    output_folder: 'reports',
    page_objects_path: 'pages',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process : false,
        server_path: './bin/selenium-server-standalone-3.12.0.jar',
        log_path: ''
    },
    appium : {
        start_process : true,
    },
    test_settings: {
        default: {
            // selenium_port: 4444,
            // selenium_host: "127.0.0.1",
            launch_url: "http://google.com",
            silent: true,
            screenshots: {
                enabled: false,
                path: "",
                on_failure: true,
                on_error: true},
            desiredCapabilities: {
            }
        },
        ios: {
            launch_url: "http://google.com",
            selenium_port: 4723,
            // automationName: "XCUITest",
            desiredCapabilities: {
                automationName: "XCUITest",
                startIWDP: true,
                isHeadles: true,
                browserName: "Safari",
                platformName: "iOS",
                platformVersion: "11.2",
                deviceName: "iPad Pro (9.7-inch)"
            }
        }
    }
};



