import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom'
import Heading from './Heading'
import { HeadingProps } from './Heading.types'

describe('Heading Component', () => {
    const defaultProps: HeadingProps = {
        children: <div>Test Heading</div>,
        seeAll: false,
        customClass: '',
        onClick: vi.fn(),
    }

    it('renders children correctly', () => {
        render(<Heading {...defaultProps} />)
        expect(screen.getByText('Test Heading')).toBeInTheDocument()
    })

    it('applies custom class correctly', () => {
        render(<Heading {...defaultProps} customClass="custom-class" />)
        expect(screen.getByText('Test Heading').parentElement).toHaveClass('custom-class')
    })

    it('does not render "See All" button when seeAll is false', () => {
        render(<Heading {...defaultProps} seeAll={false} />)
        expect(screen.queryByText('See All')).not.toBeInTheDocument()
    })

    it('renders "See All" button when seeAll is true', () => {
        render(<Heading {...defaultProps} seeAll={true} />)
        expect(screen.getByText('See All')).toBeInTheDocument()
    })

    it('calls onClick when "See All" button is clicked', () => {
        const handleClick = vi.fn()
        render(<Heading {...defaultProps} seeAll={true} onClick={handleClick} />)
        fireEvent.click(screen.getByText('See All'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})