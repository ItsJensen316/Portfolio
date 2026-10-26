import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BookOpen, ExternalLink } from 'lucide-react';
import { publication } from '../data/content';
const figures = [
    { file: 'volcano-plot.webp', title: 'Differential gene expression', caption: 'DESeq2 volcano plot · Thesis Fig. 3.3 (PDF p. 31)' },
    { file: 'gsea-enrichment.webp', title: 'Pathway enrichment', caption: 'Interferon-alpha GSEA plot · Thesis Fig. 3.6 (PDF p. 34)' },
    { file: 'cytoscape-map.webp', title: 'Pathway relationships', caption: 'Cytoscape EnrichmentMap · Thesis Fig. 3.7 (PDF p. 35)' },
    { file: 'molecular-docking.webp', title: 'In silico molecular docking', caption: 'PTPN2–CHEMBL8758 docking · Thesis Fig. 3.10 (PDF p. 39)' }
];
const workflow = ['RNA-seq data', 'DESeq2', 'GSEA & Cytoscape', 'PTPN2 prioritization', 'PyRx docking & ADMET'];
export default function Research() {
    return <div className="wrap page-main research-page">
    <Link className="back-link" to="/#research">
      <ArrowLeft size={18}/> Home / Research</Link>
      <header className="research-header">
        <span className="eyebrow">RGCB RESEARCH INTERNSHIP · 2024–2025</span>
        <h1 style={{ marginBottom: 28 }}>Computational research in <em>lymphoma treatment resistance.</em>
        </h1>
        <p>Scientific findings from an in silico study of lymphoma treatment resistance, presented through selected thesis figures and a peer-reviewed conference paper.</p>
      </header>

      <div className="research-content">
        <section>
          <h2>Overview</h2>
          <p>At the Rajiv Gandhi Centre for Biotechnology, I investigated gene-expression patterns associated with treatment resistance in lymphoma. This page highlights the research question, computational findings and publication; the separate project case study explains how the analysis pipeline was built.</p>
        </section>

        <section>
          <h2>Analytical approach</h2>
          <div className="method-list">
          {workflow.map((step, i) => <div className="method-step card" key={step}>
            <span className="method-count">0{i + 1}</span>
            <h3>{step}</h3>
          </div>)}
        </div>
      </section>

      <section>
        <h2>Selected research visuals</h2>
        <p>Four figures from my internship thesis, illustrating the computational evidence from gene expression through docking. Open a figure to inspect it at full size.</p>
        <div className="research-figure-grid">
          {figures.map(f => <figure className="research-figure card" key={f.file}>
          <a href={'/images/research/' + f.file} target="_blank" rel="noreferrer" aria-label={'Open ' + f.title}>
            <img loading="lazy" src={'/images/research/' + f.file} alt={f.title}/>
          </a>
          <figcaption>
            <strong>{f.title}</strong>
            <span>{f.caption}</span>
          </figcaption>
        </figure>)}
      </div>
    </section>

    <section>
      <h2>Key findings</h2>
      <div className="research-findings">
        <article className="card">
          <span className="eyebrow">PATHWAYS</span>
          <h3>Interferon & JAK–STAT</h3>
          <p>Enrichment analysis highlighted immune-signaling pathways associated with the resistant samples.</p>
        </article>
        <article className="card">
          <span className="eyebrow">TARGET</span>
          <h3>PTPN2</h3>
          <p>Prioritized as a candidate molecular target based on computational pathway analysis and literature.</p>
        </article>
        <article className="card">
          <span className="eyebrow">DOCKING</span>
          <h3>−8.1 kcal/mol</h3>
          <p>Best reported docking score for CHEMBL8758 against PTPN2 using AutoDock Vina/PyRx.</p>
        </article>
      </div>
      <p className="research-note">These are computational findings and hypotheses. No wet-lab experiments or clinical trials were carried out as part of this study; compound activity and therapeutic benefit remain unvalidated.</p>
    </section>

    <section>
      <h2>Publication</h2>
      <article className="card publication-card">
        <BookOpen size={28}/>
        <div>
          <span className="eyebrow">{publication.venue}</span>
          <h3>{publication.title}</h3>
          <p>Jensen Jose and Prof. Mrunalee Dhone · DOI: {publication.doi}</p>
          <a className="text-link" href={publication.url} target="_blank" rel="noreferrer">View published paper <ExternalLink size={16}/>
          </a>
        </div>
      </article>
      <Link className="text-link" to="/projects/biomarker-discovery" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24 }}>Explore the pipeline implementation <ArrowUpRight size={16}/>
      </Link>
    </section>
    </div>
    </div>;
}
