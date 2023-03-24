import Form from '.';
import { screen, render, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Form component should render', () => {
    beforeEach(() => render(<Form />))

    test('2 text inputs', () => {
        expect(screen.getAllByRole('textbox')).toHaveLength(2);
    })

    test('2 checkboxes', () => {
        expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    })

    test('a select field', () => {
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    })

    test('6 options in the select field', () => {
        expect(screen.getAllByRole('option')).toHaveLength(6);
    })

    test('an input field of date type', () => {
        expect(document.querySelector("input[type='date']")).toBeInTheDocument();
    })

    test('a button', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

})

describe('Form validation', () => {
    beforeEach(() => {
        // submit function needs to be mocked here in order to work properly
        const onSubmit = jest.fn(e => e.preventDefault());
        render(<Form onSubmit={onSubmit} />);
    })

    // testing textbox and combobox
    const fields = ['textbox', 'combobox']
    fields.forEach(field => {
        test(`${field} is required`, () => {
            screen.getAllByRole('textbox')
                .forEach(element => {
                    expect(element).toBeRequired();
                })
        })
    })

    test('at least one day should be checked before submitting the form', () => {
        act(() => userEvent.click(screen.getByRole('button')));

        // TODO: this is not 100% accurate...
        const firstDay = screen.getAllByRole('checkbox')[0];
        expect(firstDay).toBeInvalid();
    })

    // testing date of birth
    test('input of date type is required', () => {
        expect(document.querySelector("input[type='date']")).toBeRequired();
    })
})

describe('Age validation', () => {
    const underTen = '2021-01-01';
    const underSixteen = '2008-01-01';
    const aboveSixteen = '2007-01-01';
    const forbiddenText = 'A entrada é proibida para menores de 10 anos';
    const consentmentText = 'Confirmo que estarei acompanhado de meus pais ou responsáveis legais.';

    let birthdayInput = null;
    let submitBtn = null;

    beforeEach(() => {
        render(<Form />);
        birthdayInput = document.querySelector("input[type='date']");
        submitBtn = screen.getByRole('button');
    });

    test('button should be disabled if age is under 10', () => {
        act(() => userEvent.type(birthdayInput, underTen));
        expect(submitBtn).toBeDisabled()
    })

    test('error message should be rendered if age is under 10', () => {
        act(() => userEvent.type(birthdayInput, underTen));
        expect(screen.getByText(forbiddenText)).toBeInTheDocument();
    })

    test('consentment checkbox should be rendered if age is between 10 and 15', () => {
        act(() => userEvent.type(birthdayInput, underSixteen));
        expect(document.getElementById('consentimento')).toBeInTheDocument();
    })

    test('consentment text should be rendered if age is between 10 and 15', () => {
        act(() => userEvent.type(birthdayInput, underSixteen));
        expect(screen.getByText(consentmentText)).toBeInTheDocument();
    })

    test('submit button should be enabled if age is above 16', () => {
        act(() => userEvent.type(birthdayInput, aboveSixteen));
        expect(submitBtn).toBeEnabled();
    })

    test('no additional input or text should be rendered if age is above 16', () => {
        act(() => userEvent.type(birthdayInput, aboveSixteen));
        expect(screen.queryByText(forbiddenText)).not.toBeInTheDocument();
        expect(screen.queryByText(consentmentText)).not.toBeInTheDocument();
        expect(document.getElementById('consentimento')).not.toBeInTheDocument();
    })
})

describe('When form with all fields filled correctly is submitted', () => {
    /* 
        I had to duplicate render and loop on each test in order to assert that the 
        onSubmit fucntion was being called. My mocked onSubmit function was only
        working properly when implemented in the same block of the render function.
        - If I use beforeEach() and implement onSubmit outside its block, the following 
        error is displayed: "Error: Not implemented: HTMLFormElement.prototype.submit";
        - If I implement onSubmit inside a beforeEach(), I'm unable to assert it in
        a test case (onSubmit becomes undefined or is not reachable inside the test case)
    */

    const validEntries = {
        nome: 'Matheus',
        email: 'my@email.br',
        primeiroDia: true,
        tipo: 'premium',
        nascimento: '2007-01-01'
    };

    it('form should be valid', () => {
        const onSubmit = jest.fn(e => e.preventDefault());
        render(<Form onSubmit={onSubmit} />);

        // fill the form with valid entries
        for (const [id, value] of Object.entries(validEntries)) {
            const element = document.getElementById(id);
            switch (id) {
                case 'primeiroDia':
                    // it's a checkbox; needs to be clicked                           
                    act(() => userEvent.click(element));
                    break;

                case 'tipo': 
                    // it's a select field; needs to select an option
                    // TODO: why is this triggering a console.error DOMException {}???
                    // TODO: it works fine outside the loop
                    act(() => userEvent.selectOptions(document.getElementById(id), value));

                default:
                    // it's a text input
                    act(() => userEvent.type(element, value));
            }
        }
        act(() => fireEvent.click(screen.getByRole('button')));
        expect(screen.getByRole('form')).toBeValid();
    })

    it('form should call onSubmit function', () => {
        const onSubmit = jest.fn(e => e.preventDefault());
        render(<Form onSubmit={onSubmit} />);

        // fill the form with valid entries
        for (const [id, value] of Object.entries(validEntries)) {
            const element = document.getElementById(id);
            switch (id) {
                case 'primeiroDia':
                    // it's a checkbox; needs to be clicked                           
                    act(() => userEvent.click(element));
                    break;

                case 'tipo': 
                    // it's a select field; needs to select an option
                    // TODO: why is this triggering a console.error DOMException {}???
                    // TODO: it works fine outside the loop
                    act(() => userEvent.selectOptions(document.getElementById(id), value));

                default:
                    // it's a text input
                    act(() => userEvent.type(element, value));
            }
        }
        act(() => fireEvent.click(screen.getByRole('button')));
        expect(onSubmit).toHaveBeenCalled();
    })
})