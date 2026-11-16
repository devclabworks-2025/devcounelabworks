import Image from "next/image";
import { ProjectDetail } from "@/data/projects";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import ProjectImageGallery from "./ProjectImageGallery";

interface ProjectDetailPageProps {
  project: ProjectDetail;
  brand: string;
}

export default function ProjectDetailPage({
  project,
  brand,
}: ProjectDetailPageProps) {
  return (
    <article className="w-full bg-white px-5 pb-20 pt-[74px] text-[#222222] sm:px-8">
      <div className="mx-auto grid max-w-[1226px] items-start gap-8 lg:grid-cols-[minmax(0,1.333fr)_minmax(0,1fr)] lg:gap-9">
        <ProjectImageGallery images={project.slides} projectName={brand} />

        <section
          aria-label={`${brand} project details`}
          className="w-full border border-[#222222]"
        >
          <div className="grid grid-cols-[36%_1fr]">
            <div className="row-span-2 flex items-center justify-center border-r border-[#222222]">
              {project.logo ? (
                <div className="relative mx-4 my-1 aspect-[1.85] w-[calc(100%-32px)] border border-[#f60c09]">
                  <Image
                    src={project.logo}
                    alt={`${brand} logo`}
                    fill
                    unoptimized
                    loading="eager"
                    sizes="180px"
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <span className="font-serif text-[54px] font-medium leading-none sm:text-[58px]">
                  {brand}
                </span>
              )}
            </div>
            <div className="flex min-h-[42px] items-center justify-between gap-2 border-b border-[#222222] px-2 text-[10px] sm:px-2.5 sm:text-xs">
              <span>{project.title}</span>
              <span
                aria-hidden="true"
                className="size-[9px] shrink-0 bg-[#f60c09]"
              />
            </div>
            <div className="flex min-h-[39px] items-center justify-between gap-2 px-2 text-[9px] text-[#aeb7b8] sm:px-2.5 sm:text-[11px]">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </div>

          <h1 className="border-y border-[#222222] px-4 py-3 font-serif text-[32px] leading-[1.02] tracking-[-0.035em] sm:px-[18px] sm:py-4 sm:text-[38px]">
            <span className="block max-w-[360px]">{project.headline}</span>
          </h1>

          <div className="space-y-4 px-4 py-4 font-sans text-[14px] leading-[1.08] text-[#444444] sm:px-[18px] sm:py-[18px] sm:text-[18px]">
            {project.paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph}`}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-8">
        <CollaborationCTA />
      </div>
    </article>
  );
}
