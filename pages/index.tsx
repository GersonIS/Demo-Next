import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import MainLayout from '../components/layout/MainLayout'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <div className={'description'}>
        <p>
          Home page&nbsp;
          <code className="code">pages/index.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={'vercelLogo'}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <Navbar />

      <div className={'center'}>
        <Image
          className={'logo'}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={'thirteen'}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>

      <div className={'grid'}>
        <Link
          href="/about"
          className={'card'}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>

        <Link
          href="/contact"
          className={'card'}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Learn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </Link>

      </div>
    </MainLayout>
  )
}
