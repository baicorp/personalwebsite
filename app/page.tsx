import Image from "next/image";
import { projects, techSkills } from "@/constant";
import { ProjectCard, Quotes, TechBadges, TechSkillsCard } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1200px] mx-auto px-4 py-8 md:p-16 space-y-12">
        <h1 className="font-[900] text-center">
          {`Hi, I'm `}
          <span className="text-accent-color">Illah.</span>
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
            <div className="h-20 absolute bottom-0 w-full bg-headings-color p-4 flex gap-4">
              <a
                className="flex items-center gap-2"
                href="https://github.com/baicorp"
                target="_blank"
              >
                <div className="w-6 h-6 object-contain">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                    <path
                      className="fill-main-background"
                      d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
                    />
                  </svg>
                </div>
                <p className="text-main-background font-semibold text-sm">
                  GitHub
                </p>
              </a>
              <a
                className="flex items-center gap-2"
                href="https://linkedin.com/in/baillah"
                target="_blank"
              >
                <div className="w-6 h-6 object-contain">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    {" "}
                    <path
                      className="fill-main-background"
                      d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                    />
                  </svg>
                </div>
                <p className="text-main-background font-semibold text-sm">
                  Linkedin
                </p>
              </a>
            </div>
          </div>
          <div className="space-y-4 md:w-2/3 md:mt-8 md:space-y-8">
            <h2 className="leading-tight md:leading-10 lg:leading-[3.5rem]">
              {`I'm a Final-year Student Passionate About Frontend Development.`}
            </h2>
            <p>
              At this time, I am actively working on expanding my knowledge of{" "}
              {<TechBadges title="react" />}. Additionally, I am exploring{" "}
              {<TechBadges title="next js" />} and experimenting with the{" "}
              {<TechBadges title="supabase" />} database.
            </p>
            <p>
              I make sure to keep myself updated with the latest happenings in
              the frontend field, and I really enjoy trying out new ideas and
              tools.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-4 py-8 md:p-16 space-y-12">
        <h2 className="text-headings-color text-center flex justify-center gap-2 items-center">
          Skills{" "}
          <Image
            src={"/fire.webp"}
            width={30}
            height={30}
            alt="fire gif"
            className="w-10 mb-2"
          />{" "}
        </h2>
        <div className="flex gap-4 flex-wrap md:justify-center">
          {techSkills.map((data) => {
            return (
              <TechSkillsCard
                key={data.id}
                logoName={data.logoName}
                logo={data.logo}
              />
            );
          })}
        </div>
      </section>
      <section className="max-w-[1440px] mx-auto px-4 py-8 md:p-16 space-y-12">
        <div className="flex gap-2 justify-center items-center">
          <h2>Projects</h2>
          <Image
            src={"/rockets.webp"}
            width={20}
            height={20}
            alt="fire gif"
            className="w-10"
          />{" "}
        </div>
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
      <section className="max-w-[1200px] mx-auto px-4 py-8 md:p-16 space-y-12">
        <div>
          <Suspense fallback={<p>. . .</p>}>
            <Quotes />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
