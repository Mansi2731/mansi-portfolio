import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey, I'm Mansi Sikarwar.
      </h1>
      <p className="mb-4">
        {`I am a Full Stack Engineer specializing in building scalable, high-performance applications. 
        With an academic foundation from NIT Warangal and enterprise engineering experience from JPMorgan Chase, 
        I focus on crafting robust backend architectures and dynamic user interfaces.`}
      </p>
      <p>
        {`My technical expertise centers on developing clean, well-tested solutions using 
          C#, .NET Core, and React. Beyond core software development, 
        I am actively exploring how artificial intelligence and machine learning can be leveraged 
        to drive intelligent automation, enhance application performance, and solve complex system challenges. 
        I am currently seeking opportunities to join a dynamic engineering organization where I can 
        contribute to high-impact platform integrations while continuously expanding my technical skill set.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
