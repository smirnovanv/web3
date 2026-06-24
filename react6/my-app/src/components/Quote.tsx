interface QuoteProps {
  text: string;
  author: string;
  title?: string;
}

export const Quote = ({ text, author, title }: QuoteProps) => {
  return (
    <blockquote>
      <p>
        "{text}"
      </p>
      <figcaption>
        <strong>{author}</strong>
        {title && <cite>, {title}</cite>}
      </figcaption>
    </blockquote>
  );
};