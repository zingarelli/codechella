import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "context/Theme";
import Banner from ".";

function renderWithContext(component) {
    return render(
        <ThemeProvider>
            {component}
        </ThemeProvider>
    )
}

const image = '../../assets/logo/logo-gray.png';

describe('Banner', () => {
    it('should render a banner container', () => {
        renderWithContext(<Banner image={image} />);
        const banner = document.getElementsByClassName('banner__container')[0];
        expect(banner).toBeInTheDocument();
    });
})

describe('Banner with no text', () => {
    renderWithContext(<Banner image={image} />);
    it('should not render a header', () => {
        const header = screen.queryByRole('heading');
        expect(header).not.toBeInTheDocument()
    });
})

describe('Banner with text', () => {
    const text = 'My Text';

    // renders component before each test
    beforeEach(() => {
        renderWithContext(<Banner image={image} text={text} />);
    })

    it('should render a header', () => {
        const header = screen.getByRole('heading');
        expect(header).toBeInTheDocument();
    });

    it('should display the text in the header', () => {
        const header = screen.getByRole('heading');
        expect(header).toHaveTextContent(text);
    })
})