// and iffe to keep everything wrapped up for now
(function(global) {

    /* 
        -should be placed in global context
        -will attach d$ object to global object
        -uses creational factory pattern to return various data structures
    */

        // delagator invokes factory function based on parameters
    const kds = function(type, array) {
        if (type === 'linkedList') return linkedListFactory(array);
    };
    
    // an object to hold our protos
    const protos = {};

    // destructuring
    let {}  = protos;

    // factory for linkedList node
    function llNodeFactory(value) {

    };
    // facory to create linkedList
    function linkedListFactory(array) {

    };
    // linkedList Protoype Methods:
    llProto = {};

    
    // currying to make it easier to invoke the function with presets:

        // preset: linkedList
    kds.ll = kds.bind(this, 'linkedList');

        // attaching our function/object to the global object so user can access
    global.d$ = kds;
    
} (this));