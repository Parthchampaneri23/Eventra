import { FaMapMarkerAlt } from "react-icons/fa";

const LocationMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">

          <span className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium">
            Visit Our Office
          </span>

          <h2 className="text-4xl font-bold mt-5">
            We're Here to Help
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you're organizing an event or looking for talented professionals,
            our team is always ready to assist you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <div className="flex items-start gap-4 mb-8">
              <div className="bg-primary text-white p-4 rounded-2xl">
                <FaMapMarkerAlt size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Eventra Headquarters
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  201 Business Tower,<br />
                  Andheri East,<br />
                  Mumbai, Maharashtra 400069,<br />
                  India
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-3">
                Office Hours
              </h4>

              <p className="text-gray-600">
                Monday - Friday
              </p>

              <p className="font-semibold mb-4">
                9:00 AM - 6:00 PM
              </p>

              <p className="text-gray-600">
                Saturday
              </p>

              <p className="font-semibold">
                10:00 AM - 2:00 PM
              </p>
            </div>

          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[450px]">

            <iframe
              title="Eventra Location"
              src="https://www.google.com/maps?q=Andheri%20East%20Mumbai&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default LocationMap;