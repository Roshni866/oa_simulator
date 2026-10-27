# OA Simulator — Project Context

## Product goal

Help students prepare for software-engineering assessments through realistic coding and debugging tasks. A challenge should feel like a small engineering assignment rather than only an isolated algorithm puzzle.

## MVP scope

The first usable release will let a student browse predefined challenges, read requirements and starter code, edit code in a browser workspace, run controlled tests, see failures and a transparent score, and view submission history and basic progress.

AI hints are an optional later capability. The core experience must work without an AI provider.

## Proposed architecture

- `frontend/`: React + Vite + TypeScript + Tailwind CSS, with React Router and Monaco Editor introduced when needed.
- `backend/`: FastAPI HTTP API, Pydantic request/response models, service-layer business logic, and SQLAlchemy persistence.
- `backend/tests/`: pytest tests for API and domain behavior.
- `frontend/src/`: UI components, route screens, API client, and Vitest/React Testing Library tests.
- PostgreSQL is the target persistence database; local development may begin with in-memory or test doubles only where documented.
- A controlled runner will execute only trusted, predefined challenge test workflows. Arbitrary user code execution requires a separately designed sandbox.

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
