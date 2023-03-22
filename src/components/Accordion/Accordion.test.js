import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Accordion from ".";

const title = 'Question';
const content = 'Answer'

describe('Accordion', () => {    
    beforeEach(() => {
        render(<Accordion title={title}>{content}</Accordion>)
    })
    
    it('should render a button with the question', () => {
        const button = screen.getByText(title);
        expect(button).toBeInTheDocument();
    })

    it('should not render the answer when mounted', () => {
        const answer = screen.queryByText(content);
        expect(answer).not.toBeInTheDocument();
    })

    it('should render the answer when button is clicked for the first time', () => {
        const button = screen.getByText(title);
        
        act(() => userEvent.click(button))

        const answer = screen.getByText(content);     
        expect(answer).toBeInTheDocument();
    })

    it('should not render the answer when button is clicked for the second time', () => {
        const button = screen.getByText(title);
        
        // first click, answer is displayed
        act(() => {
            userEvent.click(button);
        })

        // second click, answer is not displayed
        act(() => {
            userEvent.click(button);
        })

        const answer = screen.queryByText(content);     
        expect(answer).not.toBeInTheDocument();
    })
})