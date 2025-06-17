import DataImage from"./data";
import{listTools, listProyek} from './data';

function App() {
 

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="home"> 
       <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="HeroImage" className="w-10 rounded-md" loading="lazy" />
          <q>Good design is obvious. Great design is transparent.</q>
        </div>
        <h1 className="text-2xl/tight font-bold mb-6">Hallo there, I'am Rizki Fernando</h1>
        <h1 className="text-4xl/tight font-bold mb-6">As UI/UX Designer</h1>
        <p className="text-base/1oose mb-6 opacity-70">
          Introduce myself. I am a junior UI/UX designer. While I may still be early in my career, I am dedicated 
          to delivering high-quality results. I am looking for an 
          opportunity to build my experience and portfolio, and I’m willing to offer my skills at a competitive rate. 
          If you’re seeking a passionate and detail-oriented designer who’s eager to grow, I’d love to be part of your team. 
          Thank you!
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="/resume.pdf" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i>

          </a>
          <a href="#project"className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Project <i className="ri-arrow-down-line ri-lg"></i></a>
        </div> 
       </div>
       <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy" /> 
     </div>

     {/*hero*/}
     <div className="tentang mt-32 py-10" id="about">
       <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="image"className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose mb-10">
          Hi, let me introduce myself — I am a UI/UX Designer. As a designer focused on creating captivating digital experiences, I have the ability to craft interfaces that are not only visually appealing but also intuitive and functional. I’m skilled at transforming ideas into responsive, user-friendly designs and adept at understanding user needs and turning them into creative solutions.   
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:block
          hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl text-center mb-1">
                10 
              </h1 >
              <p>Project</p>
            </div>
             <div>
              <h1 className="text-4xl text-center mb-1">
                <span className="text-violet-500">+-</span>1 
              </h1>
              <p>Years of Experience</p>
            </div>
          </div>
          </div>
       </div>
       
       <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4" >Tools and technologies utilized</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base /loose opacity-50" >Here are some of the tools I commonly use.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" >

          {listTools.map(tool => (
        <div className="flex items-center gap-2 p-3 border-zinc-600 rounded-md
          hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay={tool.dad}> 
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bgz-inc-900" />
            <div>
              <h4 className="font-bold">
                {tool.nama}
              </h4>
              <p className="opacity-50">
                {tool.ket}
              </p>
            </div>
          </div>
          ))}

          
        </div>
       </div>
     </div>
     {/*Tentang */}

     {/*Project */}
     <div className="project mt-32 py-10" id="project" >
      <h1 className="text-center text-4xl font-bold mb-2 " >Sample Projects</h1>
      <p className="text-base/loose text-center opacity-50">Unpublish Project</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
       {listProyek.map(proyek => (
        <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
          <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
          <div clas>
            <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
            <p className="text-base/loose mb-4 ">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2 ">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>
                  {tool}
                </p>
              ))}
            </div>
            {/*<div className="mt-8 text-center">
              <a href="#" className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600 font-semibold ">Lihat Website</a>
            </div>*/}
          </div>
        </div> 
       ))}
      </div>
     </div>
     <h1 className="text-2xl/tight text-center font-bold mb-6"> Why Unpublish?</h1>
        <p className="text-base/1oose mb-6 text-center opacity-70">
          Why hasn’t it been published? As I mentioned earlier, I’m a beginner UI/UX designer and haven’t had the chance to work on an official project yet. That’s why I created my own first project without any further development. I’m hoping for an opportunity to secure my first official project.
        </p>
     {/*Project */}

     {/*Contact */}
     <div className="kontak mt-32 sm:p-10 p-0" id="contact">
      <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50">
        Let's connect with me.
      </p>
      <form action="https://formsubmit.co/fernandorizki903@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="2000">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input type="text" name="nama" placeholder="Your'e name..." className="border border-zinc-500
             p-2 rounded-md " required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">E-mail</label>
            <input type="email" name="email" placeholder="E-mail addres..." className="border border-zinc-500
             p-2 rounded-md " required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Message</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Message..." className="border border-zinc-500
             p-2 rounded-md" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600 font-semibold ">Send Message</button>
          </div>
        </div>
      </form>
     </div>
     {/*Contact */}
    </>
  )
}

export default App
