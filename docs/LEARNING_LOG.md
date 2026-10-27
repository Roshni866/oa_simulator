# Learning log

## Milestone 0

### Monorepo

A monorepo keeps related applications in one repository. Here, frontend and backend can evolve together while remaining separate deployable pieces.

### Health endpoint

A health endpoint is a tiny API route used to prove that the service starts and can answer requests. It is not a full system test, but it creates a stable first seam between the application and its environment.

### Contract

An API contract is the agreed shape of requests and responses between frontend and backend. We start with a simple response and will make contracts explicit with Pydantic models as the API grows.

### Controlled runner

A controlled runner is an isolated execution mechanism with limits on time, memory, filesystem, and network. It matters because submitted code is untrusted.

### Test client

FastAPI's test client lets a test send an HTTP request to the application in memory. This verifies route behavior without starting a separate server process, which keeps the first feedback loop fast.

### Repository

A repository is the project folder plus Git's history and tracking metadata. The working tree contains current files; commits record reviewable snapshots. This repository has been initialized, but it has no commit yet.

### Dependency

A dependency is software our project relies on, such as FastAPI or pytest. `backend/requirements.txt` declares the Python dependencies; it does not execute or install them.

### Configuration

Configuration controls how software runs without changing its source code. `pytest.ini` configures test discovery, while `.env.example` documents safe environment-variable names and placeholder values.

### Acceptance criteria

Acceptance criteria are observable conditions that must be true before a milestone or feature is complete. They keep generated code from being mistaken for verified behavior.

### Assessment validation

Assessment validation is the process of checking AI-generated questions, starter code, reference solutions, hidden tests, scoring criteria, and hints before learners can use them. Model output is a proposal, not proof of correctness.

### Vertical slice

A vertical slice is a small feature that crosses the important layers of a system. Our first slice will connect one task-management assessment, its API data, the workspace, controlled evaluation, scoring, and feedback before we broaden the assessment library.

### Fixture

A fixture is controlled data prepared for repeatable tests or development. The first assessment will use a trusted starter-repository fixture rather than model-generated files.

### Objective versus qualitative feedback

Objective feedback comes from measurable checks such as test results, requirement checks, completion, and time. Qualitative feedback is explanatory guidance, including AI suggestions. Keeping them separate prevents generated text from being mistaken for proof of correctness.

### Pydantic model

A Pydantic model is a Python class that validates structured data at runtime. Our assessment contract uses it to reject missing, invalid, or unexpected fields before data crosses the API boundary.

### Public contract versus protected data

The public contract contains information the candidate may see, such as requirements and starter-file paths. Reference solutions, hidden tests, and scoring implementation are intentionally not fields in that public model.
