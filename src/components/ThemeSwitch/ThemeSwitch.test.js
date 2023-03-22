import ThemeSwitch from ".";
import { ThemeProvider } from "context/Theme";
import { screen, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe('Theme in localStorage changes', () => {
    it('from Summer to Boreal when Boreal is clicked', () => {
        // localStorage setup
        window.localStorage.setItem('theme', 'summer');

        render(
            <ThemeProvider>
                <ThemeSwitch />
            </ThemeProvider>
        );

        act(() => {
            userEvent.click(screen.getByText('Boreal'));
        })
        
        expect(localStorage.getItem('theme')).toBe('boreal');
    });

    it('from Boreal to Summer when Summer is clicked', () => {
        // localStorage setup
        window.localStorage.setItem('theme', 'boreal');

        render(
            <ThemeProvider>
                <ThemeSwitch />
            </ThemeProvider>
        );

        act(() => {
            userEvent.click(screen.getByText('Summer'));
        })
        
        expect(localStorage.getItem('theme')).toBe('summer');
    });
})