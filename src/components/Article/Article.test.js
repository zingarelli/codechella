import { render, screen } from "@testing-library/react";
import Article from ".";

// props
const image = '/assets/logo/logo-gray.png';
const alt = 'alternative text';
const title = 'title of the article';
const text = 'text content for the article';

describe('Article', () => {
    beforeEach(() => {
        render(
            <Article
                title={title}
                image={image}
                alt={alt}
            >
                {text}
            </Article>
        );
    });

    it('should render an image', () => {
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('should render a title with the text provided', () => {
        expect(screen.getByRole('heading')).toHaveTextContent(title);
    });

    it('should render the text content provided', () => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});

describe('Article with imagePosition prop', () => {
    it('should add a custom class to the article element with the position provided', () => {
        const position = 'top';

        render(
            <Article
                title={title}
                image={image}
                imagePosition={position}
                alt={alt}
            >
                {text}
            </Article>
        )

        const positionCSS = screen.getByRole('article').classList.contains(`article__container--${position}`);
        expect(positionCSS).toBeTruthy();
    })
})