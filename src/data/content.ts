export type Project = {
    slug: string;
    title: string;
    eyebrow: string;
    summary: string;
    description: string;
    technologies: string[];
    category: 'Research' | 'Full-stack' | 'Games' | 'Software' | 'Frontend';
    icon: 'research' | 'web' | 'game' | 'software' | 'portfolio';
    featured: boolean;
    links: {
        label: string;
        href: string;
    }[];
    sections?: {
        heading: string;
        body: string;
    }[];
    status?: string;
};
export const profile = {
    name: 'Jensen Jose',
    role: 'Associate Software Engineer',
    company: 'Accenture',
    email: 'itsjensenjose@gmail.com',
    github: 'https://github.com/ItsJensen316',
    linkedin: 'https://www.linkedin.com/in/itsjensenjose/',
    summary: 'I build practical software and explore intelligent technologies through engineering, data and research.',
    bio: 'I’m a Computer Science and Engineering graduate from G.H. Raisoni College of Engineering, Nagpur, currently working as an Associate Software Engineer at Accenture. My background spans full-stack applications, Python development, machine learning and computational biology research. I enjoy understanding complex problems and turning ideas into useful, thoughtfully built software.'
};
export const experiences = [
    { title: 'Associate Software Engineer',
        organization: 'Accenture',
        dates: 'Mar 2026 — Present',
        description: 'Working as an Associate Software Engineer at Accenture.',
        tags: ['Software Engineering'] },
    { title: 'Research Intern',
        organization: 'Rajiv Gandhi Centre for Biotechnology',
        dates: 'Dec 2024 — May 2025',
        description: 'Investigated lymphoma treatment resistance using transcriptomic analysis, pathway enrichment, target prioritization and computational drug discovery methods.',
        tags: ['Python', 'R', 'DESeq2', 'GSEA', 'Cytoscape', 'Molecular Docking'] }
];
export const skills = [
    { category: 'Programming Languages', icon: 'code', items: ['Python', 'Java', 'C', 'C++', 'R', 'JavaScript'] },
    { category: 'Web Development', icon: 'globe', items: ['HTML', 'CSS', 'React', 'Node.js'] },
    { category: 'AI, ML & Data Science',
        icon: 'brain',
        items: ['Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Matplotlib', 'Seaborn'] },
    { category: 'Databases', icon: 'database', items: ['SQL', 'MySQL', 'MongoDB', 'Oracle'] },
    { category: 'Research & Bioinformatics', icon: 'flask', items: ['DESeq2', 'GSEA', 'Cytoscape', 'AutoDock Vina', 'PyRx'] },
    { category: 'Developer Tools', icon: 'terminal', items: ['Git', 'GitHub'] }
];
export const projects: Project[] = [
    { slug: 'biomarker-discovery',
        title: 'Biomarker Discovery & Drug Prediction',
        eyebrow: 'RESEARCH / COMPUTATIONAL BIOLOGY',
        summary: 'In silico RNA-seq analysis, pathway exploration and candidate drug screening for lymphoma resistance.',
        description: 'A computational bioinformatics project exploring lymphoma treatment resistance using RNA-seq, DESeq2, GSEA, pathway networks and in silico molecular docking.',
        technologies: ['Python', 'R', 'DESeq2', 'GSEA', 'Cytoscape', 'AutoDock Vina', 'PyRx'],
        category: 'Research',
        icon: 'research',
        featured: true,
        links: [{ label: 'IEEE Publication', href: 'https://ieeexplore.ieee.org/document/11156239' }],
        sections: [{ heading: 'Research approach',
                body: 'Analyzed public RNA-seq data with Python, R and DESeq2; explored enriched pathways using GSEA and Cytoscape; then assessed PTPN2 and candidate compounds using in silico docking and ADMET tools.' }, { heading: 'Computational outcomes',
                body: 'Interferon-related pathways were highlighted, PTPN2 was prioritized as a candidate target, and CHEMBL8758 produced a best reported docking score of −8.1 kcal/mol. These are computational predictions, not experimentally or clinically validated treatments.' }] },
    { slug: 'faculty-recommender',
        title: 'Faculty Course Recommendation System',
        eyebrow: 'FULL-STACK / CONTENT-BASED NLP',
        summary: 'A faculty upskilling platform combining an academic team project with a restored, interactive portfolio demo.',
        description: 'Originally developed as a 2024 B.Tech team project, Automated Web-Based Faculty Upscaling for Higher Education connects faculty profiles to relevant NPTEL courses using a content-based recommendation engine. A streamlined React demonstration showcases recommendations, learning paths and progress tracking.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'Scikit-learn', 'NLP', 'JavaScript'],
        category: 'Full-stack',
        icon: 'web',
        featured: true,
        links: [{ label: 'Live Demo', href: 'https://faculty-upscaling-system-six.vercel.app/' }, { label: 'Source Code', href: 'https://github.com/ItsJensen316/faculty-upscaling-system' }],
        sections: [{ heading: 'Original academic project',
                body: 'The 2024 team project introduced faculty/admin dashboards, faculty learning paths, progress reporting and course recommendations built around NPTEL Faculty Development Programme data.' }, { heading: 'Restored interactive demonstration',
                body: 'The GitHub remake retains a streamlined faculty profile, six course recommendations, course enrollment, manually managed learning progress, appraisal feedback and a simplified administrator view. It is a demonstration using a shared profile, not a secure multi-user university deployment.' }, { heading: 'Recommendation pipeline',
                body: 'The Python recommender reads NPTEL course data, normalizes and stems text using NLTK, converts descriptions and faculty interests into CountVectorizer features, and ranks courses using cosine similarity. It excludes exact course titles marked as completed and returns six recommendations.' }, { heading: 'Backend and data flow',
                body: 'In the local full-stack configuration, React calls an Express API, which launches the Python script for a new recommendation request. MongoDB can persist demo information and results. When the backend is unavailable, the frontend uses a separate browser-based recommendation fallback with localStorage; the hosted demo should not be described as always running Python.' }, { heading: 'Scope and limitations',
                body: 'The restored demo does not include the original secure multi-user authentication, Google login or password-reset workflows. Learning progress is entered manually and is not synchronized with NPTEL. The original 2024 paper and thesis describe the academic system, while the linked repository documents the current implementation.' }] },
    {
        slug: '2d-racing-game',
        title: '2D Multiplayer Racing Game',
        eyebrow: 'PYTHON / GAME DEVELOPMENT',
        summary: 'APEX / Local Racing — six circuits, same-keyboard competition, physics, boosts and lap records.',
        description: 'APEX / Local Racing is a top-down arcade racing game built with Python and Pygame. Two players share a keyboard across six circuits, with fixed-step physics, collision handling, rechargeable boosts, checkpoint-based laps, synthesized audio and locally saved records.',
        technologies: ['Python', 'Pygame'],
        category: 'Games',
        icon: 'game',
        featured: true,
        links: [
            { label: 'Download for Windows',
                href: 'https://github.com/ItsJensen316/2D-Multiplayer-Racing/releases/latest/download/ApexRacing.exe' },
            { label: 'Source Code', href: 'https://github.com/ItsJensen316/2D-Multiplayer-Racing' },
        ],
    },
    {
        slug: 'crown-of-courage',
        title: 'Crown of Courage',
        eyebrow: 'PYTHON / PIXEL-ART PLATFORMER',
        summary: 'A story-driven pixel-art platformer featuring combat, puzzles, exploration and a downloadable Windows demo.',
        description: 'Crown of Courage: A Princess’s Quest is a two-scene action-platformer demo developed collaboratively with Roshan Kumar Patel. Follow a princess through a dangerous forest and an abandoned tower while exploring, solving environmental puzzles, collecting upgrades and battling enemies.',
        technologies: ['Python', 'Pygame', 'JSON'],
        category: 'Games',
        icon: 'game',
        featured: false,
        status: 'Windows demo v1.0.0 available',
        links: [
            {
                label: 'Download Windows Demo',
                href: 'https://github.com/ItsJensen316/Crown-of-Courage-Pygame-Project/releases/download/v1.0.0/Crown-of-Courage-Setup-1.0.0.exe',
            },
            {
                label: 'Source Code',
                href: 'https://github.com/ItsJensen316/Crown-of-Courage-Pygame-Project',
            },
            {
                label: 'Gameplay Preview',
                href: 'https://github.com/user-attachments/assets/a705e4c6-acfb-444d-aae9-0528dff1b600',
            },
        ],
        sections: [
            {
                heading: 'Gameplay and progression',
                body: 'The demo connects a forest and tower scene, combining platforming, a nine-piece entrance puzzle, movable boxes and an elevator mechanism. A story journal records discoveries across playthroughs.',
            },
            {
                heading: 'Combat and game systems',
                body: 'Pygame powers enemy patrols, sword and running attacks, timing-based critical hits, a tower-keeper boss, collectibles, inventory items and player upgrades.',
            },
            {
                heading: 'Engineering and distribution',
                body: 'The codebase separates actors, combat, world mechanics, story, audio, UI and configuration. Scene maps and player preferences use structured data files. A standalone Windows installer lets visitors try the demo without installing Python.',
            },
        ],
    },
    {
        slug: 'employee-management',
        title: 'Employee Management System',
        eyebrow: 'PYTHON / MYSQL / SOFTWARE RESTORATION',
        summary: 'A 2021 school Python–MySQL project, preserved and independently restored in 2026.',
        description: 'A menu-driven employee management system first created as a 2020–2021 school project and restored in 2026. The newer edition retains the original Python–MySQL foundation while improving code structure, authentication, SQL handling and testing.',
        technologies: ['Python', 'MySQL', 'SQL', 'unittest'],
        category: 'Software',
        icon: 'software',
        featured: false,
        links: [
            {
                label: 'Source Code',
                href: 'https://github.com/ItsJensen316/Employee-Management-System',
            },
        ],
        status: 'Original (2021) + restored edition (2026)',
    },
    {
        slug: 'portfolio',
        title: 'Personal Portfolio Website',
        eyebrow: 'FRONTEND / REACT & TYPESCRIPT',
        summary: 'The responsive portfolio you are viewing, built with React and TypeScript.',
        description: 'My personal portfolio, redesigned with React, TypeScript and Vite to bring my software projects, technical skills, professional experience and computational research into one responsive website.',
        technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
        category: 'Frontend',
        icon: 'portfolio',
        featured: false,
        links: [
            { label: 'View Source Code', href: 'https://github.com/ItsJensen316/Portfolio' },
        ],
    }
];
export const publication = { title: 'Biomarker Identification for Rituximab Resistance in Lymphoma from Patients’ Data',
    venue: 'IEEE ICETET-SIP 2025',
    doi: '10.1109/ICETETSIP64213.2025.11156239',
    url: 'https://doi.org/10.1109/ICETETSIP64213.2025.11156239' };
