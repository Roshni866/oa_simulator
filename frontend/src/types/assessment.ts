export type ProgrammingLanguage = 'python'
export type Difficulty = 'beginner' | 'intermediate'
export type TaskType = 'debugging' | 'feature_development'
export type AssessmentMode = 'assisted_practice' | 'timed'

export interface AssessmentPolicy {
  aiAssistanceAllowed: boolean
  progressiveHintsEnabled: boolean
  allowedModes: AssessmentMode[]
}

export interface Requirement {
  id: string
  title: string
  description: string
  points: number
  order: number
}

export interface AssessmentDefinition {
  id: string
  title: string
  summary: string
  scenario: string
  language: ProgrammingLanguage
  difficulty: Difficulty
  taskType: TaskType
  durationMinutes: number
  policy: AssessmentPolicy
  requirements: Requirement[]
  starterFilePaths: string[]
}
