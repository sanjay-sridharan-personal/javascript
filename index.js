import * as core from "@actions/core";
import * as github from "@actions/github";
import { env } from "node:process";

try {
    if (env.GH_TOKEN) {
        console.log(`Sanjay! env.GH_TOKEN is truthy: ${env.GH_TOKEN[0]}`);
    } else {
        console.log(`Sanjay! env.GH_TOKEN is falsy: ${env.GH_TOKEN}`);
    }
    const octokit = github.getOctokit(process.env.GH_TOKEN);
    console.log(`Sanjay! octokit = ${JSON.stringify(octokit)}`);
} catch (error) {
    core.setFailed(error.message);
}
