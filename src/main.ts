import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
    const token = core.getInput("TOKEN", { required: true });
    const client = github.getOctokit(token);
    const issues = client.issues.listLabelsForRepo();
    console.log(JSON.stringify(issues))
}

run();