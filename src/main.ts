import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
    try {
        const token = core.getInput("TOKEN", { required: true });
        const epicLabel = core.getInput("EPIC_LABEL");
        const subepicLabel = core.getInput("SUBEPIC_LABEL");
        const octokit = github.getOctokit(token);

        octokit.issues.listForRepo({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            state: 'closed',
        }).then(response => {
            response.data.forEach(issue => {
                console.log('issue #' + issue.number + ' - ' + issue.title);
            });
        });
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();