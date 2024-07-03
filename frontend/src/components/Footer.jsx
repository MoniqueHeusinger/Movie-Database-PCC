import githubIcon from "../assets/img/icons/github-icon.png";
import linkedinIcon from "../assets/img/icons/linkedin-icon.png";
import discordIcon from "../assets/img/icons/discord-icon.png";

const Footer = () => {
    return (
        <footer className="footer px-4 sm:px-10 md:px-20 xl:px-48 py-4 bg-[#000] text-neutral-content items-center">
            <aside className="grid-flow-col items-center">
                <p>Made with 🩷 by Monique Heusinger</p>
            </aside>
            <div className="grid-flow-col gap-4 justify-self-end">
                <a href="https://www.linkedin.com/in/m-heusinger" target="_blank">
                    <img src={linkedinIcon} alt="" className="size-8" />
                </a>
                <a href="https://github.com/MoniqueHeusinger" target="_blank">
                    <img src={githubIcon} alt="" className="size-8" />
                </a>
                <a href="https://discordapp.com/users/moniqueheusinger" target="_blank">
                    <img src={discordIcon} alt="" className="size-8" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;