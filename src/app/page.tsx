import { Asul } from 'next/font/google'
import styles from './page.module.css'

import Image from 'next/image'
import githubIcon from '../../public/images/GitHubIcon.png'
import twitterIcon from '../../public/images/TwitterIcon.png'
import linkedInIcon from '../../public/images/LinkedInIcon.png'

const asul = Asul({weight: '400', subsets: ["latin"]})

// TODO Accessibility audit

// TODO move footer to it's own file
const year = new Date().getFullYear();
const footerText = '©2023 made with 🤍 in Seattle, WA.';

export default function Home() {
  return (
    <main className={styles.main}> 
      <header className={styles.headerMain} >
      <h1 className={asul.className} >Acacia Pappas</h1>
      </header>
      <section className={styles.section}>
      <span >
      </span>
        <section className={styles.subSection} >
            <p>A little intro....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Fames ac turpis egestas maecenas. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Blandit cursus risus at ultrices mi tempus. Diam ut venenatis tellus in. Libero enim sed faucibus turpis. Aenean sed adipiscing diam donec adipiscing. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Quis vel eros donec ac. Id neque aliquam vestibulum morbi blandit cursus risus. Maecenas sed enim ut sem viverra aliquet. Vivamus arcu felis bibendum ut tristique et egestas. Sit amet consectetur adipiscing elit ut aliquam purus sit. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Erat nam at lectus urna duis convallis. Sollicitudin ac orci phasellus egestas tellus rutrum tellus.</p>
            <span className={styles.socialIcons}>
              {/* TODO modularize socials row and create links */}
              <div className={styles.socialIconsRow}>
                <Image
                src={githubIcon}
                alt="Github"
                width={20}
                height={20}
                ></Image>
              </div>
              <div className={styles.socialIconsRow}>
                <Image
                src={linkedInIcon}
                alt="LinkedIn"
                width={20}
                height={20}
                ></Image>
              </div>
              <div className={styles.socialIconsRow}>
                <Image
                src={twitterIcon}
                alt="Twitter"
                width={20}
                height={20}
                ></Image>
              </div>
            </span>
            <div></div>
        </section>

        {/* TODO convert to rows of rows and modularize */}
        <section className={styles.subSection} >
          <div className={styles.projectRow}>
            <h3 className={asul.className}>Project Title</h3>
            <p >brief project description</p>
            <a>Read more...</a>
          </div>
          <div className={styles.projectRow}>
            <h3 className={asul.className}>Project Title</h3>
            <p >brief project description</p>
            <a>Read more...</a>
          </div>
          <div className={styles.projectRow}>
            <h3 className={asul.className}>Project Title</h3>
            <p >brief project description</p>
            <a>Read more...</a>
          </div>
        </section >
      </section>

      <footer className={styles.mainFooter}>
        <span>{footerText}</span>
      </footer>
    </main>
  )
}
