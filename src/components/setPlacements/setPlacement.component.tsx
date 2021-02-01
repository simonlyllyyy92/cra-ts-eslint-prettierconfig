import * as React from 'react';
import { setPlacement } from './utils/setPlacement.utils';
import { connector, PropsFromRedux } from './utils/connector';
import Characters from '../characters/characters.component';
import Bot from '../bot/bot.component';

interface PlacementsProps extends PropsFromRedux {
  sprites: string;
  x: number;
  y: number;
  isPlayer: boolean;
  dir: string;
}

const SetPlacements: React.FunctionComponent<PlacementsProps> = ({ sprites, x, y, isPlayer, dir, dispatch, walls, blocks }) => {
  const { step, aiStep } = setPlacement({ x_axis: x, y_axis: y, dispatch, walls, blocks });
  return (
    <div>
      {isPlayer ? <Characters sprites={sprites} step={step} direction={dir} /> : <Bot sprites={sprites} step={aiStep} direction={dir} />}
    </div>
  );
};
export default connector(SetPlacements);
