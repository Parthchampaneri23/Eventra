import { useEffect, useState } from "react";

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Stats = () => {
  const stats = [
    {
      number: 500,
      suffix: "+",
      title: "Events Hosted",
    },
    {
      number: 3000,
      suffix: "+",
      title: "Talented Professionals",
    },
    {
      number: 50,
      suffix: "+",
      title: "Cities Connected",
    },
    {
      number: 98,
      suffix: "%",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

          <span className="bg-white/20 px-4 py-2 rounded-full">
            Our Impact
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Growing Every Single Day
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Eventra continues to connect talented professionals with
            event organizers across India, creating memorable
            experiences every day.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:scale-105 transition duration-300"
            >
              <h3 className="text-5xl font-bold mb-3">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />
              </h3>

              <p className="text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;