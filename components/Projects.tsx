import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity';
import { Projects as ProjectType } from '@/typing';

type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [shouldShowNextButton, setShouldShowNextButton] = useState(false);

  // Function to handle click and scroll right
  const handleSwipeRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / projects.length;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Calculate the next scroll position
      const newScrollLeft = Math.min(container.scrollLeft + itemWidth, maxScrollLeft);

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // Track the scroll state to show or hide the "Next" button
  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isScrollable = container.scrollLeft + container.clientWidth < container.scrollWidth;
      setShouldShowNextButton(isScrollable);
    }
  };

  useEffect(() => {
    updateButtonVisibility(); // Initial check

    // Add scroll event listener to update the button visibility dynamically
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.addEventListener('scroll', updateButtonVisibility);

      return () => {
        container.removeEventListener('scroll', updateButtonVisibility);
      };
    }
  }, [projects]); // Recalculate when the projects list changes

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="relative mx-auto overflow-hidden h-screen max-w-full flex flex-col items-center justify-evenly px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <h3 className="absolute top-20 text-xl sm:text-2xl md:text-3xl xl:text-4xl uppercase text-gray-400 font-mono tracking-[12px] sm:tracking-[16px]">
        Projects
      </h3>

      <div
        ref={scrollContainerRef}
        className="relative flex w-full overflow-x-scroll snap-x snap-mandatory overflow-y-hidden z-20 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300"
      >
        {projects?.reverse().map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col md:flex-row space-y-5 md:space-y-0 h-screen items-center justify-center p-8 sm:p-12 md:p-16 lg:p-24"
          >
            {/* Left Side (Image, Title, Tools) - 60% width */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="w-full md:w-3/5 flex flex-col items-center justify-center space-y-4"
            >
              <motion.img
                src={urlFor(project.projectImage).url()}
                className="max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[400px] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[60%] mt-8"
                alt="Project"
              />
              <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:text-blue-300 transition-all duration-300 hover:underline">
                <a href={project?.linktoBuild} target="_blank" rel="noopener noreferrer">
                  {`${i + 1}/${projects?.length} - ${project?.title}`}
                </a>
              </h4>
              <div className="flex flex-wrap justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-6 w-6 sm:h-8 sm:w-8 rounded-full mx-1"
                    key={technology._id}
                    src={urlFor(technology.heroImage).url()}
                    title={technology.title}
                    alt={technology.title}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side (Description) - 40% width */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              className="w-full md:w-2/5 flex flex-col justify-center text-center md:text-left space-y-4"
            >
              <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">
                {project.summary}
              </p>
              {shouldShowNextButton && (
                <div className="text-lg text-gray-400 cursor-pointer" onClick={handleSwipeRight}>
                  Next →
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7ABBA]/20 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}
