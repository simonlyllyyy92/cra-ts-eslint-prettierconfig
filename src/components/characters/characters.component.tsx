import * as React from 'react';

import './character.styles.css';

import useKeyPress from './customizedHooks/useKeyPress';
import setDirections from './helper/character.helper';

import Sprites from '../sprites/sprites.component';

interface CharacterProps {
  sprites: string;
  step: (direction: string) => void;
  direction: string;
}

const Character: React.FunctionComponent<CharacterProps> = ({ sprites, step, direction }) => {
  const [dir, setDir] = React.useState(direction);
  const [walking, setWalking] = React.useState('stop');
  const [hasFacing, setHasFacing] = React.useState('');

  const moveRef = React.useRef<number>();

  useKeyPress((e: React.KeyboardEvent) => {
    const facing: string | null = setDirections(e.type, e.which);
    if (facing) {
      setDir(facing);
    }
    setHasFacing(facing);
    setWalking(facing ? 'start' : 'stop');
    e.preventDefault();
  });

  const animate = () => {
    step(dir);
    if (hasFacing) {
      moveRef.current = requestAnimationFrame(animate);
    }
  };

  React.useEffect(() => {
    moveRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(moveRef.current as number);
  }, [hasFacing]);

  return (
    <div className='character' data-facing={dir} data-walking={walking}>
      <Sprites sprites={sprites} />
    </div>
  );
};

export default Character;
