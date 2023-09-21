const core = require("@actions/core")
const github = require("@actions/github");
const { error } = require("./dist");


try {
    throw new error('some error message')
    core.debug("Debug Message");
    core.warning("waning message");
    core.error("Error message");


    const name = core.getInput('who_to_greet');

    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.exportVariable("HELLO_TIME", time);

    core.startGroup("Logging github context");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();

}   catch(error) {
    core.setFailed(error.message);
}
