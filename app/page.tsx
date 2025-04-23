import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-[calc(100vh-48px)] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="h-[calc(100vh-48px)] snap-start flex flex-col justify-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl mb-6">About this site</h1>
        <div className="space-y-4">
          <p>Hello, I&apos;m hude, an engineer.</p>
          <p>This is my portfolio site.</p>
          <p>Here I&apos;ve compiled the projects I&apos;ve worked on and the skills I&apos;ve acquired.</p>
          <p>I created this site because I wanted you to get to know me better.</p>
          <p>I hope you enjoy exploring my work and my journey as an engineer.</p>
        </div>
      </section>

      <section className="h-[calc(100vh-48px)] snap-start flex flex-col justify-center px-4 max-w-3xl mx-auto">
        <h2 className="text-5xl mb-6">Profile</h2>
        <Link href="/profile" className="text-blue-600 hover:underline">
          詳細を見る →
        </Link>
      </section>

      <section className="h-[calc(100vh-48px)] snap-start flex flex-col justify-center px-4 max-w-3xl mx-auto">
        <h2 className="text-5xl mb-2">Works</h2>
        <p className="py-4 px-2 flex">Allow me to present the projects I have created to date.</p>

        <Link href="/works" className=" px-2 text-blue-600 hover:underline">
          すべての作品を見る →
        </Link>
      </section>

      <section className="h-[calc(100vh-48px)] snap-start flex flex-col justify-center px-4 max-w-3xl mx-auto">
        <h2 className="text-5xl mb-6">Contact</h2>
        <Link href="/contact" className="text-blue-600 hover:underline">
          お問い合わせフォーム →
        </Link>
      </section>
    </div>
  );
}