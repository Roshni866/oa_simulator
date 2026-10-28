import type { AssessmentDefinition } from '../types/assessment'

export const taskManagementAssessment: AssessmentDefinition = {
  id: 'task-management-python-001',
  title: 'Task Management API: Complete the Missing Workflow',
  summary: 'Repair and extend a small task-management service with incomplete behavior.',
  scenario:
    'You joined a team maintaining a task-management service. Several user-facing workflows are incomplete, and your job is to make the service behave according to the requirements without breaking existing functionality.',
  language: 'python',
  difficulty: 'intermediate',
  taskType: 'feature_development',
  durationMinutes: 45,
  policy: {
    aiAssistanceAllowed: true,
    progressiveHintsEnabled: true,
    allowedModes: ['assisted_practice', 'timed'],
  },
  requirements: [
    {
      id: 'task-create',
      title: 'Create tasks with valid data',
      description: 'Accept valid task data and reject missing or invalid fields.',
      points: 30,
      order: 1,
    },
    {
      id: 'task-filter',
      title: 'Filter tasks by status',
      description: 'Return predictable results when tasks are filtered by status.',
      points: 30,
      order: 2,
    },
    {
      id: 'task-update',
      title: 'Update task status safely',
      description: 'Update an existing task without silently changing unrelated fields.',
      points: 40,
      order: 3,
    },
  ],
  starterFilePaths: [
    'app/main.py',
    'app/models.py',
    'app/task_service.py',
    'tests/test_tasks.py',
  ],
}

export const assessments: AssessmentDefinition[] = [taskManagementAssessment]
