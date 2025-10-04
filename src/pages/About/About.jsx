import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaBriefcase, FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineSchool } from "react-icons/md";
import ButtonPrimary from "../../components/Button/Button1";

const contactMethods = [
    {
        label: "Email",
        value: "me.mahim99@gmail.com",
        href: "mailto:me.mahim99@gmail.com",
        icon: <FaEnvelope className="text-yellow-500 text-xl" />,
    },
    {
        label: "Phone",
        value: "+880 1635-227460",
        href: "tel:+8801635227460",
        icon: <FaPhoneAlt className="text-yellow-500 text-xl" />,
    },
    {
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: "https://maps.app.goo.gl/5FkVyKjDaLPbGX1v9",
        icon: <FaMapMarkerAlt className="text-yellow-500 text-xl" />,
    },
];

const primaryLinks = [
    {
        label: "Portfolio",
        href: "https://devmahim.space/projects",
        icon: <FaGlobe />,
    },
    {
        label: "GitHub",
        href: "https://github.com/AKmahim",
        icon: <FaGithub />,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/me-mahim/",
        icon: <FaLinkedin />,
    },
    {
        label: "Download Resume",
        href: "/Resume-of-Mirajul-Islam-Mahim.pdf",
        icon: <FaRegCalendarCheck />,
    },
];

const quickStats = [
    {
        value: "3+",
        label: "Years crafting full-stack products",
    },
    {
        value: "4",
        label: "Large-scale platforms shipped end-to-end",
    },
    {
        value: "AWS",
        label: "Cloud deployments & CI/CD ownership",
    },
];

const skillGroups = [
    {
        title: "Frontend",
        items: ["React", "Tailwind CSS", "CSS", "JavaScript", "Three.js"],
    },
    {
        title: "Backend",
        items: ["Laravel", "Livewire", "Express.js", "Python", "Flask", "Firebase"],
    },
    {
        title: "Databases",
        items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
        title: "Cloud & Tools",
        items: ["AWS", "EC2", "Lambda", "Azure", "Firebase", "Ubuntu"],
    },
];

const projectHighlights = [
    {
        name: "Godrej GoodKnight Activation Tracking",
        stack: "React, Capacitor.js, Laravel, MySQL",
        bullets: [
            "Delivered mobile & web dashboards with real-time promoter tracking.",
            "Built REST APIs and reporting pipelines to surface daily activation metrics.",
            "Connected sales teams by enabling seamless data sync between app and backend.",
        ],
    },
    {
        name: "FindSurrogate.com Platform",
        stack: "Next.js, Laravel, Tailwind CSS",
        bullets: [
            "Launched a Canadian surrogacy marketplace with role-based access controls.",
            "Streamlined matching workflows via intuitive dashboards for parents and agencies.",
            "Secured authentication and profile management across the full user lifecycle.",
        ],
    },
    {
        name: "AjwanShop E-commerce",
        stack: "Laravel, Tailwind CSS, Bootstrap",
        bullets: [
            "Implemented catalogue, cart, checkout and order management for diverse SKUs.",
            "Optimized responsive UI to keep bounce rates low across mobile and desktop.",
            "Enforced admin/customer roles with MySQL-backed inventory insights.",
        ],
    },
    {
        name: "bKash Live Concert Streaming",
        stack: "React, Vite, Tailwind CSS, Laravel",
        bullets: [
            "Integrated the bKash gateway so fans unlock concerts immediately after payment.",
            "Orchestrated real-time dashboards for content, analytics and live stream control.",
            "Stabilized platform throughput with Laravel-powered APIs and MySQL storage.",
        ],
    },
];

const experience = [
    {
        company: "XR Interactive",
        role: "Full Stack Developer",
        period: "Apr 2023 – Present · Dhaka, Bangladesh",
        bullets: [
            "Develop interactive dashboards and robust REST APIs for immersive XR products.",
            "Collaborate with design and 3D teams to ship real-time features to production.",
            "Deploy applications on AWS EC2 while maintaining CI/CD pipelines and uptime.",
        ],
    },
];

const education = {
    institution: "National University",
    program: "B.Sc. in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
};

