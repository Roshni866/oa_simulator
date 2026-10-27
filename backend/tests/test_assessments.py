import pytest
from pydantic import ValidationError

from app.assessments import (
    AssessmentMode,
    TASK_MANAGEMENT_ASSESSMENT,
    AssessmentDefinition,
)


def test_task_management_contract_contains_candidate_visible_metadata() -> None:
    assessment = TASK_MANAGEMENT_ASSESSMENT

    assert assessment.language == "python"
    assert assessment.duration_minutes == 45
    assert assessment.policy.allowed_modes == [
        AssessmentMode.ASSISTED_PRACTICE,
        AssessmentMode.TIMED,
    ]
    assert sum(requirement.points for requirement in assessment.requirements) == 100
    assert "app/task_service.py" in assessment.starter_file_paths


def test_public_assessment_contract_rejects_unknown_fields() -> None:
    with pytest.raises(ValidationError):
        AssessmentDefinition(
            id="example",
            title="Example",
            summary="Example summary",
            scenario="Example scenario",
            language="python",
            difficulty="beginner",
            task_type="debugging",
            duration_minutes=30,
            policy={
                "ai_assistance_allowed": False,
                "progressive_hints_enabled": False,
                "allowed_modes": ["timed"],
            },
            requirements=[
                {
                    "id": "one",
                    "title": "One",
                    "description": "One requirement",
                    "points": 100,
                    "order": 1,
                }
            ],
            starter_file_paths=["app/main.py"],
            reference_solution="must-not-be-public",
        )
