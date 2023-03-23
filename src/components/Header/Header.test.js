import Header from '.';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Header component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    })

    it('renders a logo', () => {
        expect(screen.getByAltText('Logo do Festival CodeChella')).toBeInTheDocument();
    })

    it('renders a navigation section', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })

    it('renders 5 links', () => {
        expect(screen.getAllByRole('link')).toHaveLength(5);
    })

    it('sets checkbox as checked when the menu is clicked', () => {
        const menu = screen.getByRole('checkbox');
        act(() => userEvent.click(menu));
        expect(menu).toBeChecked();
    })

    it('sets checkbox as unchecked when a link is clicked after menu have been clicked', () => {
        const menu = screen.getByRole('checkbox');
        const links = screen.getAllByRole('link');

        links.forEach(link => {
            // first user clicks on the menu (mobile interaction)
            act(() => userEvent.click(menu));

            // then user clicks on the desired link
            act(() => userEvent.click(link));
            expect(menu).not.toBeChecked()
        })       
    })
})