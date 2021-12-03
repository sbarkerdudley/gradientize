import React, { useState } from 'react';
import { Card, Image, Text, Button } from '@mantine/core';

const Album = (props) => {
  let radius = 'md';
  let dims = 160;

  return (

    <Card
      shadow="sm"
      padding="xl"
      component="a"
      radius={radius}
      // href={props.artistURL}
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://i.scdn.co/image/ab67616d00001e02b62b03a629fec8f1ac2d1c0d"
          // src={props.img}
          height={dims}
          // width={dims}
          radius={radius} />


        {/* <Image src={props.img} height={160} width={160}/> */}
      </Card.Section>

      {/* <Text weight={500} size="lg">
        You've won a million dollars in cash!
      </Text>

      <Text size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text> */}
    </Card>

  )
}

export default Album;