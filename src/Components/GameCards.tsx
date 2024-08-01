import React from 'react'
import { Game } from './hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCropedImageUrl from './image-url'

interface Props{
    game:Game
}
const GameCards = ({game}:Props) => {
  return (
    <>
    <Card width='300px' borderRadius={10} overflow={'hidden'}>
      <Image src={getCropedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent='space-between'>

        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
    </>
  )
}

export default GameCards