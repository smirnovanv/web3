interface ReferenceProps {
    resource?: string;
    link: string;
}

export const Reference = ({ resource = "Википедия", link }: ReferenceProps) => {
    return (
        <p>
            <em>По информации с</em>{' '}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {resource}
            </a>
        </p>
    );
};