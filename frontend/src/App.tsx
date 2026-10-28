import { Link, Route, Routes } from 'react-router-dom'

import { assessments } from './data/assessments'
import type { AssessmentDefinition } from './types/assessment'

function AssessmentCard({ assessment }: { assessment: AssessmentDefinition }) {
  return (
    <article className="assessment-card">
      <div className="card-heading">
        <span className="eyebrow">{assessment.language} · {assessment.taskType.replace('_', ' ')}</span>
        <span className="difficulty">{assessment.difficulty}</span>
      </div>
      <h2>{assessment.title}</h2>
      <p>{assessment.summary}</p>
      <div className="card-meta">
        <span>{assessment.durationMinutes} minutes</span>
        <span>{assessment.requirements.length} requirements</span>
        <span>{assessment.policy.aiAssistanceAllowed ? 'AI-assisted practice' : 'No AI assistance'}</span>
      </div>
      <Link className="primary-button" to={`/assessments/${assessment.id}`}>
        View assessment
      </Link>
    </article>
  )
}

function CatalogPage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <span className="eyebrow">REAL-WORLD ENGINEERING ARENA</span>
        <h1>Practice the work behind the interview.</h1>
        <p>
          Explore repository-based assessments designed to help you understand unfamiliar code,
          implement requirements, and verify your changes.
        </p>
      </section>
      <section aria-labelledby="catalog-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ASSESSMENT LIBRARY</span>
            <h2 id="catalog-heading">Choose a practice scenario</h2>
          </div>
          <span className="status-pill">{assessments.length} available</span>
        </div>
        <div className="assessment-grid">
          {assessments.map((assessment) => <AssessmentCard key={assessment.id} assessment={assessment} />)}
        </div>
      </section>
    </main>
  )
}

function AssessmentOverviewPage() {
  const assessment = assessments[0]

  return (
    <main className="page-shell overview-page">
      <Link className="back-link" to="/">← Back to assessment library</Link>
      <span className="eyebrow">ASSESSMENT OVERVIEW</span>
      <h1>{assessment.title}</h1>
      <p className="lead">{assessment.scenario}</p>
      <div className="overview-grid">
        <section className="panel">
          <h2>Requirements</h2>
          <ol className="requirement-list">
            {assessment.requirements.map((requirement) => (
              <li key={requirement.id}>
                <div>
                  <strong>{requirement.title}</strong>
                  <p>{requirement.description}</p>
                </div>
                <span>{requirement.points} pts</span>
              </li>
            ))}
          </ol>
        </section>
        <aside className="panel policy-panel">
          <h2>Practice policy</h2>
          <p>{assessment.policy.aiAssistanceAllowed ? 'AI assistance is allowed in this practice assessment.' : 'AI assistance is not allowed.'}</p>
          <p>Available modes: {assessment.policy.allowedModes.map((mode) => mode.replace('_', ' ')).join(' and ')}.</p>
          <p>Reference solutions and hidden tests are revealed only after submission.</p>
          <button className="primary-button" type="button" disabled>
            Open workspace · coming next
          </button>
        </aside>
      </div>
    </main>
  )
}

export function App() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/">OA Simulator</Link>
        <span>Build confidence in unfamiliar codebases.</span>
      </header>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/assessments/:assessmentId" element={<AssessmentOverviewPage />} />
      </Routes>
    </>
  )
}
