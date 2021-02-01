import * as React from 'react';
import './bot.styles.css';
import Sprites from '../sprites/sprites.component';

interface BotProps {
  sprites: string;
  step: () => void;
  direction: string;
}

const Bot: React.FunctionComponent<BotProps> = ({ sprites, step, direction }) => {
  const [dir, setDir] = React.useState(direction);
  const [walking, setWalking] = React.useState('stop');

  React.useEffect(() => step(), []);

  return (
    <div className='ai' data-facing={dir} data-walking={walking}>
      <Sprites sprites={sprites} />
    </div>
  );
};

export default Bot;
