import Article from 'components/Article';
// this CSS will add new styles and override styles from <Article />
import './ArticleImage.css';

/**
 * Creates an Article component with custom styles for a content that only contains images
 */
export default function ArticleImage(props) {
    return (
        <div className='article--image'>
            <Article {...props} >
                {props.children}
            </Article>
        </div>
    )
}