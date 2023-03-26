import styles from './Button.module.scss';

import Link from 'next/link';
import {clsx} from 'clsx';

export const Button = ({
    text,
    children,
    onClick,
    href,
    variant = 'default',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    ...baseProps
}) => {
    const getClassNames = () => {
        return clsx(
            styles.button,
            styles[variant],
            styles[size],
            fullWidth && styles.fullWidth,
            disabled && styles.disabled
        );
    };

    const renderBasicButton = () => {
        return (
            <button
                {...baseProps}
                onClick={() => onClick && !disabled && onClick()}
                className={getClassNames()}
            >
                {text ?? children}
            </button>
        );
    };

    const renderLinkButton = () => {
        return <Link href={href}>{renderBasicButton()}</Link>;
    };

    const renderButton = () => {
        if (href) {
            return renderLinkButton();
        }
        return renderBasicButton();
    };

    return <>{renderButton()}</>;
};
