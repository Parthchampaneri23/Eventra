import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "\cofounder.jpeg",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "UI/UX Designer",
    image: "\decorator.jpeg",
  },
  {
    id: 3,
    name: "Aman Patel",
    role: "Marketing Lead",
    image: "\anchor.jpeg",
  },
  {
    id: 4,
    name: "Sneha Verma",
    role: "Technical Lead",
    image: "\marketing.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium">
            Our Team
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Meet The People Behind Eventra
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our passionate team is dedicated to helping event organizers and
            talented professionals connect, collaborate, and create memorable
            experiences.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >

              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="text-primary font-medium mt-2">
                  {member.role}
                </p>

                <p className="text-gray-500 mt-4 text-sm leading-6">
                  Passionate about building innovative solutions and creating
                  exceptional user experiences.
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6">

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-purple-100 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-purple-100 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-purple-100 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition"
                  >
                    <FaEnvelope />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamSection;