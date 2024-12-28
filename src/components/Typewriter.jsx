/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export const Typewriter = ({ phrases, typingSpeed = 100, pauseTime = 2000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let timeout;

    if (isDeleting) {
      // Borrado del texto actual
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }, typingSpeed / 2); // Velocidad más rápida al borrar
    } else {
      // Escribiendo el texto
      timeout = setTimeout(() => {
        setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
        if (currentText === currentPhrase) {
          setIsDeleting(true);
          timeout = setTimeout(() => {}, pauseTime); // Pausa al finalizar una frase
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, phrases, typingSpeed, pauseTime]);

  return (
    <div>
      <span className='typewriter'>{currentText}</span>
      <span className='cursor'>|</span>
    </div>
  );
};

export default Typewriter;
