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
