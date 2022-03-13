import Head from 'next/head'
import { useAuth } from '@/lib/auth'
import { Button, Heading, Text, Code } from '@chakra-ui/core'

export default function Home() {
  const auth = useAuth()
  return (
    <div>
      <Head>
        <title>Easy Feedback | Easiest way to receive feedback, comments and ratings</title>
      </Head>
      <main>
        <Heading>
          Welcome to <a href="https://ginostoian.com">Easy Feedback </a>
        </Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )
        }
      </main>
    </div>
  )
}