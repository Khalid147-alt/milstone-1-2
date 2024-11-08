import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="box">
      <div className="intro">
        <h1>My Static Resume</h1>
        <div className="image">
        <img src="./my-pic.jpg
        " alt="my picture"
        width={200} 
        height={200}
        className="profile-image"/>
      </div>
    
        <h2>Hi! Iam Khalid Hussain, Student at Governer initiative of artificial intelligence, web 3.0 and metaverse</h2>
 
      </div>
    
      <div className="education">
        <h3>Education</h3>
        <ul>
          <li>Fsc-Medical</li>
          <li>DIT From GIAIC Affiliated with KU</li>
          <li>AI From Deep Learning</li>
        </ul>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Typscript</li>
          <li>React</li>
          <li>Next.js</li>

        </ul>
      </div>
      <div className="experiance">
        <h3>Experiance</h3>
        <p>I have  +1 year Experiance</p>
      </div>
      <div className="projects">
        <h3>Projects</h3>
        <Link href="https://assignment-3-git-master-khalid-hussains-projects-3458aa41.vercel.app/">
        <h4> &rarr; Personal Portfolio</h4>
        </Link>


        

      </div>
      
 
     
            

    </div>
   

    </>

  )}