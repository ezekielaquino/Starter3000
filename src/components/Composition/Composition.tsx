'use client';

// @refresh reset

import {useEffect, useRef} from 'react';
import styles from './Composition.module.scss';
import {init} from './sketch';

export const Composition: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    init({canvas: canvasRef.current});
  }, []);

  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default Composition;
