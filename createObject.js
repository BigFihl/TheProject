define(['../object/mixIn'], function(mixIn){

	//create new object in function

    function createObject(parent, props){
        function F(){}
        F.prototype = parent;
        return mixIn(new F(), props);
	console.log('the object has been avaliable');

    }
    return createObject;
});

