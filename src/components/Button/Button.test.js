import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Button component', () => {
    it('should render an icon if image is provided', () => {
        render(<Button image='assets/logo/logo-gray.png' />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    
    it('should render with the text provided as children', () => {
        const text = 'Start';    
        render(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    })
    
    it('should call onClick function provided when clicked', () => {
        const clickFn = jest.fn();    
        render(<Button onClick={clickFn}>OK</Button>);
        userEvent.click(screen.getByRole('button'));
        expect(clickFn).toHaveBeenCalledTimes(1);
    })
})