# OA Simulator Engineering Guide

OA Simulator is a learning-focused web application for realistic software-engineering assessment tasks. The repository is a beginner-friendly monorepo: the React client lives in `frontend/`, the FastAPI service lives in `backend/`, and shared project knowledge lives in `docs/`.

## Source of truth

- Product scope and architecture: `PROJECT_CONTEXT.md`
- Delivery plan: `docs/ROADMAP.md`
- Current state and next task: `docs/PROGRESS.md`
- Concepts learned: `docs/LEARNING_LOG.md`
- Architecture decisions: `docs/DECISIONS.md`
- File responsibilities: `docs/FILE_GUIDE.md`
- Interview preparation: `docs/INTERVIEW_PREP.md`

When these documents disagree, update them together and treat this file as the repository-wide engineering rulebook.

## Architecture rules

- Keep presentation, business logic, API routes, and persistence responsibilities separate.
- Use TypeScript types in the frontend and Python type hints in the backend.
- Keep the first version modular but small; do not add infrastructure without a concrete requirement.
- Submitted code is untrusted. Never execute it inside the main backend process.
- AI credentials belong only on the backend. The application must remain useful when AI is unavailable.
- AI-generated assessments are untrusted content until they pass validation. Reference solutions, hidden tests, and scoring rules must be protected from premature exposure.

## Development standards

- Prefer focused functions, clear names, explicit validation, and explicit error handling.
- Add or update tests for behavior changes.
- Preserve unrelated user work; never use destructive Git commands without explicit approval.
- Keep secrets out of source control. Add new environment variables to `.env.example` with safe placeholder values.
- Do not claim a test passed unless it was run successfully.
- Do not mark an assessment feature complete until its acceptance criteria and validation behavior have been verified.

## Workflow

1. Read this file, `docs/ROADMAP.md`, and `docs/PROGRESS.md` before changing code.
2. Inspect relevant files and Git status.
3. Make one small, reviewable change.
4. Run focused tests and record the actual result.
5. Update progress and learning notes before handing the checkpoint back.
6. Explain the diff and suggest a meaningful commit; ask before committing.

## Verification commands

Backend commands are run from `backend/`:

```powershell
pytest
python -m uvicorn app.main:app --reload
```

Frontend commands will be added when the Vite application is created.
