import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "context/Theme";
import Ticket from ".";

const ticket = {
    name: 'Matheus',
    sector: 'B1',
    days: ['11/03/2023', '12/03/2023'],
    consentment: true
}

describe('Ticket component', () => {
    beforeEach(() => render(
        <ThemeProvider>
            <Ticket ticket={ticket} />
        </ThemeProvider>
    ));

    it('renders the logo', () => {
        expect(screen.getByAltText('Logo do Evento')).toBeInTheDocument();
    })

    it('renders the icon', () => {
        expect(screen.getByAltText('Ícone do logo do evento')).toBeInTheDocument();
    })

    it('renders the QR code', () => {
        expect(screen.getByAltText('QR Code do ingresso')).toBeInTheDocument();
    })

    it('renders the name', () => {
        expect(screen.getByText(ticket.name)).toBeInTheDocument();
    })

    it('renders the sector', () => {
        expect(screen.getByText(ticket.sector)).toBeInTheDocument();
    })

    it('renders the days', () => {
        const daysString = new RegExp(ticket.days.join(', '));
        expect(screen.getByText(daysString)).toBeInTheDocument();
    })

    it('renders the warning text', () => {
        expect(screen.getByText('Entrada permitida somente se acompanhado dos pais ou responsáveis legais')).toBeInTheDocument();
    })
})

test('Ticket component does not render the warning text if consentment is not passed in props', () => {
    render(
        <ThemeProvider>
            <Ticket ticket={
                {
                    name: 'Matheus',
                    sector: 'B1',
                    days: ['11/03/2023', '12/03/2023']
                }
            } />
        </ThemeProvider>
    )

    expect(screen.queryByText('Entrada permitida somente se acompanhado dos pais ou responsáveis legais')).not.toBeInTheDocument();
})