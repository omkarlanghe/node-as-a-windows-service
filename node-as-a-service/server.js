let service = require('node-windows').Service;
let admin = require('node-windows');

admin.isAdminUser(function (isAdmin) {
    if (isAdmin) {
        console.log('The user has administrative privileges.');
        //create a new service object
        let svc = new service({
            name: '<client_name>_node_utility_production_live',
            description: 'node utility running as a windows service',
            script: '..\\modbus-util-instantaneous\\server.js' // Provide actual path of the node js utility and then run this script to register this utility as a window service 
        });
        // svc.user.domain = '';
        // svc.user.account = '';
        // svc.user.password = '';
        svc.on('install', function () {
            svc.start();
            console.log('utility configured successfully', svc.exists);
        });
        svc.install();

        // // To uninstall from windows services
        // svc.on('uninstall', function () {
        //     console.log('Uninstall complete.');
        //     console.log('The service exists: ', svc.exists);
        // });
        // // Uninstall the service.
        // svc.uninstall();
    } else {
        console.log('not an admin');
        // create a new service object

        let svc = new service({
            name: '<client_name>_utility_production_live',
            description: 'node utility running as a windows service',
            script: '..\\modbus-util-instantaneous\\server.js' // Provide actual path of the node js utility and then run this script to register this utility as a window service 
        });

        // svc.user.domain = '';
        // svc.user.account = '';
        // svc.user.password = '';

        svc.on('install', function () {
            svc.start();
            console.log('utility configured successfully');
        });

        svc.install();
        
        // // To uninstall from windows services

        // svc.on('uninstall', function () {
        //     console.log('Uninstall complete.');
        //     console.log('The service exists: ', svc.exists);
        // });

        // // Uninstall the service.
        // svc.uninstall();
    }
});
