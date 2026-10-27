# Roadmap

## Milestone 0 — Foundation and project rules

Acceptance criteria: repository and prerequisites inspected; shared documentation exists and agrees with the product requirements; a minimal FastAPI health endpoint has a passing test; Git status is understandable; the student reviews the checkpoint before Milestone 1.

## Milestone 1 — Frontend foundation and assessment catalog

Acceptance criteria: Vite app runs, routing works, a typed assessment catalog renders the task-management assessment with its mode and AI-assistance policy, and frontend tests cover the main catalog behavior.

## Milestone 2 — Task-management starter repository and workspace

Acceptance criteria: the task-management starter repository is represented as a trusted assessment fixture; the workspace shows scenario, progressive requirements, file navigation, editable files, timer/mode state, and explicit AI-assistance rules; frontend tests cover the main user flow.

## Milestone 3 — Assessment API and workspace integration

Acceptance criteria: the frontend reads assessment metadata, requirements, and starter files from typed FastAPI endpoints; API errors are represented in the UI; endpoint and contract tests exist; protected reference material is not returned.

## Milestone 4 — Controlled evaluation and requirement-level scoring

Acceptance criteria: the task-management assessment has explicit requirements, verified reference behavior, visible tests, protected hidden tests, and a scoring rubric; a controlled runner executes candidate work outside the main API process with bounded resources; results map to requirements; arbitrary submitted code is not run in-process.

## Milestone 5 — Submission results and learning feedback

Acceptance criteria: a submission produces immutable requirement-level results, score, test output, time spent, and objective metrics; post-submission feedback and the reference solution are revealed only at the configured stage; the UI distinguishes measured results from qualitative feedback.

## Milestone 6 — Built-in AI assistance

Acceptance criteria: the backend-only assistant can explain code, plan changes, interpret failures, identify edge cases, and review suggestions; assistance usage is tracked; practice-mode guidance is progressive and does not reveal the complete solution by default; provider failures are handled gracefully.

## Milestone 7 — PostgreSQL and attempt tracking

Acceptance criteria: migrations, models, persistence, saved attempts, time spent, test history, and assistance usage work in local development without exposing protected assessment materials.

## Milestone 8 — Assessment generation and validation

Acceptance criteria: users can request assessments by language, difficulty, task type, and duration; generated questions, starter code, reference solutions, hidden tests, scoring criteria, and hints pass deterministic validation before becoming available; failed validation prevents a ready state; protected materials are not returned at the wrong stage; provider failures leave the core product usable.

## Milestone 9 — Additional assessment scenarios and polish

Acceptance criteria: the leave-management and issue-tracking scenarios are added only after the first assessment is stable; progress metrics, loading/error/empty states, accessibility checks, and performance basics are covered.

## Milestone 10 — Final verification and delivery

Acceptance criteria: frontend/backend tests, documentation, deployment notes, and interview preparation are complete.
