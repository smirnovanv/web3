interface QuoteProps {
  text: string;
  author: string;
  title?: string;
}

export const Quote = ({ text, author, title }: QuoteProps) => {
  return (
    <blockquote style={{
      margin: '2rem 0',
      padding: '1.5rem 2rem',
      backgroundColor: '#f8f9fa',
      borderLeft: '5px solid #4a90d9',
      borderRadius: '4px',
      fontStyle: 'italic',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.6',
        margin: '0 0 1rem 0',
        color: '#333'
      }}>
        "{text}"
      </p>
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        color: '#555'
      }}>
        <strong style={{ fontSize: '1rem' }}>{author}</strong>
        {title && <span style={{ fontSize: '0.9rem', color: '#777' }}>{title}</span>}
      </footer>
    </blockquote>
  );
};