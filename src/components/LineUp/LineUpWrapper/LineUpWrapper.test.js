import LineUpWrapper from ".";
import { screen, render } from "@testing-library/react";

const title = 'Test';
const content = 'This is a test'

test('LineUpWrapper renders a title', () => {
    render(<LineUpWrapper title={title}>{content}</LineUpWrapper>);
    expect(screen.getByRole('heading')).toHaveTextContent(title);
})

test('LineUpWrapper renders content passed as children', () => {
    render(<LineUpWrapper title={title}>{content}</LineUpWrapper>);
    expect(screen.getByText(content)).toBeInTheDocument();
})