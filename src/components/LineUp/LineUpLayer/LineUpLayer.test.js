import LineUpLayer from ".";
import { screen, render } from "@testing-library/react";

const layer = ['l1', 'l2', 'l3', 'l4'];
const content = 'this is a test';

test('LineUpLayer renders content passed as children', () => {
    render(<LineUpLayer layer={layer[0]}>{content}</LineUpLayer>);
    expect(screen.getByText(content)).toBeInTheDocument();
})

describe('LineUpLayer component', () => {
    layer.forEach(item => {
        it(`renders with class ${item} provided in props `, () => {
            render(<LineUpLayer layer={item}>{content}</LineUpLayer>);
            expect(screen.getByText(content)).toHaveClass(item);
        })
    })
})