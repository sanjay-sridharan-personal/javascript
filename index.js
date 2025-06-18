import * as core from "@actions/core";
import * as github from "@actions/github";

try {
    const octokit = github.getOctokit(github.token);
    const payload = github.context.payload;
    await octokit.rest.issues.addLabels({
        owner: `${payload.repository.owner.login}`,
        repo: `${payload.repository.name}`,
        issue_number: `${payload.number}`,
        labels: [ "Needs Review" ]
    });
} catch (error) {
    core.setFailed(error.message);
}
