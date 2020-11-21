import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
    try {
        const token = core.getInput("TOKEN", { required: true });
        const client = github.getOctokit(token);
        console.log('token: ' + token);
        console.log('owner: ' + github.context.repo.owner);
        console.log('repo: ' + github.context.repo.repo);
        client.issues.listForRepo({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
        }).then(issues => {
            console.log(JSON.stringify(issues));
        });
    } catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}

run();