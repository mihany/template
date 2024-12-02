import Image from "next/image";

export const metadata = {
  title: "About Us - Hoetzin",
  description:
    "Learn more about Hoetzin and our mission to provide quality education for everyone.",
  openGraph: {
    title: "About Us - Hoetzin",
    description:
      "Learn more about Hoetzin and our mission to provide quality education for everyone.",
    url: "https://www.hoetzin.com/about",
    images: [
      {
        url: "https://www.hoetzin.com/public/about-cover.jpg",
        width: 800,
        height: 600,
        alt: "About Us - Hoetzin",
      },
    ],
  },
};

const stats = [
  { label: "Graduates", value: "25,000+" },
  { label: "Instructors and Mentors", value: "250+" },
  { label: "Teaching Hours", value: "100,000+" },
];
const values = [
  {
    name: "Expert Insights",
    description:
      "Gain insights from IT industry veterans through expert lectures and guest speakers.",
  },
  {
    name: "Hands-On Skills Development",
    description:
      "Apply skills with live labs and simulations for practical application.",
  },
  {
    name: "Networking Excellence",
    description:
      "Establish Industry Connections for ongoing learning, alignment with new tech stacks, and continuous support through community groups.",
  },
  {
    name: "Career Success",
    description:
      "Access comprehensive career services during and after the bootcamp, including support for resume building, interview preparation, and job search strategies.",
  },
  {
    name: "Take responsibility ***",
    description:
      "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
  },
  {
    name: "Enjoy downtime ***",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Content section */}
      <div className="mx-auto max-w-7xl p-6 lg:p-24">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="text-xl leading-8 text-gray-600">
              The story of Hoetzin began in Cairo, Egypt in 2024.
            </p>
            <h2 className="mt-10 text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
              WHY Hoetzin?
            </h2>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                Where a team of professionals in the tech industry saw the value
                of Tech education in influencing their careers and lives, and
                sought to build the first bootcamp in the city of Cairo with the
                dream to provide quality education that would change
                people&lsquo;s lives regardless of their background or social
                status, they believed in fair education for all.
              </p>
              <p className="mt-10">
                Over the years, our company has grown from eight to over 400
                people, expanded its geography, and brought quality Tech
                education services closer to our clients worldwide.
              </p>
              <p className="mt-10">
                Today, AMIT Group is the biggest and highest rated technology
                education company in the EMEA region with offices and
                headquarters in the US alongside partnerships with Businesses
                and educational institutions all over the world.
              </p>
              <h2 className="mt-10 text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-10">
                We are on a mission to change people&lsquo;s lives, how are we
                doing that?, by introducing and educating people about tech and
                how it can change their lives by changing their careers.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-8">
              <dl className="w-full space-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-Prussian-Blue">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      {/* <div className="mx-auto -mt-12 max-w-7xl p-24 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                The story of AMIT began in Cairo, Egypt in 2011. 
              </p>
              <h2 className="mt-10 text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
                WHY AMIT?
              </h2>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                Where a team of professionals in the tech industry saw the value of Tech education in influencing their careers and lives, and sought to build the first bootcamp in the city of Cairo with the dream to provide quality education that would change peoples lives regardless of their background or social status, they believed in fair education for all. 
                </p>
                <p className="mt-10">
                Over the years, our company has grown from eight to over 400 people, expanded its geography, and brought quality Tech education services closer to our clients worldwide.
                </p>
                <p className="mt-10">
                Today, AMIT Group is the biggest and highest rated technology education company in the EMEA region with offices and headquarters in the US alongside partnerships with Businesses and educational institutions all over the world. 
                </p>
                <h2 className="mt-10 text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-10">
                  We are on a mission to change peoples lives, how are we doing that?, by introducing and educating people about tech and how it can change their lives by changing their careers. 
                </p>
              </div>
              
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center" id="sidebar-statistics">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-Prussian-Blue">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div> */}

      {/* Image section */}
      <div className="mt-2 sm:mt-2 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="Image"
        />
        {/* <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        /> */}
      </div>

      {/* Values section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hoetzin&lsquo;s vision is to be a world leader in tech education, by
            making tech education more affordable and accessible for people from
            across the world, our vision is a world where work and life advances
            to make progress a constant in everyone&lsquo;s life, technology is
            advancing fast so should our environments, lives and work.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-Prussian-Blue">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Logo cloud */}
      <div className="relative isolate -z-9 mt-32 mb-32 sm:mt-48 sm:mb-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-Prussian-Blue">
            Trusted by
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      {/* Newsletter  */}
      <div className="bg-white py-20 sm:py-24 lg:py-32 z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-Prussian-Blue sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">
              {/* Want product news and updates? */}
              Subscribe To Our Newsletter
            </h2>{" "}
            <p className="inline text-2xl sm:block lg:inline xl:block">
              {/* Sign up for our newsletter. */}
              For the most recent updates, promotional codes, and intriguing
              insights from the tech industry.
            </p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-Prussian-Blue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-Light-Sea-Green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-Prussian-Blue">
              We care about your data. Read our{" "}
              <a
                href="/TermsAndPrivacyPolicy"
                className="font-semibold text-Light-Sea-Green hover:text-teal-600"
              >
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
