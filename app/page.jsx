import Image from "next/image";
import { projects } from "@/constant";
import ProjectCard from "@/components/projectCard";
import Quotes from "@/components/Quotes";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white items-center">
      <section className="max-w-[1200px] p-8 space-y-12 md:p-16 md:space-y-12">
        <h1 className="font-[900] text-center">
          {`Hi, I'm `}
          <span className="text-[#d4ede4]">Illah.</span>
        </h1>
        <div className="space-y-12 md:flex md:justify-between md:space-x-12">
          <div className="bg-[#a98d75] h-[474px] relative overflow-hidden rounded-t-[80px] md:w-1/3 lg:rounded-t-full">
            <Image
              src={"/profile.png"}
              width={150}
              height={150}
              alt="profile image"
              priority={true}
              className="h-full w-full object-cover"
            />
            <div className="h-20 absolute bottom-0 w-full bg-[#8fdcc2] p-4 flex gap-4">
              <a
                className="flex items-center gap-2"
                href="https://github.com/baicorp"
                target="_blank"
              >
                <Image
                  className="w-6 h-6"
                  width={50}
                  height={50}
                  src="/github.svg"
                  alt="github-icon"
                />
                <p className="text-[#1f4338] font-semibold text-sm">GitHub</p>
              </a>
              <a
                className="flex items-center gap-2"
                href="https://linkedin.com/in/baillah"
                target="_blank"
              >
                <Image
                  className="w-6 h-6"
                  src="/linkedin.svg"
                  width={50}
                  height={50}
                  alt="github-icon"
                />
                <p className="text-[#1f4338] font-semibold text-sm">Linkedin</p>
              </a>
            </div>
          </div>
          <div className="space-y-4 md:w-2/3 md:mt-8 md:space-y-8">
            <h2 className="leading-tight md:leading-10 lg:leading-[3.5rem]">
              {`I'm a Final-year Student Passionate About Frontend Development.`}
            </h2>
            <p className="md:tracking-wider">
              {`Currently, I'm delving deeper into React JS and exploring related
              frontend technologies such as Tailwind CSS. I'm also experimenting
              with Next.js and Supabase.`}
            </p>
            <p className="md:tracking-wider">
              I make it a priority to stay up-to-date with the latest
              developments in the frontend world and thoroughly enjoy
              experimenting with new concepts and tools.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1440px] p-8 space-y-8 md:p-16 md:space-y-12 w-full">
        <h2 className="text-center">Fun 🧪</h2>
        <p className="text-center">
          Collections of exciting projects to fulfill my curiosity.
        </p>
        <div className="grid grid-flow-dense gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((data) => {
            return (
              <ProjectCard
                key={data.id}
                title={data.title}
                description={data.description}
                logo={data.logo}
                image={data.image}
                link={data.link}
                tech={data.tech}
              />
            );
          })}
        </div>
      </section>
      <section className="mt-8 max-w-[1200px] p-8">
        <Suspense fallback={<p>. . .</p>}>
          <Quotes />
        </Suspense>
      </section>
    </main>
  );
}
