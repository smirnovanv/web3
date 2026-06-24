interface HeaderProps {
  title?: string;
}

export const MainHeader = ({ title = "Фигурное катание" }: HeaderProps) => {
  return (
    <header>
      <h1 style={{
        margin: 0,
        fontSize: '2.5rem',
        color: '#1a5276',
        fontWeight: '700',
        letterSpacing: '1px',
        textShadow: '0 1px 2px rgba(255,255,255,0.5)'
      }}>
        {title}
      </h1>
    </header>
  );
};