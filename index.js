import * as core from "@actions/core";
import * as github from "@actions/github";
import { env } from "node:process";

try {
    const octokit = github.getOctokit(env.GH_TOKEN);
    const context = github.context;
    console.log(`Sanjay! octokit = ${JSON.stringify(octokit)}`);
} catch (error) {
    core.setFailed(error.message);
}
