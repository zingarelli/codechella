import { render, screen } from "@testing-library/react";
import { LineUpContent, LineUpLayer} from "../../LineUp";

const title = 'Test';
const content = 'This is a test'
const bands = ['System of a DOM', 'Python Maiden', 'Fullstack Fighters', 'NickCallback'];

test('LineUpContent renders a title', () => {
    render(<LineUpContent title={title}>{content}</LineUpContent>);
    expect(screen.getByRole('heading')).toHaveTextContent(title);
})

test('LineUpContent renders content passed as children', () => {
    render(<LineUpContent title={title}>{content}</LineUpContent>);
    expect(screen.getByText(content)).toBeInTheDocument();
})

test('LineUpContent renders a set of LineUpLayer', () => {
    render(
        <LineUpContent title={title}>
            {bands.map((band, index) => (
                <LineUpLayer layer='l1' key={index}>
                    <p>{band}</p>
                </LineUpLayer>
            ))}
        </LineUpContent>
    )

    bands.forEach(band => {
        expect(screen.getByText(band)).toBeInTheDocument();
    })
})