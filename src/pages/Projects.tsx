import { useSearchParams } from 'react-router-dom';
import { projects } from '../data/content';
import { ProjectCard, SectionHeading } from '../components/UI';
const cats = ['All', 'Research', 'Full-stack', 'Games', 'Software', 'Frontend'];
export default function Projects() {
    const [params, setParams] = useSearchParams();
    const category = params.get('category') || 'All';
    const skill = params.get('skill') || '';
    const filtered = projects.filter(p => (category === 'All' || p.category === category) && (!skill || p.technologies.some(t => t.toLowerCase() === skill.toLowerCase())));
    return <div className="wrap page-main">
    <SectionHeading eyebrow="PROJECT ARCHIVE" title="Selected & archived work" desc="A collection of software, games, machine learning applications and research projects."/>
    <div className="filters" role="group" aria-label="Filter projects">{cats.map(c => <button key={c} className={'filter ' + (category === c ? 'active' : '')} onClick={() => setParams(old => {
                const s = new URLSearchParams(old);
                if (c === 'All')
                    s.delete('category');
                else
                    s.set('category', c);
                return s;
            })}>{c}</button>)}</div>{skill && <div className="filter-info">Showing projects using <strong>{skill}</strong>
      <button onClick={() => setParams(old => { const s = new URLSearchParams(old); s.delete('skill'); return s; })}>Clear skill filter ×</button>
    </div>}<div className="archive-grid">{filtered.map(p => <ProjectCard key={p.slug} project={p} compact/>)}</div>{filtered.length === 0 && <div className="empty-state card">
    <h3>No matching projects yet.</h3>
    <p>This skill is part of my toolkit, but a matching public project hasn't been linked to it.</p>
    <button className="button outline" onClick={() => setParams({})}>View all projects</button>
    </div>}</div>;
}
