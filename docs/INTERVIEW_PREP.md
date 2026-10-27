# Interview preparation

## Why start with a health endpoint?

It is a small, observable check that the service can start and answer an HTTP request. It reduces unknowns before domain logic is introduced.

## Why separate frontend and backend?

They have different responsibilities and deployment concerns. A typed HTTP boundary lets each side evolve while keeping the contract explicit.

## Why must submitted code be isolated?

Submitted code is attacker-controlled input. Running it in the API process could expose secrets, consume resources, or modify the host. Isolation and resource limits are required before supporting arbitrary submissions.

## What is the purpose of a focused test?

It checks one behavior with a fast feedback loop. Focused tests make failures easier to understand and act as executable documentation.
