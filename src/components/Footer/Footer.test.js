import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "context/Theme";
import Footer from ".";

describe('Footer component', () => {
    beforeEach(() => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        );
    });

    it('renders the logo', () => {
        expect(screen.getByAltText('Logo do Festival CodeChella')).toBeInTheDocument();
    });

    it('renders a navigation section', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })

    it('renders 4 links to socials', () => {
        expect(screen.getAllByRole('link')).toHaveLength(4);
    });

    it('renders copyright text', () => {
        expect(screen.getByText('Desenvolvido por Alura.')).toBeInTheDocument();
        expect(screen.getByText('Projeto fictício sem fins comerciais.')).toBeInTheDocument();
    });
});