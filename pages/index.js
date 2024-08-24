import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <h2>About Me</h2>
        <hr></hr>


        <p>
          <strong><em>Introduce yourself. What are your hobbies, favourite music, favourite food, and other things
          you can tell me about yourself?</em></strong><br></br><br></br>
          Hi, I am John Rein B. Vinuya. I am currently pursuing a Bachelor of Science in
          Information Technology (BSIT) at the University of the Assumption.

          <h4>Hobbies</h4>
          <ul>
            <li>Playing video games</li>
            <li>Watching science videos</li>
            <li>Coding</li>
            <li>Watching anime/movies</li>
          </ul>

          <h4>Favorite Music</h4>
          <ul>
            <li>Pop Rock</li>
            <li>Alternative Rock</li>
            <li>Ballad</li>
          </ul>

          <h4>Favorite Food</h4>
          <ul>
            <li>Sinigang na bangus sa bayabas</li>
            <li>Bistek tagalog</li>
          </ul>

        </p><br></br><hr></hr>

        <p>
          <strong><em>Why did you take up IT?</em></strong><br></br><br></br>
          - I chose IT as a course due to my childhood interest in playing games, which sparked my
          curiosity about technology. I have always been intrigued by how systems operate, and
          that inspiration led me to enroll in BSIT.
        </p><br></br><hr></hr>

        <p>
          <strong><em>What career do you see yourself exploring after graduation?</em></strong><br></br><br></br>
          - In the near future, I see myself exploring more subjects related to my field, such as data
          analytics and cybersecurity, while still pursuing a career as a web developer.
        </p><br></br><hr></hr>

        <p>
          <strong><em>What do you expect to learn in this subject?</em></strong><br></br><br></br>
          - I hope to learn more about different programming languages and, ideally, develop the
          skills and creativity needed to create my own usable systems without relying on
          guidelines.
        </p><br></br><hr></hr>

        <p>
          <strong><em>What topics you want to be discussed in this subject?</em></strong><br></br><br></br>
          - In our subject on System Integration and Architecture, I would like to cover topics such
          as API design and management, exploration of data integration techniques and data
          warehousing.

        </p><br></br>
        <hr></hr>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}