export default function HeroImage() {
  return (
    <section className="bg-background3">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-text font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </h1>
          <p className="max-w-2xl mb-6 font-light text-text lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            alt="Hero"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
          />
        </div>
      </div>
    </section>
  );
}
