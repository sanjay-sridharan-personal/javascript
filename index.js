import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    core.debug(`Before: authenticate using ${github.token ? 'defined' : 'undefined'} token`);
    const octokit = github.getOctokit(github.token);
    core.debug(`After: ${octokit}`);
    const payload = github.context.payload;
    await octokit.rest.issues.addLabels({
        owner: `${payload.repository.owner.login}`,
        repo: `${payload.repository.name}`,
        issue_number: `${payload.number}`,
        labels: [ 'Needs Review' ]
    });
} catch (error) {
    core.setFailed(error.message);
}
