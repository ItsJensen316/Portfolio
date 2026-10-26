import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Brain, Code2, FlaskConical, Database, Globe, Terminal, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { SectionHeading, ProjectCard, Reveal } from '../components/UI';
import { profile, experiences, projects, skills, publication } from '../data/content';
const iconMap = { code: Code2, globe: Globe, brain: Brain, database: Database, flask: FlaskConical, terminal: Terminal };
export default function Home() {
    return <>
    <section className="hero" id="home">
      <div className="hero-glow"/>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="status">
            <span className="status-light"/> ASSOCIATE SOFTWARE ENGINEER · ACCENTURE</div>
            <p className="hero-hello">Hello, I'm</p>
            <h1>Jensen<br />
              <span>Jose.</span>
            </h1>
            <h2>Engineering ideas into <em>intelligent solutions.</em>
            </h2>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-buttons">
              <Link className="button primary" to="/#projects">Explore my work <ArrowUpRight size={18}/>
              </Link>
              <Link className="button outline" to="/#contact">Get in touch <ArrowRight size={17}/>
              </Link>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href={'mailto:' + profile.email} aria-label="Email">
                <Mail />
              </a>
              <span className="hero-line"/>
              <span>SOFTWARE · AI/ML · RESEARCH</span>
            </div>
          </div>
          <div className="portrait-shell">
            <div className="portrait-frame">
              <img className="portrait-photo" src="/images/profile.webp" alt="Portrait of Jensen Jose outdoors with a mountain landscape" loading="eager" fetchPriority="high"/>
            </div>
            <div className="orbit orbit-one"/>
            <div className="orbit orbit-two"/>
            <div className="portrait-label">
              <span className="status-light"/> Building what comes next</div>
            </div>
          </div>
          <div className="wrap hero-bottom">
            <a href="#about">SCROLL TO EXPLORE <ArrowDown size={15}/>
            </a>
            <span>PORTFOLIO / 2026</span>
          </div>
        </section>
        <section id="about" className="section wrap">
          <Reveal>
            <SectionHeading eyebrow="01 / ABOUT ME" title="A little about me" desc="Software engineering, curiosity and research-driven thinking."/>
          </Reveal>
          <div className="about-layout">
            <Reveal className="about-statement">
              <h3>Engineer by profession.<br />
                <span>Explorer by nature.</span>
              </h3>
              <p>{profile.bio}</p>
              <Link className="text-link" to="/#contact">Let's connect <ArrowUpRight size={18}/>
              </Link>
            </Reveal>
            <div className="focus-grid">
              <Reveal className="focus-card card">
                <Code2 size={25}/>
                <h4>Software Engineering</h4>
                <p>Applications, logic, systems and user-focused development.</p>
              </Reveal>
              <Reveal className="focus-card card">
                <Brain size={25}/>
                <h4>AI & Machine Learning</h4>
                <p>Data-driven approaches, NLP and model-based problem solving.</p>
              </Reveal>
              <Reveal className="focus-card card">
                <FlaskConical size={25}/>
                <h4>Computational Research</h4>
                <p>Applying software and analytics to biological research questions.</p>
              </Reveal>
            </div>
          </div>
        </section>
        <section id="experience" className="section section-alt">
          <div className="wrap">
            <Reveal>
              <SectionHeading eyebrow="02 / EXPERIENCE" title="The journey so far" desc="From interdisciplinary research to professional software engineering."/>
            </Reveal>
            <div className="timeline">{experiences.map((e, i) => <Reveal key={e.organization} className="timeline-item">
              <div className="timeline-pin"/>
              <article className="card experience-card">
                <div className="experience-top">
                  <span className="experience-icon">{i === 0 ? <BriefcaseBusiness /> : <FlaskConical />}</span>
                  <span className="eyebrow">{e.dates}</span>
                </div>
                <h3>{e.title}</h3>
                <h4>{e.organization}</h4>
                <p>{e.description}</p>
            {e.title === 'Research Intern' && (<Link className="text-link" to="/research">
    Explore internship research <ArrowUpRight size={16}/>
              </Link>)}
              <div className="tags">{e.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </article>
          </Reveal>)}</div>
        </div>
      </section>
      <section id="projects" className="section wrap">
        <Reveal>
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects that tell my story" desc="A selection spanning full-stack engineering, scientific computing and game development."/>
        </Reveal>
        <div className="featured-grid">{projects.filter(p => p.featured).map((p, i) => <Reveal key={p.slug} className={i === 0 ? 'feature-wide' : ''}>
          <ProjectCard project={p}/>
        </Reveal>)}</div>
        <div className="section-cta">
          <Link className="button outline" to="/projects">Explore all projects <ArrowUpRight size={18}/>
          </Link>
        </div>
      </section>
      <section id="skills" className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHeading eyebrow="04 / TECHNICAL TOOLKIT" title="Tools of the trade" desc="Explore technologies I've used in projects, development and research. Select a skill to find connected work."/>
          </Reveal>
          <div className="skills-grid">{skills.map(group => {
            const Icon = iconMap[group.icon as keyof typeof iconMap];
            return <Reveal key={group.category} className="card skill-card">
            <div className="skill-card-title">
              <span className="skill-icon">
                <Icon size={23}/>
              </span>
              <h3>{group.category}</h3>
            </div>
            <div className="tags skills-tags">{group.items.map(skill => <Link key={skill} to={'/projects?skill=' + encodeURIComponent(skill)} className="tag interactive-tag">{skill}<ArrowUpRight size={12}/>
            </Link>)}</div>
          </Reveal>;
        })}</div>
        </div>
      </section>
      <section id="research" className="section wrap">
        <Reveal>
          <SectionHeading eyebrow="05 / RESEARCH" title="Where code meets discovery" desc="Exploring complex biological questions through computational approaches."/>
        </Reveal>
        <Reveal className="research-panel card">
          <div className="research-panel-text">
            <span className="eyebrow">COMPUTATIONAL BIOLOGY · LYMPHOMA</span>
            <h3>From gene expression to candidate discoveries.</h3>
            <p>A computational investigation into lymphoma treatment resistance, combining transcriptomics, pathway analysis, target identification and molecular docking. Explore the methods, findings and publications.</p>
            <Link className="button primary" to="/research">Explore the research <ArrowUpRight size={18}/>
            </Link>
            <div className="publication-mini">
              <span>SELECTED PUBLICATION</span>
              <strong>{publication.title}</strong>
              <a href={publication.url} target="_blank" rel="noreferrer">Read on DOI <ArrowUpRight size={14}/>
              </a>
            </div>
          </div>
          <div className="research-graphic">
            <div className="research-step">GENE EXPRESSION <span>01</span>
            </div>
            <div className="research-connector"/>
            <div className="research-step">PATHWAY ANALYSIS <span>02</span>
            </div>
            <div className="research-connector"/>
            <div className="research-step">TARGET DISCOVERY <span>03</span>
            </div>
            <div className="research-connector"/>
            <div className="research-step">MOLECULAR DOCKING <span>04</span>
            </div>
            <small>Research workflow overview</small>
          </div>
        </Reveal>
      </section>
      <section id="education" className="section section-alt">
        <div className="wrap">
          <Reveal>
            <SectionHeading eyebrow="06 / EDUCATION" title="The foundation"/>
          </Reveal>
          <Reveal className="education-card card">
            <GraduationCap size={31}/>
            <div>
              <span className="eyebrow">2021 — 2025</span>
              <h3>B.Tech in Computer Science & Engineering</h3>
              <p>G.H. Raisoni College of Engineering, Nagpur</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section id="contact" className="section wrap">
        <Reveal>
          <SectionHeading eyebrow="07 / CONNECT" title="Let's make something meaningful" desc="Have a question or a collaboration in mind? I'd be glad to hear from you."/>
        </Reveal>
        <Reveal className="contact-card card">
          <div>
            <h3>Say hello<span className="dot">.</span>
            </h3>
            <p>Have a question, an opportunity or an idea to discuss? Feel free to get in touch by email or LinkedIn.</p>
            <a className="contact-email" href={'mailto:' + profile.email}>{profile.email} <ArrowUpRight size={20}/>
            </a>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={'mailto:' + profile.email + '?subject=Hello%20Jensen'}>Write an email <Mail size={18}/>
            </a>
            <a className="button outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18}/>
            </a>
          </div>
        </Reveal>
      </section>
    </>;
}
