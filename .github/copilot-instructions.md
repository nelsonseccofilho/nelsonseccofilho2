# Copilot Repository Instructions

Follow `planning/PROJECT_RULES.md` as the detailed source of truth for product, engineering, validation, documentation and Git workflow rules.

## Mandatory Git Finalization Workflow

Before every commit, Copilot Chat must:

1. Verify working-tree scope.
2. Identify which files belong to the current implementation unit.
3. Keep unrelated changes out of the stage.
4. Keep production implementation and unrelated documentation changes in separate commits when they represent different logical units.
5. Inspect staged filenames with a read-only Git command.
6. Inspect the complete staged diff.
7. Review the staged diff for accidental files, unrelated refactors, secrets or credentials, local configuration, debug code, fake links/routes/data, unintended content claims, test regressions, styling hacks and scope violations.
8. Do not commit if a concrete defect or unexpected staged file is found.
9. Commit only after the staged diff passes review.
10. After commit, run `git status --short` and verify that only intentionally deferred changes remain.
11. Before a second commit, repeat the staged-file and staged-diff verification process.
12. At the end, verify the working tree is clean or explicitly explain every remaining file.
13. Never run `git push` unless the user explicitly requests it.
14. Never stage or expose `.vscode/mcp.json`, API keys, bearer tokens, credentials, environment secrets or equivalent local configuration.

## Command Context

Whenever commands are presented to the user, explicitly identify their context as one of: GIT, NPM or RUN DEV. Do not present an unlabeled terminal command when the user is expected to execute it.

## PowerShell Commands

When asking the user to manually execute PowerShell commands, provide one command at a time. Do not stack multiple commands in the same block. Wait for the result before giving the next command when verification depends on the previous result.

When Copilot itself is executing an approved automated workflow, sequential commands may be executed internally, but the final report must identify what was run.

## Validation Before Git

For implementation units, follow the detailed workflow in `planning/PROJECT_RULES.md`: scope verification, production-code review, test review, integration review, CSS/style review when applicable, `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`, RUN DEV visual QA when UI is affected, Git staged-file review, staged-diff review, commit and post-commit status verification.

## Visual QA

Never claim visual QA passed without rendered browser evidence. Automated DOM measurements can support visual QA, but they do not authorize inventing visual conclusions that were not actually inspected.

## Git Write Safety

Do not automatically execute `git add`, `git commit`, `git push`, `git reset`, `git checkout` or `git restore` unless the current workflow explicitly authorizes that Git write operation. A previous authorization for one implementation unit does not automatically authorize unrelated future Git writes.

## Commit Scope

Prefer one coherent logical change per commit. Implementation with directly associated tests/styles may be one commit. Planning or process documentation should normally be separate when it represents a different concern. Unrelated cleanup must not be silently included.

## Stop Conditions

Stop before committing and report the issue if unexpected files are staged, tests/typecheck/lint/build fail, visual QA reveals a concrete defect, secrets are detected, scope expands beyond the approved task, documentation and production changes become unintentionally mixed, or the staged diff differs materially from the reviewed implementation.