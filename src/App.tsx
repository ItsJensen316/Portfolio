import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { profile } from './data/content';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Research from './pages/Research';
const nav = [{ title: 'About', hash: 'about' }, { title: 'Experience', hash: 'experience' }, { title: 'Projects', hash: 'projects' }, { title: 'Skills', hash: 'skills' }, { title: 'Research', hash: 'research' }, { title: 'Contact', hash: 'contact' }];
function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [open, setOpen] = useState(false);
    const loc = useLocation();
    useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);
    useEffect(() => setOpen(false), [loc]);
    return <header className="site-header">
    <div className="wrap nav-inner">
      <Link to="/" className="brand" aria-label="Home">JJ<span>.</span>
      </Link>
      <nav className={open ? 'nav-list opened' : 'nav-list'} aria-label="Main navigation">{nav.map(n => <Link key={n.hash} onClick={() => setOpen(false)} to={'/#' + n.hash}>{n.title}</Link>)}<NavLink className="nav-mobile-projects" to="/projects">All Projects</NavLink>
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}</button>
        <a className="resume-nav" href="/documents/Jensen_Jose_Resume.pdf" target="_blank" rel="noopener noreferrer" title="View resume PDF">Resume <ArrowUpRight size={15}/>
        </a>
        <button aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} className="icon-btn mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={23}/> : <Menu size={23}/>}</button>
      </div>
    </div>
    </header>;
}
function Footer() {
    return <footer className="footer">
    <div className="wrap footer-inner">
      <div>
        <Link to="/" className="brand">JJ<span>.</span>
        </Link>
        <p>Software engineering. Intelligent systems. Thoughtful research.</p>
      </div>
      <div className="socials">
        <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={19}/>
        </a>
        <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={19}/>
        </a>
        <a aria-label="Email" href={'mailto:' + profile.email}>
          <Mail size={19}/>
        </a>
      </div>
      <small>© {new Date().getFullYear()} Jensen Jose. Built with React & TypeScript.</small>
    </div>
    </footer>;
}
function ScrollHandler() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 90);
            return () => clearTimeout(t);
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [location.pathname, location.hash]);
    return null;
}
export default function App() {
    return <>
    <ScrollHandler />
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:slug" element={<ProjectDetail />}/>
        <Route path="/research" element={<Research />}/>
        <Route path="*" element={<div className="wrap page-main">
          <h1>Page not found.</h1>
          <Link className="button primary" to="/">Return home</Link>
        </div>}/>
      </Routes>
    </main>
    <Footer />
    <Analytics />
    </>;
}
