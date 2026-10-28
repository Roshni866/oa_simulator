import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { App } from './App'

describe('assessment catalog', () => {
  it('renders the task-management assessment and its practice policy', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /choose a practice scenario/i })).toBeInTheDocument()
    expect(screen.getByText(/task management api/i)).toBeInTheDocument()
    expect(screen.getByText(/ai-assisted practice/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view assessment/i })).toHaveAttribute(
      'href',
      '/assessments/task-management-python-001',
    )
  })
})
