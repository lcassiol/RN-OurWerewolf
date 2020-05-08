import React, { useState } from 'react';
import { Switch } from 'react-native';

import { Container, Image, Name } from './styles';

import DefaultImage from '../../assets/unknown_profile.png';

const Paper = ({ paper }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Container>
      <Image source={DefaultImage} />
      <Name>{paper.name}</Name>
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
    </Container>
  );
};

export default Paper;
