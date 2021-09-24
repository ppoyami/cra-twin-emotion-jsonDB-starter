import Button from '@/components/shared/Button';
import { useThemeContext } from '@/contexts/themeContext';

export default function Home() {
  const { theme, setTheme } = useThemeContext();
  const onToggle = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div>
      <Button onClick={onToggle} variant="secondary">
        Current Mode is {theme === 'dark' ? 'DARK' : 'LIGHT'}
      </Button>
    </div>
  );
}
