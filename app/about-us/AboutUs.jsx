import {
  ShieldCheckIcon,
  UserGroupIcon,
  TruckIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  WifiIcon,
  MapPinIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

export default function AboutUs() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
        <section className="relative h-[500px] flex items-center justify-center text-center text-white">

        {/* Background Image */}
        <img
            src="../../slides/about-slide.jpg"
            alt="About GTACoach"
            className="absolute w-full h-[500px] md:h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 mt-25">

            {/* Breadcrumb */}
            <p className="font-semibold tracking-widest uppercase text-sm text-gray-200">
            <a href="/">Home</a>
            <span className="px-2">/</span>
            About Us
            </p>

            {/* Title */}
            <h1 className="text-4xl lg:text-4xl font-semibold mt-4 leading-tight">
            About{" "}
            <span className="relative inline-block z-[5]">
                GTACoach
                <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>
            </h1>

            {/* Subtitle */}
            {/* <p className="mt-6 text-sm text-gray-200">
            Moving People with Care, Comfort, and Reliability
            </p> */}

        </div>
        </section>


      {/* ABOUT OVERVIEW */}
      <section className="py-15">
        <div className="container mx-auto px-6 text-center">

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Moving People with Care, Comfort, and Reliability
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              At GTACoach, transportation is more than just getting from one place to another — it’s about delivering a journey that is safe, comfortable, and seamless from start to finish.
Based in the Greater Toronto Area, GTACoach specializes in charter bus and group transportation services for corporate events, tours, schools, film productions, airport transfers, and special occasions. Whether it’s a small group transfer or large-scale transportation coordination, our team works to ensure every trip runs smoothly and on schedule.
Our approach is simple: combine well-maintained vehicles, experienced drivers, and dependable service to create a travel experience our clients can rely on.
            </p>

          </div>
        </div>
      </section>


      {/* LEGACY EXPERIENCE */}
      <section className="py-15 bg-gray-100">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              A Legacy of 
              {" "}
            <span className="relative inline-block z-[5]">
              Experience!
              <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
            </span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              GTACoach operates with the strong foundation and operational support of GTA Crew Services, a company that has been serving the transportation industry for decades.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              With over 37 years of combined experience, our team understands the importance of punctuality, safety, and professionalism in group transportation. From coordinating transportation for corporate teams to managing logistics for large productions and events, we bring deep industry expertise to every booking.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              Our experience allows us to anticipate challenges, plan efficiently, and deliver a smooth travel experience every time.
            </p>
          </div>


          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="../../about/banner-1.jpg"
              alt="Bus Service"
              className="object-cover rounded-2xl w-full h-100"
            />
          </div>

        </div>
      </section>

      {/* OUR FLEET */}
        <section className="py-15 bg-white text-center">
            <div className="container mx-auto px-6">

                <p className="webText text-sm font-semibold uppercase mb-2">
                Our Fleet
                </p>

                <h2 className="text-3xl font-semibold mb-6">
                Comfortable & Modern {" "}
                <span className="relative inline-block z-[5]">
                    Vehicles
                    <span className="absolute left-0 bottom-1.5 w-full h-[10px] webBG z-[-1] opacity-60"></span>
                </span>
                </h2>

                <p className="text-gray-600 max-w-5xl mx-auto text-sm mb-5 leading-relaxed">
                Our fleet is designed to accommodate a wide range of group sizes and travel needs. From executive minibuses to full-size luxury coaches, every vehicle is selected with passenger comfort and reliability in mind.
                </p>

                <p className="text-gray-600 max-w-5xl mx-auto text-sm mb-12 leading-relaxed font-bold">Many of our vehicles are equipped with modern amenities such as:</p>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                <FleetItem icon={<UserGroupIcon className="w-7 h-7 text-white"/>} text="Comfortable Seating" />

                <FleetItem icon={<AdjustmentsHorizontalIcon className="w-7 h-7 text-white"/>} text="Climate Control" />

                <FleetItem icon={<WifiIcon className="w-7 h-7 text-white"/>} text="Wi-Fi Connectivity" />

                <FleetItem icon={<MapPinIcon className="w-7 h-7 text-white"/>} text="GPS Tracking" />

                <FleetItem icon={<TruckIcon className="w-7 h-7 text-white"/>} text="Professional Driver Support" />

                </div>

                <p className="text-gray-600 max-w-5xl mx-auto text-sm mt-12 leading-relaxed">This allows passengers to travel comfortably whether they are heading to a meeting, an event, or a long-distance journey.</p>

            </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-15 bg-gray-100">
            <div className="container mx-auto px-6 max-w-6xl text-center">

                <p className="webText text-sm font-semibold uppercase mb-2">
                Supporting Every Type of Journey
                </p>

                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Transportation for Every Occasion
                </h2>

                <p className="text-black mb-6 text-sm leading-relaxed">GTACoach proudly supports transportation needs across a wide range of industries and occasions, including:</p>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <IndustryCard
                        image="../../about/banner-2.jpg"
                        title="Corporate Transportation"
                    />

                    <IndustryCard
                        image="../../about/banner-3.jpg"
                        title="Airport Transfers"
                    />

                    <IndustryCard
                        image="../../about/banner-4.jpg"
                        title="Film & Production Transport"
                    />

                    <IndustryCard
                        image="../../about/banner-5.jpg"
                        title="Group Tours"
                    />

                    <IndustryCard
                        image="../../about/banner-6.jpg"
                        title="School & University Trips"
                    />

                    <IndustryCard
                        image="../../about/banner-7.jpg"
                        title="Wedding & Event Transportation"
                    />

                </div>


                <p className="text-gray-600 mt-14 w-full mx-auto leading-relaxed text-sm">
                No matter the destination, our goal is to ensure passengers travel with confidence, comfort, and peace of mind.
                </p>

            </div>
        </section>


      {/* SERVICE YOU CAN COUNT ON */}
        <section className="py-15">
            <div className="container mx-auto px-6">

                <div className="bg-[#091622] rounded-2xl py-16 px-6 text-white">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">

                    <p className="webText text-sm font-semibold uppercase mb-2">
                    Service You Can Count On
                    </p>

                    <h2 className="text-2xl lg:text-3xl font-semibold">
                    Reliable Transportation, Every Time
                    </h2>

                    <p className="text-gray-300 mt-6 text-sm leading-relaxed">
                    We understand that when clients book transportation, they’re trusting us with their schedules, their events, and the safety of their passengers.
                    </p>

                    <p className="text-gray-300 mt-6 text-sm leading-relaxed">That’s why our team focuses on:</p>

                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">

                    <ServiceItem text="Reliable scheduling" />
                    <ServiceItem text="Professional, experienced drivers" />
                    <ServiceItem text="Clean and well-maintained vehicles" />
                    <ServiceItem text="Clear communication and support" />

                </div>

                <p className="text-gray-300 mt-6 text-sm leading-relaxed">From the first quote request to the final drop-off, we aim to provide a transportation experience that is organized, comfortable, and dependable.</p>

                </div>

            </div>
        </section>

    </div>
  );
}


/* COMPONENTS */

function InfoCard({ icon, title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
    </div>
  );
}

function FleetItem({ icon, text }) {
  return (
    <div className="flex flex-col items-center text-center group">

      <div className="w-16 h-16 webBG rounded-full flex items-center justify-center mb-4 transition duration-300 group-hover:scale-110">
        {icon}
      </div>

      <p className="text-sm font-medium text-gray-800">
        {text}
      </p>

    </div>
  );
}

function ServiceItem({ text }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-5 py-4">
      <span className="text-green-400 text-lg">✔</span>
      <p className="text-gray-200 text-sm">{text}</p>
    </div>
  );
}

function IndustryCard({ image, title }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-md">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

      {/* Title */}
      <div className="absolute bottom-6 left-0 right-0 text-white text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

    </div>
  );
}