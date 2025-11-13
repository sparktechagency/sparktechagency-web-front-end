import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-16 lg:py-24 ">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Images Grid */}
        <div className="flex-1 grid gap-5">
          <div className="grid grid-cols-11 gap-5 w-full">
            <Image
              src={"/assets/company/img2.jpg"}
              width={800}
              height={350}
              alt="Meeting"
              className="col-span-6 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
            <Image
              src={"/assets/company/img1.png"}
              width={1000}
              height={350}
              
              alt="Meeting"
              className="col-span-5 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
          </div>
          <div className="grid grid-cols-11 gap-5 w-full">
            <Image
              src={"/assets/company/img3.jpg"}
              width={1000}
              height={350}
              
              alt="Meeting"
              className="col-span-5 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
            <Image
              src={"/assets/company/img7.jpg"}
              width={400}
              height={350}
              alt="Meeting"
              className="col-span-6 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
          </div>
          <div className="grid grid-cols-11 gap-5 w-full">
            <Image
              src={"/assets/company/img5.png"}
              width={800}
              height={350}
              alt="Meeting"
              className="col-span-6 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
            <Image
              src={"/assets/company/img6.jpg"}
              width={800}
              height={350}
              
              alt="Meeting"
              className="col-span-5 rounded-2xl w-full h-full max-h-[250px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-5/12 space-y-6 text-start!">
          <h1 className="section-title lg:text-[40px]! text-white!">
            Our Story
          </h1>
          <div className="space-y-8 text-gray leading-relaxed section-subtitle text-[#EBEBEB]! lg:text-lg!">
            <p>
              We are a team of passionate creatives, skilled engineers, and
              strategic thinkers united by a shared mission — to craft digital
              experiences that deliver real results. Every project is approached
              with innovation, precision, and a commitment to excellence.
            </p>
            <p>
              With roots in both the United States and Bangladesh, our global
              presence gives us diverse perspectives and a deep understanding of
              modern digital needs. This blend of cultural insight and technical
              expertise allows us to create solutions that resonate with
              audiences worldwide. We are a team of passionate creatives,
              skilled engineers, and strategic thinkers united by a shared
              mission — to craft digital experiences that deliver real results.
              Every project is approached with innovation, precision, and a
              commitment to excellence.
            </p>
            <p>
              With roots in both the United States and Bangladesh, our global
              presence gives us diverse perspectives and a deep understanding of
              modern digital needs. This blend of cultural insight and technical
              expertise allows us to create solutions that resonate with
              audiences worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
