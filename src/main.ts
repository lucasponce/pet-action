import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
    const token = core.getInput("TOKEN", { required: true });
    const client = github.getOctokit(token);
    const issues = client.issues.listForRepo({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
    })
    console.log(JSON.stringify(issues))
}

run();