import * as core from "@actions/core"
import * as github from "@actions/github"

try {
    const octokit = github.getOctokit(core.getInput("GH_PAT"));
    console.log(`Sanjay!! octokit = ${JSON.stringify(octokit)}`);
} catch (error) {
    core.setFailed(error.message);
}
