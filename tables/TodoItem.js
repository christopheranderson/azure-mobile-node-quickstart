//TodoItem.js
// TodoItem.js
var todoTable = require('azure-mobile-apps').table('TodoItem');
// Export our table
module.exports = todoTable;

// The rest of this content isn't necessary for the quickstart to run, but show examples of how you could start customizing the tables.

//todoTable.columns = {"text":"string", "complete":"boolean"} //Dynamic schema will create these for us. It's on by default.
//todoTable.dynamicSchema = true; // this is the default setting

/*
todoTable.read(function(context){
  return context.execute();
});
*/