const About = () => {
    return (
        <div className="anek-latin-font text-white lg:mx-40 md:mx-10 mx-6 py-16 space-y-16">
            <section className="flex flex-col lg:flex-row gap-10 items-start bg-white/5 border border-white/10 rounded-3xl p-10">
                <div className="flex-1 space-y-6">
                    <p className="uppercase tracking-[0.35rem] text-sm text-grey">About</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        Full Stack Developer focused on shipping fast, reliable web experiences.
                    </h1>
                    <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                        I&apos;m Mirajul Islam Mahim, a problem-solver who loves connecting ideas, people, and
                        technology. Over the last three years I&apos;ve built Laravel and React ecosystems that
                        power e-commerce, media streaming, and real-time tracking platforms. From crafting
                        pixel-perfect UIs to automating deployments on AWS, I thrive on turning business
                        requirements into delightful, measurable outcomes.
                    </p>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                        {contactMethods.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3 bg-[#24273a] border border-white/10 rounded-2xl px-5 py-4 hover:border-yellow-500 transition"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 group-hover:bg-yellow-500/20">
                                    {item.icon}
                                </span>
                                <span>
                                    <p className="text-xs uppercase tracking-wide text-white/60">{item.label}</p>
                                    <p className="text-sm font-semibold break-words">{item.value}</p>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full lg:w-64">
                    {primaryLinks.map((link) => (
                        <ButtonPrimary key={link.label} title={link.label} link={link.href} icon={link.icon} />
                    ))}
                </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
                {quickStats.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-[#24273a] border border-yellow-500/40 rounded-3xl p-6 text-center shadow-lg shadow-black/10"
                    >
                        <p className="text-4xl font-semibold text-yellow-500">{stat.value}</p>
                        <p className="mt-2 text-sm text-white/70">{stat.label}</p>
                    </div>
                ))}
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                    <FaRegCalendarCheck className="text-yellow-500" /> Summary & Core Skills
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-[#24273a] border border-white/10 rounded-3xl p-6 space-y-4 leading-relaxed text-white/80">
                        <p>
                            Full Stack Developer with 3+ years building scalable applications across
                            e-commerce, activation tracking, and media streaming. Experienced pairing
                            React frontends with Laravel or serverless backends, and delivering production-grade
                            solutions on AWS.
                        </p>
                        <p>
                            I love partnering with cross-functional teams, debugging edge cases, and creating
                            technical clarity so products launch without surprises.
                        </p>
                    </div>
                    <div className="bg-[#24273a] border border-white/10 rounded-3xl p-6 grid gap-6 md:grid-cols-2">
                        {skillGroups.map((group) => (
                            <div key={group.title}>
                                <p className="text-sm uppercase tracking-wide text-white/60 mb-2">{group.title}</p>
                                <ul className="space-y-1 text-sm text-white/90">
                                    {group.items.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                    <FaBriefcase className="text-yellow-500" /> Project Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectHighlights.map((project) => (
                        <div key={project.name} className="bg-[#24273a] border border-white/10 rounded-3xl p-6 space-y-4">
                            <div>
                                <p className="text-lg font-semibold">{project.name}</p>
                                <p className="text-sm text-yellow-500 mt-1">{project.stack}</p>
                            </div>
                            <ul className="space-y-2 text-sm text-white/80">
                                {project.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500"></span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                    <FaRegCalendarCheck className="text-yellow-500" /> Experience
                </h2>
                <div className="space-y-6">
                    {experience.map((item) => (
                        <div key={item.company} className="bg-[#24273a] border border-white/10 rounded-3xl p-6 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                <div>
                                    <p className="text-lg font-semibold">{item.role} · {item.company}</p>
                                    <p className="text-sm text-white/60">{item.period}</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm text-white/80">
                                {item.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2">
                                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-500"></span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold flex items-center gap-3">
                    <MdOutlineSchool className="text-yellow-500" /> Education
                </h2>
                <div className="bg-[#24273a] border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p className="text-lg font-semibold">{education.institution}</p>
                        <p className="text-sm text-white/60">{education.location}</p>
                    </div>
                    <p className="text-white/80 text-sm md:text-base">{education.program}</p>
                </div>
            </section>
        </div>
    );
};

export default About;