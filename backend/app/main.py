"""HTTP entry point for the OA Simulator backend."""

from fastapi import FastAPI


app = FastAPI(title="OA Simulator API", version="0.1.0")


@app.get("/health")
def health() -> dict[str, str]:
    """Report whether the API process is running."""

    return {"status": "ok"}
