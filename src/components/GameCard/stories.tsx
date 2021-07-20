import {Meta, Story} from '@storybook/react/types-6-0';

import {GameCard, GameCardProps} from '.';

const data = {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export default data;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{width: '30rem'}}>
    <GameCard {...args} />
  </div>
);