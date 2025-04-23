import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="  flex flex-col gap-4 mt-16 ">
      <div className="p-6 mt-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center   ">

        <div className="space-y-4">
          <h1 className="text-6xl font-extrabold leading-tight">
            Auto-Generate <br /> Auto Post Blogs With <span className="text-blue-500">AI</span>
          </h1>
          <p className="text-lg font-semibold text-light ">
            Set your niche, schedule posts, and let our AI handle the rest. Zero writing, zero hassle.
          </p>
          <a
            href="/auto-blog-poster.zip"
            className="btn"
          >
            Download Plugin
          </a>
        </div>
        <div className="h-full flex items-center justify-center ">
          <Image src="/screen_add_schedule.png" alt="Plugin Preview" width={500} height={1} />
        </div>
      </div>
      <Features />
      <HowItWorks />
      <PricingAndDownload/>

    </div>
  );
}

function Features() {

  const featureData = [
    {
      title: "🧠 AI-Powered Content",
      points: [
        "Supports custom instructions for tone and style.",
        "Includes AI-generated images — no manual upload needed.",
      ]
    },
    {
      title: "📈 SEO & Optimization",
      points: [
        "Auto-generates meta titles and descriptions.",
        "Adds SEO-friendly tags to every post.",
      ]
    },
    {
      title: "⏱️ Easy Scheduling",
      points: [
        "Schedule posts daily, weekly, or monthly.",
        "No recurring input required — it's fully automated."
      ]
    },

  ];



  return (
    <div id="features" className="mt-16 max-w-7xl mx-auto w-full  ">
      <h2 className="text-5xl font-bold mb-10 ">Features</h2>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex items-center">
          <Image src={'/screen_landing.png'} alt="" width={500} height={500} />
        </div>
        <div className="grid gap-6 mt-6">
          {
            featureData.map((i, z) => {
              return (
                <div className="border border-white/10 rounded-md p-4 text-left" key={i.title}>
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">{i.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-light">
                    {
                      i.points.map((point, z) => (
                        <li key={z} >{point}</li>
                      ))
                    }


                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>

  )
}

function HowItWorks() {

  const workingData = [
    {
      title: "Set a Reference Title",
      point: "Helps organize and manage multiple WordPress sites easily.",
      image: "/how/first.png",
    },
    {
      title: "Add Custom Instructions",
      point: "Guide the tone, style, or content of the blog with your prompts.",
      image: "/how/second.png",
    },
    {
      title: "Choose a Niche",
      point: "Define the topic or industry focus for AI-generated content.",
      image: "/how/third.png",
    },
    {
      title: "Enable AI Image & Post Mode",
      point: "Auto-generate an image and choose to publish or save as draft.",
      image: "/how/fourth.png",
    },
    {
      title: "Schedule Posting",
      point: "Set timing — daily, weekly, or monthly — for automatic posts.",
      image: "/how/fifth.png",
    },
    {
      title: "Enter Site URL & Credentials",
      point: "URL auto-fills; use or generate a WordPress app password.",
      image: "/how/sixth.png",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-5xl font-bold mb-4 max-w-7xl mx-auto">How it works</h2>
      <div className="grid grid-cols-2 max-w-7xl mx-auto">
        <div className="mx-auto mt-16 px-6 py-10 flex flex-col gap-[200px] ">
          {
            workingData.map((i, z) => {
              return (
                <div className="h-[600px] flex flex-col justify-center p-2" key={i.title}>
                  <div className="p-4 rounded-md">
                    <p className="bg-blue-500 text-white inline-flex items-center justify-center size-12  text-3xl mb-6 rounded-full">{z + 1}</p>
                    <h3 className="text-3xl font-bold text-white mb-2">{i.title}</h3>
                    <p className="text-lg">
                      {i.point}
                    </p>
                  </div>
                </div>
              )
            })
          }

        </div>

        <div className="mt-16 px-6 py-10 relative flex flex-col justify-between">

          {
            workingData.map((i, z) => {
              return (
                <div key={z} className="rounded-md sticky transform translate-y-16  flex flex-col gap-8  h-[500px] top-[100px]  items-center justify-center"
                // style={{ top: `${10 + z * 2}em` }}

                >

                  <Image src={i.image} alt="Plugin Preview" width={600} height={1} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

function PricingAndDownload() {
  return (
    <div className="max-w-7xl w-full mx-auto mt-32 px-6 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
         {/* Download CTA Box */}
         <div className="rounded-xl shadow-lg  flex items-center">
          <div className="bg-white p-10 rounded-xl shadow-lg ">
          <h2 className="text-3xl font-bold mb-3 text-black">🚀 Ready to Get Started?</h2>
          <p className="text-md mb-6 text-black">
            Download the plugin now and start generating AI-powered blog content instantly.
          </p>
          <a href="/auto-blog-poster.zip" className="btn !text-white !bg-black">
            Download Now
          </a> </div>
          
        </div>
        {/* Pricing Box */}
        <div className="p-10 rounded-xl shadow-lg ">
          <h2 className="text-4xl font-bold mb-4 ">💰 Simple Pricing</h2>
          <p className="text-lg mb-4">
            Pay only for what you use, with no subscriptions or hidden fees.
          </p>
          <div className="mt-6">
            <p className="text-5xl font-extrabold ">$12</p>
            <p className="text-md ">For 60 Credits</p>
          </div>
          <ul className="mt-6 text-light text-left list-disc list-inside">
            <li>1 Blog Post = 1 Credit</li>
            <li>1 AI Image = 1 Credit</li>
            <li>Pay-as-you-go model</li>
          </ul>
        </div>

       

      </div>
    </div>
  );
}