//getting app module form src/index.js and passing to hello.js
export default ngModule => {
    require('./hello').default(ngModule);
};