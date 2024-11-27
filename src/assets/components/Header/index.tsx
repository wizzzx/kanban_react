import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn(styles.header_container, className)}>
      <h1 className={styles.header}>Kanban Board</h1>
      <div className={styles.icon_wrapper}>
        <img src="/public/icons/plus.svg" alt="plus" className={styles.image} />
        <div>{/* prop с инициалами зарегистрированного пользователя*/}</div>
      </div>
    </header>
  );
};
