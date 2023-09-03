import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.langSwitcher, {
                mods: { [styles.short]: short },
                additional: [className],
            })}
        >
            { t(short ? 'Short language' : 'Language') }
        </Button>
    );
});

export default LangSwitcher;
