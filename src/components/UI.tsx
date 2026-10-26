import { ArrowUpRight, Atom, Code2, Gamepad2, PanelsTopLeft, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import type { Project } from '../data/content';
const projectThumbnails: Record<string, string> = {
    'biomarker-discovery': '/images/projects/biomarker-discovery.webp',
    'faculty-recommender': '/images/projects/faculty-course-recommendation.webp',
    '2d-racing-game': '/images/projects/2d-multiplayer-racing.webp',
    'crown-of-courage': '/images/projects/crown-of-courage.webp',
    'employee-management': '/images/projects/employee-management.webp',
    'portfolio': '/images/projects/personal-portfolio.webp',
};
export function ProjectIcon({ icon, size = 30, }: {
    icon: Project['icon'];
    size?: number;
}) {
    const shared = { size, strokeWidth: 1.5 };
    switch (icon) {
        case 'research':
            return <Atom {...shared}/>;
        case 'web':
            return <PanelsTopLeft {...shared}/>;
        case 'game':
            return <Gamepad2 {...shared}/>;
        case 'software':
            return <Wrench {...shared}/>;
        default:
            return <Code2 {...shared}/>;
    }
}
export function SectionHeading({ eyebrow, title, desc, }: {
    eyebrow: string;
    title: string;
    desc?: string;
}) {
    return (<div className="section-head">
    <span className="eyebrow">{eyebrow}</span>
    <h2>
        {title}<span className="dot">.</span>
    </h2>
      {desc && <p>{desc}</p>}
    </div>);
}
export function Reveal({ children, className = '', }: {
    children: ReactNode;
    className?: string;
}) {
    return (<motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.52, ease: 'easeOut' }}>
      {children}
    </motion.div>);
}
export function MediaPlaceholder({ label, small = false, }: {
    label: string;
    small?: boolean;
}) {
    return (<div className={`media-placeholder ${small ? 'media-small' : ''}`}>
    <div className="media-circle">
      <Code2 size={small ? 24 : 38} strokeWidth={1.4}/>
    </div>
    <span>{label}</span>
    <small>Media coming soon</small>
    </div>);
}
export function ProjectCard({ project, compact = false, }: {
    project: Project;
    compact?: boolean;
}) {
    const thumbnail = projectThumbnails[project.slug];
    return (<article className={`project-card card ${compact ? 'compact' : ''}`}>
    <Link to={`/projects/${project.slug}`} className={`project-visual${thumbnail ? ' project-visual--thumbnail' : ''}`} aria-label={`View ${project.title}`}>
        {thumbnail ? (<img className="project-thumbnail" src={thumbnail} alt={`${project.title} project thumbnail`} loading="lazy"/>) : (<ProjectIcon icon={project.icon} size={compact ? 34 : 48}/>)}
        {!thumbnail && (<span className="project-visual-mark">{project.category}</span>)}
    </Link>

    <div className="project-body">
      <span className="eyebrow">{project.eyebrow}</span>
      <h3>
        <Link to={`/projects/${project.slug}`}>
            {project.title} <ArrowUpRight size={19}/>
        </Link>
      </h3>
      <p>{project.summary}</p>
      <div className="tags">
          {project.technologies.slice(0, compact ? 3 : 5).map((technology) => (<span className="tag" key={technology}>
              {technology}
      </span>))}
    </div>
        {project.status && <small className="muted">{project.status}</small>}
    </div>
    </article>);
}
