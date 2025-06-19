import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    const payload = github.context.payload;
    core.info(`payload = ${JSON.stringify(payload)}`);
    const prTitle = github.context.payload.pull_request.title;
    core.info(`prTitle = ${JSON.stringify(prTitle)}`);
    if (!prTitle.startWith('Jira-')) {
        const octokit = github.getOctokit(core.getInput('gh_token'));
        octokit.rest.pulls.createReviewComment({
        });
    }
} catch (error) {
    core.setFailed(error.message);
}
