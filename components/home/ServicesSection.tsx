"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Fast, custom websites balanced perfectly with clean layouts and robust code.",
  },
  {
    title: "Branding & Identity",
    description:
      "Timeless logo systems, palettes, and brand guidelines crafted with intention.",
  },
  {
    title: "AI Automation",
    description:
      "Intelligent workflows designed to save hours and streamline repetitive tasks.",
  },
  {
    title: "CRM Solutions",
    description:
      "Custom pipelines built to organize and convert your relationships with ease.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Structured, high-end visuals and communication strategies that tell real stories.",
  },
  {
    title: "Digital Consulting",
    description:
      "Bespoke digital roadmaps to help scale modern businesses efficiently.",
  },
];

function ServiceCell({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.a
      href={`/services?service=${index}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.1,
        delay: (index % 3) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-motion-reveal
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 20px 40px rgba(42,33,29,0.1)" }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        relative
        flex
        min-h-[235px]
        flex-col
        justify-between
        border-b
        border-r
        border-[#E6DEC1]
        bg-white
        p-8
        transition-colors
        duration-300
        hover:bg-[#FCFBF8]
        sm:min-h-[245px]
        sm:p-9
        lg:min-h-[250px]
        lg:p-10
      "
    >
      {/* Service number */}
      <span
        className="
          text-[17px]
          font-medium
          leading-none
          tracking-[0.02em]
          text-[#88C5E8]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Service content */}
      <div className="mt-auto pt-8">
        <h3
          className="
            text-[20px]
            font-semibold
            leading-[1.25]
            tracking-[-0.015em]
            text-[#35251B]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            max-w-[42ch]
            text-[14px]
            font-normal
            leading-[1.5]
            text-[#6B584B]
          "
        >
          {service.description}
        </p>
      </div>

      {/* CTA */}
      <span
        className="
          mt-7
          inline-flex
          w-fit
          items-center
          gap-2
          text-[12px]
          font-medium
          uppercase
          tracking-[0.03em]
          text-[#88C5E8]
        "
      >
        <span>Explore Method</span>

        <span
          className="
            inline-block
            transition-transform
            duration-300
            ease-out
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </span>
    </motion.a>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
      "
    >
      <div
        className="
          mx-auto
          max-w-[80rem]
          px-6
          py-[clamp(4.5rem,8vw,7rem)]
          sm:px-8
          lg:px-12
        "
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          data-motion-reveal
          className="
            flex
            flex-col
            gap-8
            pb-[clamp(3.5rem,6vw,5rem)]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-16
          "
        >
          {/* Heading */}
          <div className="min-w-0">
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#6B584B]
              "
            >
              <span className="text-[#88C5E8]">01</span>
              <span className="mx-2 text-[#E6DEC1]">·</span>
              Expertise &amp; Services
            </p>

            <h2
              className="
                mt-5
                sm:whitespace-nowrap
                text-[clamp(1.75rem,2.75vw,2.25rem)]
                font-normal
                leading-[1.2]
                tracking-[-0.025em]
                text-[#35251B]
              "
            >
              Digital craft focused on quality
            </h2>
          </div>

          {/* Supporting copy */}
          <p
            className="
              max-w-[330px]
              text-[13px]
              font-normal
              leading-[1.45]
              text-[#6B584B]
              lg:text-right
            "
          >
            Full-service digital solutions from Surat&apos;s leading creative
            agency. We build for lasting presence.
          </p>
        </motion.div>

        {/* Services grid */}
        <div
          className="
            grid
            grid-cols-1
            border-l
            border-t
            border-[#E6DEC1]
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCell
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;