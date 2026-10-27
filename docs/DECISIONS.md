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
