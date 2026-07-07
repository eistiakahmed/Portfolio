import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {
  ArrowLeft,
  Users,
  Zap,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { projectMetadata } from '../../../data/projectsData';

export const ProjectDetailsPage = ({ project, onBack }) => {
  const meta = projectMetadata[project.title] || {
    targetAudience: "General Web Audience / Developers",
    purpose: project.description,
    keyFeatures: [
      "Responsive UI styling optimized for mobile and desktop screens",
      "Interactive features and real-time state management controls",
      "Clean codebase architecture built with scalable standards"
    ],
    challenge: "Managing custom responsive viewport ratios without introducing layout visual shifting.",
    solution: "Implemented defensive layout constraints and CSS grid systems utilizing responsive sizing bounds.",
    stackBreakdown: [
      { category: "Tech Stack", tech: project.techStack?.join(', ') || 'React.js, Tailwind CSS' }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-4"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 group cursor-pointer transition-colors duration-300 py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-xs font-bold font-mono tracking-wide">Back to Projects</span>
      </button>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Image, Audience, Features, Challenges & Solutions */}
        <div className="lg:col-span-2 space-y-8">
          {/* Cover Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono tracking-wider font-bold rounded-full uppercase">
                {project.category}
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-slate-500">ID: {project.id?.slice(-12).toUpperCase()}</span>
          </div>

          {/* Audience & Scope (Who & Why It Was Built) */}
          <div className="border border-white/[0.06] bg-[#0c0c14]/40 rounded-3xl p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Who & Why It Was Built
              </h4>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-slate-500 block mb-1">Target Client / Audience:</span>
                <span className="text-base font-semibold text-slate-200">{meta.targetAudience}</span>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 block mb-1">Project Purpose:</span>
                <p className="text-slate-400 text-sm leading-relaxed">{meta.purpose}</p>
              </div>
            </div>
          </div>

          {/* New Section: Challenges & Technical Solutions */}
          <div className="border border-white/[0.06] bg-[#0c0c14]/40 rounded-3xl p-6 shadow-xl backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Challenges & Solutions
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Challenge Faced Box */}
              <div className="bg-red-500/[0.03] border border-red-500/10 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-red-500/10 pointer-events-none">
                  <AlertTriangle className="w-16 h-16" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wide">Issue / Challenge Faced</span>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed relative z-10">
                  {meta.challenge}
                </p>
              </div>

              {/* Solution Devised Box */}
              <div className="bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-emerald-500/10 pointer-events-none">
                  <Lightbulb className="w-16 h-16" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">How It Was Resolved</span>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed relative z-10">
                  {meta.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Key Implementation Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {meta.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-xs md:text-sm text-slate-300 bg-white/[0.02] border border-white/[0.04] p-4 rounded-2xl"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Technical Comparison, Live Links */}
        <div className="lg:col-span-1 space-y-8">
          {/* Tech Stack Comparison table */}
          <div className="border border-white/[0.08] bg-[#0b0b10]/90 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full blur-[60px] bg-cyan-500/10 pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Detailed Stack Architecture
              </h4>
            </div>

            <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-black/40 relative z-10">
              <div className="grid grid-cols-3 bg-white/[0.02] border-b border-white/[0.04] p-3 text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                <div className="col-span-1">Layer</div>
                <div className="col-span-2">Technologies</div>
              </div>
              {meta.stackBreakdown.map((row, i) => (
                <div key={i} className="grid grid-cols-3 border-b border-white/[0.04] last:border-0 p-3.5 text-xs">
                  <div className="col-span-1 font-mono font-bold text-cyan-400 tracking-tight">{row.category}</div>
                  <div className="col-span-2 text-slate-300 leading-normal">{row.tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Callouts */}
          <div className="border border-white/[0.06] bg-[#0c0c14]/40 rounded-3xl p-6 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Launch & Source Code
            </h4>
            
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 hover:shadow-[0_10px_20px_rgba(6,182,212,0.25)] cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                Launch Live Site
              </a>
            )}

            {project.gitHubClient && (
              <a
                href={project.gitHubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
                Client Repository
              </a>
            )}

            {project.gitHubServer && (
              <a
                href={project.gitHubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
                Server Repository
              </a>
            )}

            {project.gitHubRepo && (
              <a
                href={project.gitHubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-2xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaGithub className="w-4 h-4" />
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailsPage;
