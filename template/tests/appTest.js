/*global YUI, app, authorsName */
/*jslint onevar: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true */
// Create new YUI instance, and populate it with the required modules
YUI().use('node', 'console', 'test', function(Y) {
  
  var unitTests, reporter;
  
  //
  // SUPPORT FUNCTIONS 
  //
  function authorsNameExists() {
    return ( "string" === typeof(authorsName) ) ? true : false;
  }

  function appInitExists() {
    return ( "function" === typeof(app.init) ) ? true : false;
  }

  unitTests = new Y.Test.Case({
 
    name: "Testing app implementation",

    setUp :
    function () {
      if ( appInitExists() ) {
        app.init();
      }
    },

    tearDown :
    function () {
    },

    "test that a global variable named authorsName exists" :
    function () {
      Y.assert( authorsNameExists(), "You need a global variable named authorsName defined in stack.js located in the src folder" );
    },

    "test that the variable authorsName follows the proper format" :
    function () {
      var re, sourceString;
      
      re = /^[A-Za-z\'\-]+\s+[A-Za-z\'\-]+/;
      sourceString = authorsNameExists() ? authorsName : "";
      
      Y.Assert.isNotNull( sourceString.match(re), "The variable authorsName must have a value of 'Yourfirstname Yourlastname' (insert your own name)" );
    },

    "test that function init is declared in the stack object" :
    function () {
      Y.assert( "function" === typeof(app.init), "You need a function that will allow users of your code to initialize a new app. This function must be in a app object, named init, and defined in app.js located in the src folder" );
      Y.Assert.areEqual( 0, app.init.length, "function init must have no input parameter" );
    }


  });

  function logResultsToServer(data){
    var testResults, serverReporter;

    testResults = Y.Test.Runner.getResults();
    serverReporter = new Y.Test.Reporter("http://nwghost.com/tdd-collector.php", Y.Test.Format.TAP);
    serverReporter.addField("authorsName", authorsNameExists() ? authorsName : "UNKNOWN AUTHOR");
    serverReporter.report(testResults);
  }

  reporter = new Y.Console({
      newestOnTop: false
  });  

  reporter.render("#testReport");
  Y.Test.Runner.add(unitTests);
  Y.Test.Runner.subscribe(Y.Test.Runner.COMPLETE_EVENT, logResultsToServer);
  Y.Test.Runner.run();
      
 });
