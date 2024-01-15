/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/pages/home/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    // Modifica el selector para buscar un elemento <h2>
    const h2Heading = screen.getByRole('heading', {
      name: /your custom h2 text/i,
      level: 2,
    })

    // Asegúrate de que el elemento <h2> esté en el documento
    expect(h2Heading).toBeInTheDocument()
  })
})
