import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button, Heading, Text, Code, Icon, Box, Flex } from '@chakra-ui/core'

export default function Home() {
  const auth = useAuth()
  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      h='100vh'
    >
      <Head>
        <title>Easy Feedback | Easiest way to receive feedback, comments and ratings</title>
      </Head>

      <Icon color='black' name='logo' size='64px' />
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button
          mt={4}
          variant='solid'
          size='lg'
          onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      )
      }
    </Flex>
  )
}