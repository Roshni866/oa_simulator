# Architecture decisions

## 0001 — Use a small monorepo

- Status: accepted
- Decision: keep `frontend/`, `backend/`, and project documentation in one repository.
- Reason: this makes the learning path and cross-stack changes easy to follow without introducing a second repository.
- Trade-off: frontend and backend release workflows are coupled initially.

## 0002 — Start with a backend health seam

- Status: accepted
- Decision: begin with one FastAPI health route and one test before adding domain features.
- Reason: it verifies the Python service boundary with minimal code.
- Trade-off: it provides little product functionality by itself; Milestone 1 adds the first user-facing feature.

## 0003 — No in-process execution of submissions

- Status: accepted
- Decision: never execute arbitrary submitted code inside the main API process.
- Reason: a web request must not be able to compromise the service or host.
- Trade-off: a later runner needs isolation design and operational work.

## 0004 — Validate generated assessments before publication

- Status: accepted direction; implementation pending
- Decision: AI-generated assessments must pass validation before they become available for practice.
- Reason: language models can produce incomplete requirements, incorrect reference solutions, weak tests, or inconsistent scoring criteria.
- Trade-off: generation becomes a pipeline with validation and failure states instead of a single provider call, but the result is safer and more trustworthy.

## 0005 — Build the task-management assessment first

- Status: proposed for review
- Decision: make a task-management application with incomplete features the first end-to-end assessment.
- Reason: it is easier to explain and can cover repository inspection, progressive requirements, editing, testing, scoring, and feedback before we add multiple scenarios or AI generation.
- Alternatives considered: leave-management is useful for validation and calculation bugs but introduces more domain rules; issue-tracking is a good API exercise but is less representative of a full repository workspace for the first slice.
- Trade-off: the first assessment will not cover every type of engineering task, but it gives us a stable vertical slice to reuse.

## 0006 — Separate measured evaluation from AI feedback

- Status: proposed for review
- Decision: automated tests and explicit requirement checks determine correctness and score; AI-generated explanations and suggestions are presented separately as qualitative feedback.
- Reason: AI feedback can be useful but is not a reliable source of truth.
- Trade-off: the product needs two feedback models and a clear UI distinction, but candidates can understand what was objectively verified.

## 0007 — Support assisted practice and timed mode

- Status: proposed for review
- Decision: every assessment declares whether AI assistance is allowed, and the workspace supports both assisted practice and a timed mode.
- Reason: learners need a safe mode for learning and a constrained mode for realistic practice.
- Trade-off: mode and assistance policy must be enforced across UI, API, logging, and result disclosure rather than treated as display-only settings.

## 0008 — Define the assessment contract before the UI

- Status: accepted
- Decision: define and validate the backend assessment contract before scaffolding the catalog UI.
- Reason: the frontend and future AI generator need a stable vocabulary for requirements, duration, modes, language, task type, and assistance policy.
- Trade-off: the first step produces little visible UI, but it reduces duplicated assumptions between frontend and backend.
