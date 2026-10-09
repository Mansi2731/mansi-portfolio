import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* Profile Picture Section */}
      <Image
        src="/profile.jpg"
        alt="Mansi Sikarwar"
        width={100}
        height={100}
        className="rounded-full mb-8"
      />

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Mansi Sikarwar.
      </h1>
      
      <p className="mb-4">
        {`I am a Full Stack Engineer specializing in building scalable, high-performance applications. With an academic foundation from NIT Warangal and enterprise engineering experience from JPMorgan Chase, I focus on crafting robust backend architectures and dynamic user interfaces.`}
      </p>
      
      <p className="mb-8">
        {`My technical expertise centers on developing clean, well-tested solutions using C#, .NET Core, and React. Beyond core software development, I am actively exploring how artificial intelligence and machine learning can be leveraged to drive intelligent automation, enhance application performance, and solve complex system challenges. I am currently seeking opportunities to join a dynamic engineering organization where I can contribute to high-impact platform integrations while continuously expanding my technical skill set.`}
      </p>

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Core Competencies</h2>
      <ul className="mb-8 list-disc space-y-2 ml-4">
        <li><strong>Full-Stack Engineering:</strong> Designing resilient Web APIs and responsive front-end interfaces using C#, .NET Core, and React.</li>
        <li><strong>Cloud & Architecture:</strong> Architecting scalable microservices on AWS and optimizing data workflows across SQL and NoSQL databases.</li>
        <li><strong>DevOps & Automation:</strong> Accelerating reliable software delivery and reducing inefficiencies through automated CI/CD pipelines (Jenkins, Spinnaker).</li>
        <li><strong>Engineering Excellence:</strong> Championing code quality and best practices through rigorous unit testing, peer code reviews, and team collaboration.</li>
      </ul>

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Connect with me</h2>
      <ul className="mb-8 space-y-2">
        <li>Email: <a href="mailto:mansi.sikarwar@example.com" className="hover:underline">mansi.sikarwar@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/mansisikarwar" target="_blank" rel="noopener noreferrer" className="hover:underline">@MansiSikarwar</a></li>
        <li>GitHub: <a href="https://github.com/Mansi2731" target="_blank" rel="noopener noreferrer" className="hover:underline">@Mansi2731</a></li>
        <li>LeetCode: <a href="https://leetcode.com/u/mansisikarwar" target="_blank" rel="noopener noreferrer" className="hover:underline">@MansiSikarwar</a></li>
      </ul>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
