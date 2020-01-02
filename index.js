const core = require('@actions/core');
const github = require('@actions/github');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');

try {
    // `who-to-greet` input defined in action metadata file
    const architecture = core.getInput('architecture');
    const version = core.getInput('version');

    const path = await tc.downloadTool(z3URL(architecture, version));
    await exec.exec("unzip", [path]);
    core.addPath(path.replace(/\.zip$/, "/bin"))
} catch (error) {
    core.setFailed(error.message);
}
