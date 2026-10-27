"""Typed public contract for predefined assessments."""

from enum import StrEnum

from pydantic import BaseModel, ConfigDict, Field


class ProgrammingLanguage(StrEnum):
    """Languages supported by an assessment."""

    PYTHON = "python"


class Difficulty(StrEnum):
    """Difficulty levels shown to candidates."""

    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"


class TaskType(StrEnum):
    """The kind of engineering work in an assessment."""

    DEBUGGING = "debugging"
    FEATURE_DEVELOPMENT = "feature_development"


class AssessmentMode(StrEnum):
    """Practice modes supported by the workspace."""

    ASSISTED_PRACTICE = "assisted_practice"
    TIMED = "timed"


class AssessmentPolicy(BaseModel):
    """Rules that the backend must enforce for an assessment session."""

    model_config = ConfigDict(extra="forbid")

    ai_assistance_allowed: bool
    progressive_hints_enabled: bool
    allowed_modes: list[AssessmentMode] = Field(min_length=1)


class Requirement(BaseModel):
    """One candidate-visible requirement that can receive a result later."""

    model_config = ConfigDict(extra="forbid")

    id: str = Field(min_length=1)
    title: str = Field(min_length=1)
    description: str = Field(min_length=1)
    points: int = Field(gt=0)
    order: int = Field(gt=0)


class AssessmentDefinition(BaseModel):
    """Candidate-visible metadata for a trusted predefined assessment.

    Reference solutions, hidden tests, and scoring implementation are
    deliberately not fields in this public model.
    """

    model_config = ConfigDict(extra="forbid")

    id: str = Field(min_length=1)
    title: str = Field(min_length=1)
    summary: str = Field(min_length=1)
    scenario: str = Field(min_length=1)
    language: ProgrammingLanguage
    difficulty: Difficulty
    task_type: TaskType
    duration_minutes: int = Field(gt=0)
    policy: AssessmentPolicy
    requirements: list[Requirement] = Field(min_length=1)
    starter_file_paths: list[str] = Field(min_length=1)


TASK_MANAGEMENT_ASSESSMENT = AssessmentDefinition(
    id="task-management-python-001",
    title="Task Management API: Complete the Missing Workflow",
    summary="Repair and extend a small task-management service with incomplete behavior.",
    scenario=(
        "You joined a team maintaining a task-management service. Several user-facing "
        "workflows are incomplete, and your job is to make the service behave according "
        "to the requirements without breaking existing functionality."
    ),
    language=ProgrammingLanguage.PYTHON,
    difficulty=Difficulty.INTERMEDIATE,
    task_type=TaskType.FEATURE_DEVELOPMENT,
    duration_minutes=45,
    policy=AssessmentPolicy(
        ai_assistance_allowed=True,
        progressive_hints_enabled=True,
        allowed_modes=[AssessmentMode.ASSISTED_PRACTICE, AssessmentMode.TIMED],
    ),
    requirements=[
        Requirement(
            id="task-create",
            title="Create tasks with valid data",
            description="Accept valid task data and reject missing or invalid fields.",
            points=30,
            order=1,
        ),
        Requirement(
            id="task-filter",
            title="Filter tasks by status",
            description="Return predictable results when tasks are filtered by status.",
            points=30,
            order=2,
        ),
        Requirement(
            id="task-update",
            title="Update task status safely",
            description="Update an existing task without silently changing unrelated fields.",
            points=40,
            order=3,
        ),
    ],
    starter_file_paths=[
        "app/main.py",
        "app/models.py",
        "app/task_service.py",
        "tests/test_tasks.py",
    ],
)
