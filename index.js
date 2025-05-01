import * as core from "@actions/core";
import * as github from "@actions/github";

function testMessage(element) {
    const commitHeader = "Our convention:";
    if (element.message.startsWith(commitHeader)) {
        console.log("Commit message complies with our convention");
    } else {
        const error = new Error(`Commit does not start with ${commitHeader}\n${element.message}`);
        console.log(`ERROR: ${error.message}`);
        throw error;
    }
}

try {
    const commits = github.context.payload.commits;
    commits.forEach((element) => testMessage(element));
} catch (error) {
    core.setFailed(error.message);
}
