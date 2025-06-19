import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    const octokit = github.getOctokit(core.getInput('gh_token'));
    const prTitle = github.context.payload.pull_request.title;
    core.info(`payload = ${JSON.stringify(prTitle)}`);
} catch (error) {
    core.setFailed(error.message);
}
