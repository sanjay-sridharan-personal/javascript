import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    const payload = github.context.payload;
    core.info(`payload = ${JSON.stringify(payload)}`);
    const prTitle = github.context.payload.pull_request.title;
    core.info(`prTitle = ${JSON.stringify(prTitle)}`);
    const expectedPrefix = 'Jira-';
    if (!prTitle.startsWith(expectedPrefix)) {
        const octokit = github.getOctokit(core.getInput('gh_token'));
        octokit.rest.issues.createComment({
            owner: payload.repository.owner.login,
            repo: payload.repository.name,
            issue_number: payload.number,
            body: `PR title should start with ${expectedPrefix}`
        });
    }
} catch (error) {
    core.setFailed(error.message);
}
