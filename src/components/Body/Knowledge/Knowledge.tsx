import './Knowledge.css';
import { useEffect } from 'react';


export const Knowledge = () => {

    useEffect(() => {
        const items = document.querySelectorAll('.marquee .marquee-item');
        const itemCount = items.length;

        items.forEach((item, index) => {
            (item as HTMLElement).style.setProperty('--marquee-item-index', (index + 1).toString());
        });

        document.documentElement.style.setProperty('--marquee-items', itemCount.toString());
    }, []);

    return (
        <div className="knowledge">
            <div className="title">
                <h1><i className="fa-solid fa-code"></i></h1>
                <h2>Maîtrise</h2>
            </div>
            <div className="marquee">
                <a href="https://developer.mozilla.org/fr-FR/docs/Web/HTML" className="marquee-item" target="_blank"><img src="./svgs/coding/html5.svg" alt="HTML5" title="HTML5"/></a>
                <a href="https://developer.mozilla.org/fr-FR/docs/Web/CSS" className="marquee-item" target="_blank"><img src="./svgs/coding/css.svg" alt="CSS" title="CSS"/></a>
                <a href="https://getbootstrap.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/bootstrap.svg" alt="Bootstrap" title="Bootstrap"/></a>
                <a href="https://discord.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/discord.svg" alt="Discord" title="Discord"/></a>
                <a href="https://discord.js.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/djs.svg" alt="Discord.js" title="Discord.js"/></a>
                <a href="https://www.figma.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/figma.svg" alt="Figma" title="Figma"/></a>
                <a href="https://git-scm.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/git.svg" alt="Git" title="Git"/></a>
                <a href="https://github.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/github.svg" alt="GitHub" title="GitHub"/></a>
                <a href="https://developer.mozilla.org/fr-FR/docs/Web/JavaScript" className="marquee-item" target="_blank"><img src="./svgs/coding/javascript.svg" alt="JavaScript" title="JavaScript"/></a>
                <a href="https://jquery.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/jquery.svg" alt="jQuery" title="jQuery"/></a>
                <a href="https://www.linux.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/linux.svg" alt="Linux" title="Linux"/></a>
                <a href="https://medusajs.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/medusa.svg" alt="Medusa" title="Medusa"/></a>
                <a href="https://www.mysql.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/mysql.svg" alt="MySQL" title="MySQL"/></a>
                <a href="https://nextjs.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/nextjs.svg" alt="Next.js" title="Next.js"/></a>
                <a href="https://nodejs.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/nodejs.svg" alt="Node.js" title="Node.js"/></a>
                <a href="https://www.npmjs.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/npm.svg" alt="NPM" title="NPM"/></a>
                <a href="https://www.openai.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/openai.svg" alt="OpenAI" title="OpenAI"/></a>
                <a href="https://www.php.net/" className="marquee-item" target="_blank"><img src="./svgs/coding/php.svg" alt="PHP" title="PHP"/></a>
                <a href="https://www.postgresql.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/postgresql.svg" alt="PostgreSQL" title="PostgreSQL"/></a>
                <a href="https://www.prisma.io/" className="marquee-item" target="_blank"><img src="./svgs/coding/prisma.svg" alt="Prisma" title="Prisma"/></a>
                <a href="https://reactjs.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/react.svg" alt="React" title="React"/></a>
                <a href="https://resend.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/resend.svg" alt="Resend" title="Resend"/></a>
                <a href="https://slack.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/slack.svg" alt="Slack" title="Slack"/></a>
                <a href="https://stackoverflow.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/stackoverflow.svg" alt="Stack Overflow" title="Stack Overflow"/></a>
                <a href="https://www.svgl.app/" className="marquee-item" target="_blank"><img src="./svgs/coding/svgl.svg" alt="SVGL" title="SVGL"/></a>
                <a href="https://tailwindcss.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/tailwindcss.svg" alt="Tailwind CSS" title="Tailwind CSS"/></a>
                <a href="https://www.typescriptlang.org/" className="marquee-item" target="_blank"><img src="./svgs/coding/typescript.svg" alt="TypeScript" title="TypeScript"/></a>
                <a href="https://ubuntu.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/ubuntu.svg" alt="Ubuntu" title="Ubuntu"/></a>
                <a href="https://vercel.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/vercel.svg" alt="Vercel" title="Vercel"/></a>
                <a href="https://vitejs.dev/" className="marquee-item" target="_blank"><img src="./svgs/coding/vitejs.svg" alt="ViteJS" title="ViteJS"/></a>
                <a href="https://code.visualstudio.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/vscode.svg" alt="Visual Studio Code" title="Visual Studio Code"/></a>
                <a href="https://www.microsoft.com/fr-fr/windows/" className="marquee-item" target="_blank"><img src="./svgs/coding/windows.svg" alt="Windows" title="Windows"/></a>
                <a href="https://yarnpkg.com/" className="marquee-item" target="_blank"><img src="./svgs/coding/yarn.svg" alt="Yarn" title="Yarn"/></a>
            </div>
        </div>
    )
}

export default Knowledge;
