import * as core from "@actions/core";
import * as github from "@actions/github";
import { env } from "node:process";

try {
    const octokit = github.getOctokit(env.GH_TOKEN);
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
