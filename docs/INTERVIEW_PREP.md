# Interview preparation

## Why start with a health endpoint?

It is a small, observable check that the service can start and answer an HTTP request. It reduces unknowns before domain logic is introduced.

## Why separate frontend and backend?

They have different responsibilities and deployment concerns. A typed HTTP boundary lets each side evolve while keeping the contract explicit.

## Why must submitted code be isolated?

Submitted code is attacker-controlled input. Running it in the API process could expose secrets, consume resources, or modify the host. Isolation and resource limits are required before supporting arbitrary submissions.

## What is the purpose of a focused test?

It checks one behavior with a fast feedback loop. Focused tests make failures easier to understand and act as executable documentation.

## Why should AI-generated assessments be validated?

Because model output is probabilistic. A generated reference solution may be wrong, hidden tests may be incomplete, and scoring rules may conflict with the requirements. Validation turns generated content into a candidate that must satisfy explicit checks before publication.

## What is the difference between a dependency and configuration?

A dependency is software the project uses, such as FastAPI. Configuration tells that software how to behave, such as pytest's test directory in `pytest.ini` or environment-variable names in `.env.example`.

## Why build one assessment end to end before adding three?

One vertical slice exposes integration problems early. Once the task-management workflow is stable, its contracts and components can be reused for leave-management and issue-tracking scenarios.

## Why separate objective scores from AI feedback?

Tests and explicit requirement checks are reproducible evidence. AI explanations can be helpful but may be incorrect, so they should supplement—not define—the score.

## Why have assisted and timed modes?

Assisted practice supports learning with explanations and progressive hints. Timed mode tests independent execution under realistic constraints. The policy must be enforced by the backend, not only displayed in the UI.
