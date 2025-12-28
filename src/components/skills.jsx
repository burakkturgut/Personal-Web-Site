import {
    SiPython, SiDjango, SiFlask, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
    SiReact, SiTypescript, SiJavascript, SiRedux, SiHtml5, SiCss3,
    SiPostgresql, SiOpenai, SiGooglegemini, SiGithubcopilot,
    SiGit, SiGithub, SiPostman
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { RiClaudeFill } from "react-icons/ri";
import '../css/Skills.css'
const Skills = () => {
    return (
        <section className="skills">
            <h3>Kullandığım Teknolojiler</h3>

            <div className="skills-category">
                <h4>Backend & Data Science</h4>
                <div className="skills-grid">
                    <Skill link="https://www.python.org" icon={<SiPython />} label="Python" />
                    <Skill link="https://www.djangoproject.com" icon={<SiDjango />} label="Django" />
                    <Skill link="https://flask.palletsprojects.com" icon={<SiFlask />} label="Flask" />
                    <Skill link="https://pandas.pydata.org" icon={<SiPandas />} label="Pandas" />
                    <Skill link="https://numpy.org" icon={<SiNumpy />} label="NumPy" />
                    <Skill link="https://scikit-learn.org" icon={<SiScikitlearn />} label="Scikit-learn" />
                    <Skill link="https://jupyter.org" icon={<SiJupyter />} label="Jupyter" />
                </div>
            </div>

            <div className="skills-category">
                <h4>Frontend Development</h4>
                <div className="skills-grid">
                    <Skill link="https://react.dev" icon={<SiReact />} label="React" />
                    <Skill link="https://www.typescriptlang.org" icon={<SiTypescript />} label="TypeScript" />
                    <Skill link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" icon={<SiJavascript />} label="JavaScript" />
                    <Skill link="https://redux.js.org" icon={<SiRedux />} label="Redux" />
                    <Skill link="https://developer.mozilla.org/en-US/docs/Web/HTML" icon={<SiHtml5 />} label="HTML5" />
                    <Skill link="https://developer.mozilla.org/en-US/docs/Web/CSS" icon={<SiCss3 />} label="CSS3" />
                </div>
            </div>

            <div className="skills-category">
                <h4>Veritabanı ve Depolama</h4>
                <div className="skills-grid">
                    <Skill link="https://www.microsoft.com/sql-server" icon={<DiMsqlServer />} label="MsSQL" />
                    <Skill link="https://www.postgresql.org" icon={<SiPostgresql />} label="PostgreSQL" />
                    <Skill link="https://www.w3schools.com/sql" icon={<TbSql />} label="SQL" />
                </div>
            </div>

            <div className="skills-category">
                <h4>Yapay Zeka ve Otomasyon</h4>
                <div className="skills-grid">
                    <Skill link="https://chatgpt.com" icon={<SiOpenai />} label="ChatGPT" />
                    <Skill link="https://claude.ai" icon={<RiClaudeFill />} label="Claude AI" />
                    <Skill link="https://gemini.google.com" icon={<SiGooglegemini />} label="Gemini" />
                    <Skill link="https://github.com/features/copilot" icon={<SiGithubcopilot />} label="GitHub Copilot" />
                </div>
            </div>

            <div className="skills-category">
                <h4>Tools & Version Control</h4>
                <div className="skills-grid">
                    <Skill link="https://git-scm.com" icon={<SiGit />} label="Git" />
                    <Skill link="https://github.com" icon={<SiGithub />} label="GitHub" />
                    <Skill link="https://www.postman.com" icon={<SiPostman />} label="Postman" />
                    <Skill link="https://code.visualstudio.com" icon={<VscVscode />} label="VS Code" />
                </div>
            </div>
        </section>
    );
};

const Skill = ({ link, icon, label }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="skill-item">
            {icon}
            <span>{label}</span>
        </div>
    </a>
);

export default Skills;
