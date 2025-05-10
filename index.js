import * as core from "@actions/core";
import * as github from "@actions/github";
import { env } from "node:process";

try {
    const octokit = github.getOctokit(env.GH_TOKEN);
    // const context = github.context;
    // console.log(`Sanjay! octokit = ${JSON.stringify(octokit)}`);
    const { data: pullRequest } = await octokit.rest.pulls.get({
        owner: 'sanjay-sridharan-personal',
        repo: 'happy-birthday',
        pull_number: 22,
        mediaType: {
          format: 'diff'
        }
    });

    console.log(pullRequest);
} catch (error) {
    core.setFailed(error.message);
}
