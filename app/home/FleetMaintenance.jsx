import { WrenchScrewdriverIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/24/solid";

export default function FleetMaintenance() {
  return (
    <section className="py-15 bg-gray-100">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE AREA */}
        <div className="relative flex justify-center lg:justify-start">

          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="../../banners/home-safe-1.jpg"
              alt="Fleet Maintenance"
              width={400}
              height={400}
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Overlay Image */}
          <div className="absolute -bottom-10 -right-10 bg-white p-2 rounded-xl shadow-xl hidden md:block">
            <img
              src="../../banners/home-safe-2.jpg"
              alt="Bus Service"
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Safety Badge */}
          <div className="absolute top-2 md:top-6 left-2 md:-left-8 bg-white rounded-2xl shadow-lg px-6 py-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 webText"/>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">100%</p>
              <p className="text-xs text-gray-500">Safety Standards</p>
            </div>
          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div>

          <p className="webText font-semibold uppercase tracking-widest text-sm mb-3">
            Fleet Maintenance & Safety
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Professional Fleet Care For {" "}
            <span className="relative inline-block z-[5]">
            Safe & Reliable
            <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span> {" "}
            Travel
          </h2>

          <p className="mt-6 text-gray-600 text-sm leading-relaxed">
            When you’re travelling with a group, safety isn’t just expected — it’s essential. That’s why every vehicle in the GTACoach fleet is cared for through our dedicated in-house maintenance facility, operated by our sister company <span className="font-semibold">Marcelino Industries</span> — a fully licensed repair and service center serving the transportation industry since 2006.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            This specialized facility manages everything that keeps our fleet running at its best — from preventative maintenance and mechanical repairs to detailed safety inspections and thorough vehicle cleaning. Our experienced technicians routinely service each vehicle to ensure it remains safe, reliable, and road-ready for every journey.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Having our own dedicated maintenance operation means we’re never dependent on external workshops. It allows us to maintain stricter safety standards, monitor vehicle performance closely, and respond quickly whenever service or support is needed.
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Because when passengers step on board, they deserve more than just transportation — they deserve peace of mind with every mile.
          </p>


          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

            <Feature text="Preventative Maintenance Programs" />
            <Feature text="Certified Mechanical Repairs" />
            <Feature text="Routine Safety Inspections" />
            <Feature text="Professional Vehicle Cleaning" />
            <Feature text="24/7 Fleet Monitoring" />
            <Feature text="Experienced Technicians" />

          </div>

        </div>

      </div>
    </section>
  );
}


/* Feature Component */

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
        <WrenchScrewdriverIcon className="w-4 h-4 webText"/>
      </div>
      <span className="text-sm text-gray-700 font-medium">{text}</span>
    </div>
  );
}