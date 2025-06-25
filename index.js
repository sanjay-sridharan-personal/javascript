import * as core from "@actions/core";
import * as github from "@actions/github";

function addCommentToPR(comment, issue_number, repo, owner) {
    const retVal = {
        status: true,
        error: ''
    };

    try {
        const octokit = github.getOctokit(core.getInput('gh_token'));
        octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number,
            comment
        });
    }
    catch (error) {
        retVal.status = false;
        retVal.error = error.toString();
    }

    return retVal;
}

function getTitleOfPR(issue_number, repo, owner) {
    core.info(`Called getTitleOfPR(${issue_number}, ${repo}, ${owner})`);
    const retVal = {
        status: true,
        prTitle: '',
        error: ''
    };

    try {
        const octokit = github.getOctokit(core.getInput('gh_token'));
        core.info(`octokit = ${JSON.stringify(octokit)}`);
        const pr = octokit.rest.pulls.get({
            owner,
            repo,
            issue_number
        });
        core.info(`pr = ${JSON.stringify(pr)}`);
    }
    catch (error) {
        retVal.status = false;
        retVal.error = error.toString();
    }

    return retVal;
}

const {owner, repo, number} = github.context.issue;
getTitleOfPR(number, repo, owner);
