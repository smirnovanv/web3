interface ImageContainerProps {
  resource?: string;
  description: string;
  link: string;
  image: string;
  className?: string;
}

export const ImageContainer = ({ resource = "Википедия", description, link, image, className }: ImageContainerProps) => {
  return (
    <div className={className}>
                <figure>
                    <img
                        src={image}
                        alt={description}
                    />
                    <figcaption>
                        {description} По информации с{' '}
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {resource}
                        </a>
                    </figcaption>
                </figure>
            </div>
  );
};