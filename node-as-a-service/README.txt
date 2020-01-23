Steps to Register Node App as a windows service https://www.npmjs.com/package/node-windows

**** PREREQUISITS: Node js should be installed on the machine, if not download and install from the given link : https://nodejs.org/en/download/ ****

1. Once node js is installed, run the below command : 

    * The recommended way to install node-windows is with npm, using the global flag:

        npm install -g node-windows

    * Then, in your project root, run:

        npm link node-windows

2. Copy paste this project to the directory where your node js utility is present. Generally it is prefered to put both "node-as-a-sevice" project and
    "Nodejs utility" in the same directory.

    "C:\Program Files\nodejs\..." should be the idle location for both.

3. Now your directory structure should look similar to this mentioned below : 
    * Inside "C:\Program Files\nodejs\ ", their should be two projects
        - Node Js utility project
        - node-as-a-service project

4. Open server.js present in this current project and make below mentioned changes in the script.

    Change the below object as per different clients

    let svc = new service({
        name: '<client_name>_node_utility_production_live', 
        description: 'node utility running as a windows service',
        script: '..\\modbus-util-instantaneous\\server.js' // Provide actual path of the node js utility and then run this script to register this utility as a window service. Give path mentioned in point 3 in this README.txt 
    });

5. After following the above points, before running ensure this project contains node-modules folder. If Not, then type "npm install"  from the command prompt where package.json file is located in this project

6. Now from the command prompt execute this script by typing "node server.js" from the directory where "server.js" file is located.

7. During execution, you will be prompted with several dialog boxes, click "Yes" for every dialog box which appears.

8. Once you registered node js utility successfully, you will get success message on your command prompt from where you exectuted this "server.js"

9. Now check your node utility is registed as a service and you can view your service from "services.msc" with the name and description you given in point number 4 in this README.txt.

10. Right click on your serives and choose Automation as a startup option in "services.msc"

11. For Administrative previlages and to know more, refer the following link : https://www.npmjs.com/package/node-windows

