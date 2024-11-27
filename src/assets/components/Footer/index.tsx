import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.footer, className)}>
      <p className={styles.footer_text}>To-Do-Kanban-Board</p>
    </div>
  );
};
