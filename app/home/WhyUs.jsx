import Image from "next/image";
import {
  UserGroupIcon,
  GlobeAltIcon,
  BoltIcon,
  TruckIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function WhyUs() {
  return (
    <section className="bg-gray-100 py-15">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
            <p className="webText font-semibold mb-3 text-sm uppercase tracking-widest">
                Why Choose Us
            </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-10">
            GTACoach is the <br />
             best choice for your <br />
            {" "}
            <span className="relative inline-block z-[5]">
              Bus Charter
              <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>{" "}
          </h2>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="../../banners/why-us.jpg"
              alt="Charter Bus"
              className="object-cover w-full h-full lg:h-95"
            />
          </div>
        </div>

        {/* RIGHT SIDE – FEATURES */}
        <div className="space-y-6">
          <Feature
            icon={<TruckIcon />}
            title="Over 25 Years Of Experience"
            text="GTA Crew Services, incorporated in 1989 and has been in the business of passenger transportation since 1991"
          />

          <Feature
            icon={<BoltIcon />}
            title="Best Industry Experts"
            text="Providing specialized transportation services for airline crews, and large event groups in the GTA and surrounding areas."
          />

          <Feature
            icon={<UserGroupIcon />}
            title="Fast & Effective Solutions For Large Groups"
            text="GTA Crew Services has a fleet of buses ranging in size, from 21 passengers to 56 passengers."
          />

          <Feature
            icon={<StarIcon />}
            title="Safe, Reliable & Professional"
            text="We provide safe and professional transportation, and strive to be the leaders in crew and charter transportation for Canada and USA."
          />
        </div>

      </div>
    </section>
  );
}

/* Feature Card */
function Feature({ icon, title, text }) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-start gap-5 shadow-sm">
      <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
        <div className="h-6 w-6">{icon}</div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-900">
          {title}
        </h4>
        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
