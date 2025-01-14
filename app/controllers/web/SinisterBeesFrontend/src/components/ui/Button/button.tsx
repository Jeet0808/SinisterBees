import { cn } from '../../../utils/cn';
import { useTheme } from '../../../context/ThemeContext';

const buttonThemes = {
  light: {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  },
  dark: {
    primary: 'bg-blue-700 text-white hover:bg-blue-800',
    secondary: 'bg-gray-700 text-gray-300 hover:bg-gray-600',
    danger: 'bg-red-700 text-white hover:bg-red-800',
  },
};

const sizes = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

interface ButtonPropsType {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonPropsType> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
  ...props
}) => {
  const { theme } = useTheme();

  const isDisabled = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const themeClasses =
    buttonThemes[theme]?.[variant] || buttonThemes.light.primary;

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-all',
        sizes[size],
        themeClasses,
        isDisabled,
        className,
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
