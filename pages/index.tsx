import React from 'react'
import Head from 'next/head'
import { Flex, Text, Link, UnorderedList } from '@chakra-ui/react'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Piterson Felizardo</title>
        <link rel="icon" href="/favicon .ico" />
      </Head>

      <main>
        <Flex justifyContent="center">
          <Flex>
            <div>Logo</div>
            <Flex>
              <UnorderedList className=" li:">
                <li>Inicial</li>

                <li>Institucional</li>
                <li>Núcleos de atuação</li>
                <li>Notícias</li>
                <li>Resp. Corporativa</li>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </main>
    </div>
  )
}

export default Home
