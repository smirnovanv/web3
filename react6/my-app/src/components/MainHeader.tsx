interface HeaderProps {
  title?: string;
}

export const MainHeader = ({ title = "Фигурное катание" }: HeaderProps) => {
  return (
    <header>
      <h1>
        {title}
      </h1>
    </header>
  );
};