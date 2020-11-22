import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
    try {
        const token = core.getInput("TOKEN", { required: true });
        const epicLabel = core.getInput("EPIC_LABEL");
        const subepicLabel = core.getInput("SUBEPIC_LABEL");
        const octokit = github.getOctokit(token);

        console.log('Fetching Epic issues with label [' + epicLabel + ']');
        const { data: epicIssues } = await octokit.issues.listForRepo({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            labels: epicLabel,
        });
        epicIssues.forEach(issue => {
            console.log('Epic #' + issue.number + ' - ' + issue.title);
        });

        console.log('Fetching Subepic issues with label [' + subepicLabel + ']');
        const { data: subepicIssues } = await octokit.issues.listForRepo({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            labels: subepicLabel,
        });
        subepicIssues.forEach(issue => {
            console.log('Epic #' + issue.number + ' - ' + issue.title);
        });

    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();