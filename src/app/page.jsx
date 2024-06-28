import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        {/* IMAGE CONTAINER */}
        <Image src="/hero.png" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}

      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p className="md:text-xl">
          {/* DESC */}
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that refelct my
          commitment to excellence.
        </p>
        <div className="w-full flex gap-4">
          {/* BUTTONS */}
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View my work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
