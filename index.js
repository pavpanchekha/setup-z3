const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const exec = require('@actions/exec');

function z3URL(architecture, version) {
    let distribution = "ubuntu-16.04";
    let path = "https://github.com/Z3Prover/z3/releases/download/z3-" + version;
    let file = "z3-" + version + "-" + architecture + "-" + distribution + ".zip";
    return path + "/" + file;
}

(async function() {
    try {
        const architecture = core.getInput('architecture');
        const version = core.getInput('version');

        const url = z3URL(architecture, version);
        console.log(url);
        const path = await tc.downloadTool(url);
        const dir = await tc.extractZip(path, 'z3')
        const cachedPath = await tc.cacheDir(dir, 'z3', version);
        core.addPath(cachedPath + "/bin");
    } catch (error) {
        core.setFailed(error.message);
    }
})();
