import * as core from "@actions/core"
import * as github from "@actions/github"

try {
    const octokit = github.getOctokit("fake PAT");
    console.log(`Sanjay! octokit = ${JSON.stringify(octokit)}`);
} catch (error) {
    core.setFailed(error.message);
}
