# OA Simulator — Project Context

## Product goal

OA Simulator is an independent practice platform for AI-assisted, repository-based software engineering assessments. It is inspired by publicly reported candidate experiences, including assessments such as Optum TDP, but it is not an official Optum simulator and does not claim to reproduce any company's exact questions or scoring algorithm.

The product should teach candidates how to understand an unfamiliar codebase, interpret requirements, use an AI coding assistant effectively, implement changes, debug failures, and verify that their solution works.

## Target users

- Students preparing for software engineering assessments.
- Learners practicing debugging and feature-development tasks.
- Later, educators or mentors who want repeatable assessment practice.

## Product requirements

The eventual product must allow users to select a programming language, difficulty, task type, and duration. Candidates must be able to choose an assessment, open a starter repository with working and incomplete functionality, read progressive requirements, inspect and edit files, use a built-in AI assistant, run the application and automated tests, submit work, receive requirement-level results and a score, and learn from a protected reference solution after submission.

Each assessment must clearly state whether AI assistance is permitted. The platform will support assisted practice mode and a more realistic timed mode.

The initial assessment library is planned to contain:

1. A task-management application with incomplete features.
2. An employee leave-management application with validation and calculation bugs.
3. An issue-tracking API with incomplete endpoints and tests.

These are proposed practice scenarios, not confidential company assessment questions. We will build only the task-management assessment first and make it functional end to end before adding the other two.

Each assessment should eventually contain a starter repository, scenario, requirements, progressive tasks, verified reference solution, automated tests including protected hidden tests, scoring rubric, optional progressive hints, and a post-assessment explanation.

Generated assessments must be validated before practice availability. Model output is not automatically correct: validation must check that the task is coherent, the reference solution works, the tests are meaningful, and scoring criteria are usable. Reference solutions and hidden tests must remain protected until the appropriate stage.

The assessment workspace must provide a code editor, timer, and test results. Submission evaluation must use predefined, verified tests. After submission, the learner should receive scores, explanations, the reference solution at the appropriate stage, and improvement suggestions. Saved attempts and performance tracking are later-phase requirements.

## MVP scope

The first usable release focuses on one predefined Python task-management repository with incomplete functionality. This is the smallest useful vertical slice because it can exercise repository inspection, requirements, editing, tests, scoring, and feedback without requiring AI generation or multiple assessment templates.

The initial workflow will let a student open the task-management repository, read progressive tasks, edit files in a browser workspace, run controlled tests, see failures, submit a solution, and receive requirement-level results with a transparent score and basic feedback.

The built-in AI assistant will later explain files and functions, break requirements into steps, suggest or review changes, interpret failures, identify edge cases, and help verify suggestions. In practice mode it must not reveal the complete solution by default, and its behavior must respect the assessment's AI-assistance rules.

AI-generated assessments, saved attempts, performance tracking, and the second and third assessment scenarios are later capabilities. The core experience must work without an AI provider.

## Proposed architecture

- `frontend/`: React + Vite + TypeScript + Tailwind CSS, with React Router and Monaco Editor introduced when needed.
- `backend/`: FastAPI HTTP API, Pydantic request/response models, service-layer business logic, and SQLAlchemy persistence.
- `backend/tests/`: pytest tests for API and domain behavior.
- `frontend/src/`: UI components, route screens, API client, and Vitest/React Testing Library tests.
- PostgreSQL is the target persistence database; local development may begin with in-memory or test doubles only where documented.
- A controlled runner will execute only trusted, predefined challenge test workflows. Arbitrary user code execution requires a separately designed sandbox.
- An assessment-generation pipeline will validate model output before storing or publishing an assessment. Generation and validation belong in backend services, not frontend components.
- Evaluation will combine automated tests and explicit requirement checks. It will track completion, time spent, test results, and assistance usage while clearly separating objective measurements from AI-generated qualitative feedback.

## Core domain concepts

- Challenge: a realistic engineering task with requirements, starter code, tests, difficulty, and learning goals.
- Assessment session: a student's active attempt at one challenge.
- Submission: an immutable record of code, test results, score, and feedback.
- Hint: a progressive explanation that reveals guidance without immediately giving away the solution.

## Initial non-goals

- Public arbitrary code execution.
- Production authentication and billing.
- Kubernetes or microservices.
- An AI provider dependency for basic functionality.
- Treating model-generated reference solutions or tests as authoritative without validation.
- Claiming to reproduce a company's confidential assessment or exact scoring algorithm.
