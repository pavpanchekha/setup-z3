const core = require('@actions/core');
const github = require('@actions/github');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');

function z3URL(architecture, version) {
    let distribution = "ubuntu-16.04";
    let path = "https://github.com/Z3Prover/z3/releases/download/z3-" + version;
    let file = "z3- " + version + "-" + architecture + "-" + distribution + ".zip";
    return path + "/" + file;
}

(async function() {
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
})();
