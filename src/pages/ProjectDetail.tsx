import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/content';
import { ProjectIcon } from '../components/UI';
function BiomarkerDetails() {
    const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    useEffect(() => {
        const root = document.documentElement;
        const syncTheme = () => setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
        syncTheme();
        const observer = new MutationObserver(syncTheme);
        observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);
    const workflowSrc = `/images/research/research-workflow-${theme}.webp`;
    return <>
    <div className="biomarker-overview">
      <div className="biomarker-main">
        <h2>What I built</h2>
        <p>During my internship at the Rajiv Gandhi Centre for Biotechnology, I built a Python- and R-based analysis workflow connecting RNA-seq preprocessing, differential expression, pathway exploration, and in silico compound screening. This case study focuses on the computational implementation; the scientific findings and figures are presented on the Research page.</p>
        <h2>Computational workflow</h2>
        <figure className="biomarker-workflow-figure">
          <a className="workflow-image" href={workflowSrc} target="_blank" rel="noreferrer" aria-label={`Open ${theme} theme computational workflow diagram`}>
            <img src={workflowSrc} alt={`Computational research workflow (${theme} theme): data collection, differential expression, pathway analysis, target identification, and drug screening`} loading="lazy"/>
          </a>
          <figcaption>Computational pipeline overview · Internship thesis Fig. 3.1</figcaption>
        </figure>
        <ol className="biomarker-steps">
          <li>
            <strong>Prepare RNA-seq data</strong>
            <span>Match samples, filter low-expression genes and normalize counts.</span>
          </li>
          <li>
            <strong>Identify differentially expressed genes</strong>
            <span>Use R and DESeq2 to compare treatment-response groups.</span>
          </li>
          <li>
            <strong>Explore affected pathways</strong>
            <span>Analyze ranked genes with GSEA and visualize related pathways in Cytoscape.</span>
          </li>
          <li>
            <strong>Prioritize and assess candidates</strong>
            <span>Investigate PTPN2 and screen compounds with AutoDock Vina/PyRx and ADMET prediction tools.</span>
          </li>
        </ol>
        <h2>Implementation outcome</h2>
        <p>The workflow connected raw expression data to a shortlist of candidate pathways, targets, and molecules. Its computational outputs included prioritizing PTPN2 and docking CHEMBL8758; these are predictions requiring experimental validation, not evidence of clinical efficacy.</p>
        <Link className="text-link" to="/research">Explore scientific findings, figures & publication <ArrowUpRight size={17}/>
        </Link>
      </div>
      <aside className="detail-aside card">
        <span className="eyebrow">PROJECT AT A GLANCE</span>
        <h3>Computational bioinformatics</h3>
        <p>Research internship at Rajiv Gandhi Centre for Biotechnology (RGCB).</p>
        <div className="separator"/>
        <strong>Core technologies</strong>
        <div className="tags" style={{ marginTop: 12 }}>{['Python', 'R', 'DESeq2', 'GSEA', 'Cytoscape', 'AutoDock Vina', 'PyRx'].map(t => <Link className="tag interactive-tag" key={t} to={'/projects?skill=' + encodeURIComponent(t)}>{t}</Link>)}</div>
        <div className="separator"/>
        <p>Purely computational research: no wet-lab studies or clinical trials were conducted.</p>
      </aside>
    </div>
    </>;
}
function FacultyDetails() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    useEffect(() => {
        const root = document.documentElement;
        const syncTheme = () => {
            setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
        };
        syncTheme();
        const observer = new MutationObserver(syncTheme);
        observer.observe(root, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });
        return () => observer.disconnect();
    }, []);
    const architectureSrc = `/images/projects/faculty/faculty-architecture-${theme}.webp`;
    const methodologySrc = `/images/projects/faculty/faculty-methodology-${theme}.webp`;
    return (<div className="detail-layout faculty-case-study">
    <div>
      <h2>The project</h2>
      <p>
          Originally a 2024 B.Tech team project, Automated Web-Based Faculty Upscaling
          for Higher Education was designed to help educators find suitable
          professional-development courses and track their learning. The current
          GitHub repository is a restored, streamlined demonstration of the concept.
      </p>

      <h2>How recommendations work</h2>
      <ol className="biomarker-steps">
        <li>
          <strong>Prepare course information</strong>
          <span>Read NPTEL course descriptions and normalize and stem text using Python and NLTK.</span>
        </li>
        <li>
          <strong>Represent faculty interests</strong>
          <span>Combine specialization, department, designation and interests into comparable text features.</span>
        </li>
        <li>
          <strong>Rank relevant courses</strong>
          <span>Apply CountVectorizer and cosine similarity, exclude completed course titles and return six recommendations.</span>
        </li>
        <li>
          <strong>Display and track</strong>
          <span>Present recommendations in React and support course enrollment, manual progress updates and appraisal feedback.</span>
        </li>
      </ol>

      <h2>Application architecture</h2>
      <p>
          In a full local setup, the React frontend requests recommendations from
          the Node.js/Express API. The API starts the Python recommendation script
          on demand and can save demo records to MongoDB. When the API is unavailable,
          the demonstration uses a separate browser-based recommender and localStorage fallback.
      </p>
      <figure className="faculty-diagram-figure">
        <a href={architectureSrc} target="_blank" rel="noreferrer" aria-label="Open full-size system architecture diagram">
          <img src={architectureSrc} alt="System architecture linking React frontend, Node.js and Express backend, MongoDB and the Python recommendation engine" loading="lazy"/>
        </a>
        <figcaption>System architecture · {theme} theme · Open diagram at full size</figcaption>
      </figure>

      <h2>Recommendation methodology</h2>
      <p>
          NPTEL course details are cleaned and transformed into text features.
          Faculty interests are compared with course descriptions using cosine
          similarity to rank relevant suggestions.
      </p>
      <figure className="faculty-diagram-figure">
        <a href={methodologySrc} target="_blank" rel="noreferrer" aria-label="Open full-size recommendation methodology diagram">
          <img src={methodologySrc} alt="Recommendation methodology showing NPTEL course data, preprocessing, faculty details, cosine similarity and course recommendations" loading="lazy"/>
        </a>
        <figcaption>Recommendation methodology · {theme} theme · Open diagram at full size</figcaption>
      </figure>

      <h2>Original project versus current demo</h2>
      <p>
          The original academic project included authenticated faculty and administrator
          workflows, course recommendations and learning progress monitoring. The restored
          demo deliberately simplifies these into a shared profile and administrator view.
          It does not provide secure multi-user authentication, Google sign-in or password
          recovery, and progress is not linked to NPTEL completion data.
      </p>

      <h2>Application preview</h2>
      <figure className="faculty-diagram-figure">
        <a href="/images/projects/faculty/faculty-dashboard.webp" target="_blank" rel="noreferrer" aria-label="Open full-size SkillPath course recommendations screenshot">
          <img src="/images/projects/faculty/faculty-dashboard.webp" alt="SkillPath hosted demo displaying six recommended NPTEL courses, similarity percentages, and Add to path buttons" loading="lazy"/>
        </a>
        <figcaption>
            SkillPath hosted demo · Course recommendations shown using the browser fallback engine
        </figcaption>
      </figure>
      <p>
          The{' '}
        <a href="https://faculty-upscaling-system-six.vercel.app/" target="_blank" rel="noreferrer" className="text-link">
            live demo <ExternalLink size={15}/>
        </a>{' '}
          showcases the experience. The{' '}
        <a href="https://github.com/ItsJensen316/faculty-upscaling-system" target="_blank" rel="noreferrer" className="text-link">
            GitHub repository <ExternalLink size={15}/>
        </a>{' '}
          contains the local Express/Python integration and documents the browser fallback.
      </p>
    </div>

    <aside className="detail-aside card">
      <span className="eyebrow">PROJECT AT A GLANCE</span>
      <h3>Full-stack & NLP</h3>
      <p>Academic team project · 2024</p>
      <p>Restored interactive demonstration</p>
      <div className="separator"/>
      <strong>Core technologies</strong>
      <div className="tags" style={{ marginTop: 12 }}>
          {['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'NLTK', 'Scikit-learn'].map((tech) => (<span className="tag" key={tech}>{tech}</span>))}
      </div>
      <div className="separator"/>
      <p>Recommendations use content-based similarity—not a trained neural network or collaborative filtering.</p>
    </aside>
    </div>);
}
const racingScreenshots = [
    {
        file: 'race.webp',
        title: 'Race gameplay',
        description: 'Dockyard Run with two cars, lap timers and boost meters.',
    },
    {
        file: 'race-setup.webp',
        title: 'Track selection',
        description: 'Choose a circuit and set the race distance.',
    },
    {
        file: 'menu.webp',
        title: 'Main menu',
        description: 'Start a race, review controls and adjust settings.',
    },
];
const racingImageRoot = 'https://raw.githubusercontent.com/ItsJensen316/2D-Multiplayer-Racing/main/docs/screenshots/';
function RacingDetails() {
    return (<div className="detail-layout racing-case-study">
    <div>
      <h2 style={{ marginTop: 36 }}>The game</h2>
      <p>
          APEX / Local Racing is a two-player, top-down arcade racing game built
          in Python and Pygame. Both players compete on the same computer and
          keyboard, racing across six circuits with configurable lap counts.
          This is local multiplayer, not online racing.
      </p>

      <h2>Gameplay preview</h2>
      <figure className="racing-screenshot">
        <a href={`${racingImageRoot}race.webp`} target="_blank" rel="noreferrer" aria-label="Open full-size racing gameplay screenshot">
          <img src={`${racingImageRoot}race.webp`} alt="APEX local racing game showing two cars on Dockyard Run with lap timing HUD" loading="lazy"/>
        </a>
        <figcaption>Actual Pygame gameplay · Dockyard Run circuit</figcaption>
      </figure>

      <h2>Core game mechanics</h2>
      <ol className="biomarker-steps">
        <li>
          <strong>Responsive car handling</strong>
          <span>Fixed-step movement at 120 updates per second, with acceleration, braking, steering and collisions.</span>
        </li>
        <li>
          <strong>Lap and race logic</strong>
          <span>Ordered checkpoints, direction-aware lap validation, configurable race distance and recorded times.</span>
        </li>
        <li>
          <strong>Boost and recovery</strong>
          <span>Individual rechargeable boosts and safe car recovery with cooldowns and time penalties.</span>
        </li>
        <li>
          <strong>Audio and feedback</strong>
          <span>Generated engine loops and effects, skid marks, collision sparks, countdown cues and a results screen.</span>
        </li>
      </ol>

      <h2>How it is built</h2>
      <p>
          Pygame handles rendering, keyboard input and the game screens.
          Dedicated Python modules separate physics and collisions, track layouts,
          persistent records, procedural audio and visual effects. Circuit
          definitions are stored in JSON, while lap records and audio settings
          are saved locally outside the installation folder.
      </p>
      <p>
          Instead of shipping audio recordings, the sound engine produces engine
          loops and racing effects from synthesized waveforms. The game can also
          run silently if an audio device is unavailable.
      </p>

      <h2>More from the game</h2>
      <div className="racing-screenshot-grid">
          {racingScreenshots.slice(1).map((screen) => (<figure className="racing-screenshot" key={screen.file}>
        <a href={`${racingImageRoot}${screen.file}`} target="_blank" rel="noreferrer" aria-label={`Open ${screen.title.toLowerCase()} screenshot`}>
          <img src={`${racingImageRoot}${screen.file}`} alt={`APEX Local Racing: ${screen.description}`} loading="lazy"/>
        </a>
        <figcaption>
          <strong>{screen.title}</strong> · {screen.description}
        </figcaption>
      </figure>))}
    </div>

    <h2>Play or explore the source</h2>
    <p>
          The Windows release packages the game into a standalone executable;
          Python and separate assets are not required on compatible PCs.
          The repository also contains source installation instructions and
          automated tests for tracks, physics, timing, records and audio.
    </p>
    </div>

    <aside className="detail-aside card">
      <span className="eyebrow">PROJECT AT A GLANCE</span>
      <h3>Local arcade racing</h3>
      <p>Two players · One keyboard · Six circuits</p>
      <div className="separator"/>
      <strong>Core technologies</strong>
      <div className="tags" style={{ marginTop: 12 }}>
        <span className="tag">Python</span>
        <span className="tag">Pygame</span>
        <span className="tag">JSON</span>
      </div>
      <div className="separator"/>
      <p>
          Fixed-step physics · Modular components · Procedural audio ·
          Local record persistence
      </p>
    </aside>
    </div>);
}
const crownScreenshots = [
    {
        file: 'forest.webp',
        title: 'Forest exploration',
        description: 'Platforming, environmental puzzles and early encounters.',
    },
    {
        file: 'platforms.webp',
        title: 'Inside the tower',
        description: 'Tower platforming and puzzle-focused progression.',
    },
];
const crownMediaRoot = '/images/projects/crown/';
function CrownDetails() {
    return (<div className="detail-layout crown-case-study">
    <div>
      <h2 style={{ marginTop: 36, marginBottom: 16 }}>The game</h2>
      <p>
          A pixel-art action platformer following a princess searching for her
          captured brother. The v1.0.0 demo connects two scenes: a hostile
          forest and an abandoned tower. Developed together with{' '}
        <a className="text-link" href="https://www.linkedin.com/in/roshan--patel/" target="_blank" rel="noopener noreferrer">
            Roshan Kumar Patel <ExternalLink size={15}/>
        </a>
          , it combines exploration, combat, environmental puzzles and story progression.
      </p>

      <h2 style={{ marginTop: 36, marginBottom: 16 }}>Core game mechanics</h2>
      <ol className="biomarker-steps">
        <li>
          <strong>Platforming and puzzles</strong>
          <span>Side-scrolling movement, slopes, ladders, movable objects, a picture puzzle and an elevator switch.</span>
        </li>
        <li>
          <strong>Combat and boss encounter</strong>
          <span>Sword attacks, running attacks, timed critical hits, patrol enemies and a tower keeper.</span>
        </li>
        <li>
          <strong>Inventory and story</strong>
          <span>Collectibles, upgrades, NPC conversations and an illustrated story journal.</span>
        </li>
        <li>
          <strong>Player preferences and progress</strong>
          <span>Remappable controls, audio options, fullscreen support and locally saved discoveries.</span>
        </li>
      </ol>

      <h2 style={{ marginTop: 36, marginBottom: 16 }}>Under the hood</h2>
      <p>
          Built with Python and Pygame, with separate modules for game scenes,
          character and enemy behavior, sword combat, collision detection,
          puzzles, inventory, dialogue, audio and configuration. The game
          loads maps and settings separately from the core logic.
      </p>

      <h2 style={{ marginTop: 36, marginBottom: 16 }}>Gameplay screenshots</h2>
      <p>Two scenes from the playable v1.0.0 Windows demo.</p>
      <div className="racing-screenshot-grid">
          {crownScreenshots.map((screen) => {
            const imageSrc = `${crownMediaRoot}${screen.file}`;
            return (<figure className="racing-screenshot" key={screen.file}>
        <a href={imageSrc} target="_blank" rel="noreferrer" aria-label={`Open ${screen.title.toLowerCase()} screenshot`}>
          <img src={imageSrc} alt={`Crown of Courage: ${screen.description}`} loading="lazy"/>
        </a>
        <figcaption>
          <strong>{screen.title}</strong> · {screen.description}
        </figcaption>
      </figure>);
        })}
    </div>

    <h2 style={{ marginTop: 36, marginBottom: 16 }}>Gameplay preview</h2>
    <p>
          A short animated preview of the playable v1.0.0 demo.
    </p>
    <figure className="racing-screenshot">
      <a href={`${crownMediaRoot}gameplay-preview.gif`} target="_blank" rel="noopener noreferrer" aria-label="Open Crown of Courage animated gameplay preview">
        <img src={`${crownMediaRoot}gameplay-preview.gif`} alt="Animated Crown of Courage gameplay preview" loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }}/>
      </a>
      <figcaption>Animated gameplay preview · Crown of Courage v1.0.0</figcaption>
    </figure>

    <h2 style={{ marginTop: 36, marginBottom: 16 }}>Play or explore the source</h2>
    <p>
          The Windows installer includes the playable two-scene demo and does
          not require a separate Python installation. The repository includes
          source code, technical documentation and asset credits.
    </p>
    <a className="text-link" href="https://github.com/ItsJensen316/Crown-of-Courage-Pygame-Project/blob/main/docs/GAME_GUIDE.md" target="_blank" rel="noopener noreferrer">
          Read the game guide <ExternalLink size={15}/>
    </a>
    </div>

    <aside className="detail-aside card">
      <span className="eyebrow">PROJECT AT A GLANCE</span>
      <h3>Two-scene playable demo</h3>
      <p>Pixel-art action platformer · Windows v1.0.0</p>
      <div className="separator"/>
      <strong>Built with</strong>
      <div className="tags" style={{ marginTop: 12 }}>
        <span className="tag">Python</span>
        <span className="tag">Pygame</span>
        <span className="tag">JSON</span>
      </div>
      <div className="separator"/>
      <p>
          Co-created with{' '}
        <a className="text-link" href="https://www.linkedin.com/in/roshan--patel/" target="_blank" rel="noopener noreferrer">
            Roshan Kumar Patel <ExternalLink size={15}/>
        </a>
          . The Windows installer runs without Python or Pygame installed separately.
      </p>
    </aside>
    </div>);
}
const employeeScreenshots = [
    {
        file: 'admin-menu.webp',
        title: 'Administrator menu',
        description: 'Actions for managing employees and records.',
    },
    {
        file: 'employee-card.webp',
        title: 'Employee profile',
        description: 'Readable details for an individual employee.',
    },
    {
        file: 'employee-records.webp',
        title: 'Employee records',
        description: 'A formatted view of records stored in MySQL.',
    },
];
const employeeMediaRoot = '/images/projects/employee-management/';
function EmployeeDetails() {
    return (<div className="detail-layout employee-case-study">
    <div className="employee-main">
      <section className="employee-section">
        <h2>Built in 2021. Revisited in 2026.</h2>
        <p>
            This began as a Class XII Python–MySQL project. Rather than replace
            that history, the original source and report remain untouched in
            the repository. The 2026 restoration keeps the terminal-based
            experience while making the application easier to maintain and test.
        </p>
        <div className="employee-evolution" aria-label="Original and restored versions compared">
          <div className="employee-era">
            <span className="eyebrow">ORIGINAL · 2021</span>
            <h3>Learning the fundamentals</h3>
            <p>Single-file Python program, IDLE menus, MySQL, hardcoded demo credentials and manual outputs.</p>
            <a className="text-link" href="https://github.com/ItsJensen316/Employee-Management-System/tree/main/original-2021" target="_blank" rel="noopener noreferrer">
                Original source and report <ExternalLink size={15}/>
            </a>
          </div>
          <div className="employee-era employee-era-restored">
            <span className="eyebrow">RESTORED · 2026</span>
            <h3>Applying better practices</h3>
            <p>Focused modules, terminal menus, parameterized SQL, hashed credentials, local configuration and smoke tests.</p>
            <a className="text-link" href="https://github.com/ItsJensen316/Employee-Management-System/tree/main/restored-2026" target="_blank" rel="noopener noreferrer">
                Restored Python code <ExternalLink size={15}/>
            </a>
          </div>
        </div>
      </section>

      <section className="employee-section">
        <h2>Inside the application</h2>
        <p>Actual terminal screens from the restored 2026 version.</p>
        <div className="employee-screenshot-grid">
            {employeeScreenshots.map((screen, index) => {
            const src = `${employeeMediaRoot}${screen.file}`;
            return (<figure className={`employee-screenshot${index === 2 ? ' employee-screenshot--wide' : ''}`} key={screen.file}>
          <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${screen.title} screenshot`}>
            <img src={src} alt={`Employee Management System — ${screen.title}`} loading="lazy"/>
          </a>
          <figcaption>
            <strong>{screen.title}</strong>
            <span>{screen.description}</span>
          </figcaption>
        </figure>);
        })}
      </div>
    </section>

    <section className="employee-section">
      <h2>What the restoration improved</h2>
      <div className="employee-feature-grid">
        <div className="employee-feature">
          <strong>Employee workflows</strong>
          <p>Administrator record management, department filtering, salary adjustments and recognition features.</p>
        </div>
        <div className="employee-feature">
          <strong>Role-based menus</strong>
          <p>Administrator sign-in and employee access to a personal record using an assigned PIN.</p>
        </div>
        <div className="employee-feature">
          <strong>Safer data handling</strong>
          <p>Hashed passwords and PINs, parameterized query values, and environment-based database settings.</p>
        </div>
        <div className="employee-feature">
          <strong>Maintainable code and tests</strong>
          <p>Separated Python modules and unittest smoke checks for authentication and database integrity.</p>
        </div>
      </div>
    </section>

    <section className="employee-section">
      <h2>Explore the project</h2>
      <p>
            The repository includes both editions, a sample database schema,
            setup instructions, and the tests. This is a local educational
            CLI application—not a deployed HR platform.
      </p>
      <a className="text-link" href="https://github.com/ItsJensen316/Employee-Management-System" target="_blank" rel="noopener noreferrer">
            View the repository <ExternalLink size={15}/>
      </a>
    </section>
    </div>

    <aside className="detail-aside card">
      <span className="eyebrow">PROJECT AT A GLANCE</span>
      <h3>From first project to restoration</h3>
      <p>Class XII Computer Science · 2020–2021</p>
      <p>Restored edition · 2026</p>
      <div className="separator"/>
      <strong>Built with</strong>
      <div className="tags" style={{ marginTop: 12 }}>
        <span className="tag">Python</span>
        <span className="tag">MySQL</span>
        <span className="tag">SQL</span>
        <span className="tag">unittest</span>
      </div>
      <div className="separator"/>
      <p>
          Two distinct editions are preserved in GitHub, so the 2026 improvements
          are never represented as part of the original 2021 submission.
      </p>
    </aside>
    </div>);
}
function PortfolioDetails() {
    return (<section className="detail-section" style={{ maxWidth: 780, marginTop: 36 }}>
    <h2>About this website</h2>
    <p>
        This website was redesigned from an earlier HTML, CSS and JavaScript
        portfolio into a React and TypeScript application. It brings together
        selected projects, work experience, skills and research in a clean,
        responsive interface with light and dark themes.
    </p>
    <p style={{ marginTop: 16 }}>
        You're already viewing the finished product. If you'd like to explore
        how it was developed, the source code is available on GitHub.
    </p>
    <a className="text-link" href="https://github.com/ItsJensen316/Portfolio" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
        Explore the source code <ExternalLink size={16}/>
    </a>
    </section>);
}
export default function ProjectDetail() {
    const { slug } = useParams();
    const p = projects.find(x => x.slug === slug);
    if (!p)
        return <div className="wrap page-main">
    <h1>Project not found</h1>
    <Link className="text-link" to="/projects">All projects</Link>
    </div>;
    const isBiomarker = p.slug === 'biomarker-discovery';
    const isFaculty = p.slug === 'faculty-recommender';
    const isRacing = p.slug === '2d-racing-game';
    const isCrown = p.slug === 'crown-of-courage';
    const isEmployee = p.slug === 'employee-management';
    const isPortfolio = p.slug === 'portfolio';
    return <div className="wrap page-main detail-page">
    <Link to="/projects" className="back-link">
      <ArrowLeft size={18}/> All projects</Link>
      <div className="detail-header">
        <span className="eyebrow">{p.eyebrow}</span>
        <h1>{p.title}<span className="dot">.</span>
        </h1>
        <p>{p.description}</p>
        <div className="tags">{p.technologies.map(t => <Link className="tag interactive-tag" key={t} to={'/projects?skill=' + encodeURIComponent(t)}>{t}</Link>)}</div>
        <div className="detail-links">{p.links.map(l => <a className="button outline" key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} <ExternalLink size={16}/>
        </a>)}</div>
      </div>
    {isBiomarker ? <BiomarkerDetails /> : isFaculty ? <FacultyDetails /> : isRacing ? <RacingDetails /> : isCrown ? <CrownDetails /> : isEmployee ? <EmployeeDetails /> : isPortfolio ? <PortfolioDetails /> : <>
      <div className="detail-cover">
        <ProjectIcon icon={p.icon} size={86}/>

      </div>
      <div className="detail-layout">
        <div>
          <h2>About this project</h2>
          <p>{p.description}</p>{p.sections?.map(s => <section className="detail-section" key={s.heading}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </section>)}</div>
        <aside className="detail-aside card">
          <span className="eyebrow">PROJECT AT A GLANCE</span>
          <h3>{p.category}</h3>
          <p>{p.summary}</p>
        </aside>
      </div>
    </>}
    </div>;
}
