/* Rebuild both approved themes, then refresh the single gallery. */
async function run(){await require('./build.cjs').build();await require('./build-dark.cjs').build();require('../settings-mockups/build.cjs').build();require('../persona-management/build.cjs').build();require('../own-ai-mockups/build.cjs').build();require('../flows-mockups/build.cjs').build();require('./gallery.cjs');}
run().catch(error=>{console.error(error);process.exitCode=1;});
