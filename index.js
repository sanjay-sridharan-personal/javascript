import * as core from "@actions/core";
import * as github from "@actions/github";
import process from "node:process";

try {
    const octokit = github.getOctokit(process.env.GH_TOKEN);
    console.log(`Sanjay! octokit = ${JSON.stringify(octokit)}`);
} catch (error) {
    core.setFailed(error.message);
}
