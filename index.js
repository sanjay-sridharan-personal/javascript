import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    // const octokit = github.getOctokit(core.getInput('gh_token'));
    const payload = github.context.payload;
    core.info(`payload = ${JSON.stringify(payload)}`)
} catch (error) {
    core.setFailed(error.message);
}
