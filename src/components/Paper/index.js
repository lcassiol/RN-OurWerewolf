import React, { useState } from 'react';
import { View, Switch } from 'react-native';

import NumericInput from 'react-native-numeric-input';

import { Container, Image, Name } from './styles';
import DefaultImage from '../../assets/unknown_profile.png';

const Paper = ({ paper, randomPapers }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Container>
      <Image source={DefaultImage} />
      <Name>{paper.name}</Name>
      {randomPapers ? (
        <Switch
          trackColor={{ false: '#454', true: '#81b000' }}
          thumbColor={isEnabled ? '#88e0ff' : '#81b0ff'}
          ios_backgroundColor="#666"
          style={{
            transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
            position: 'absolute',
            bottom: 4,
          }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <NumericInput
          value={quantity}
          minValue={0}
          onChange={(value) => setQuantity(value)}
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={140}
          totalHeight={35}
          iconSize={30}
          step={1}
          valueType="real"
          rounded
          textColor="#000"
          iconStyle={{ color: 'black' }}
          rightButtonBackgroundColor="transparent"
          leftButtonBackgroundColor="transparent"
          inputStyle={{
            fontWeight: 'bold',
          }}
          containerStyle={{
            position: 'absolute',
            bottom: 4,
            backgroundColor: 'white',
            borderColor: '#f0f0f0',
            transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
          }}
        />
      )}
    </Container>
  );
};

export default Paper;
