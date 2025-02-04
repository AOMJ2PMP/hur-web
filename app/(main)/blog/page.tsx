import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'

import { BlogPosts } from './BlogPosts'

const description =
  'This is the online version of the book DAWS by Prof. Robyn, please feel free to check it out whenever you want :D'
export const metadata = {
  title: 'Chapters',
  description,
  openGraph: {
    title: 'Chapters',
    description,
  },
  twitter: {
    title: 'Chapters',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Welcome to DAWS
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        
        {/* <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p> */}
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={30} />
      </div>
    </Container>
  )
}

export const revalidate = 60
