import Container from "@/primitives/container"
import { ThemeToggle } from "@/provider/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center dark:bg-neutral-950">
      <Container >
        <div className="flex flex-col items-center gap-6">
          <Image
            src="https://o2a0p1u8mrgj3pm2.public.blob.vercel-storage.com/Artboard%204%20copy%40500x.png"
            alt="NextJS Starter Kit"
            width={84}
            height={84}
            className="rounded-2xl shadow-lg"
            priority
          />
          <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl dark:text-white">
            Next Starter kit
          </h1>
          <p className="my-2 max-w-xl text-center text-lg text-neutral-600 dark:text-neutral-300">
            A premium & minimal boilerplate to kickstart your Next.js project
            with essential features and elegant design.
          </p>
          <ThemeToggle />
        </div>
      </Container>
    </main>
  )
}
