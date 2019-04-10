import { createElement } from 'rax';
import { storiesOf } from '@storybook/rax';
import { Button, Text, View } from 'weex-nuke';

storiesOf('Basic', module)
  .add('View', () => (
    <View
      style={[
        {
          backgroundColor: '#3089dc',
          borderTopWidth: '2px',
          borderTopColor: 'red',
          width: 200,
          height: 200,
          backgroundImage: `linear-gradient(to right, #ff9a9e, #fad0c4)`,
        },
      ]}
    />
  ))
  .add('Button', () => <Button>BUTTON</Button>)
  .add('Text', () => <Text>Hello Nuke</Text>);
