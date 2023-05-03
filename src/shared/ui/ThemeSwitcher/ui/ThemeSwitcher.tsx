import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    const mapThemeToIcon: Record<Theme, ReactNode> = {
        [Theme.LIGHT]: <LightIcon />,
        [Theme.DARK]: <DarkIcon />,
    };

    return (
        <Button
            className={classNames('', { mods: {}, additional: [className] })}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            { mapThemeToIcon[theme] }
        </Button>
    );
};

export default ThemeSwitcher;
