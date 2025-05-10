import * as core from "@actions/core";
import * as github from "@actions/github";
import { env } from "node:process";

try {
    const octokit = github.getOctokit(env.GH_TOKEN);
    const payload = github.context.payload;
    console.log(`payload = ${JSON.stringify(payload)}`);
    const { data: pullRequest } = await octokit.rest.pulls.get({
        owner: `${payload.repository.owner.login}`,
        repo: `${payload.repository.name}`,
        pull_number: `${payload.number}`
    });
    console.log(`pullRequest = ${JSON.stringify(pullRequest)}`);
} catch (error) {
    core.setFailed(error.message);
}
