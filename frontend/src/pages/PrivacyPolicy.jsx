import MainLayout from "../layouts/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 py-16 min-h-screen">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <h1 className="text-4xl font-bold text-dark">
              Privacy Policy
            </h1>

            <p className="text-gray-500 mt-2">
              Last Updated: July 2026
            </p>

            <div className="space-y-8 mt-10">

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Information We Collect
                </h2>

                <p className="text-gray-600 leading-8">
                  Eventra collects basic information such as your name,
                  email address, phone number, and event-related details
                  when you contact us, register, or submit forms on our
                  platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  How We Use Your Information
                </h2>

                <p className="text-gray-600 leading-8">
                  The information you provide is used to connect event
                  organizers with talented professionals, improve our
                  platform, respond to inquiries, and provide better user
                  support.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Data Security
                </h2>

                <p className="text-gray-600 leading-8">
                  We implement reasonable security measures to protect your
                  personal information. While we strive to keep your data
                  secure, no online service can guarantee complete
                  protection.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Your Rights
                </h2>

                <p className="text-gray-600 leading-8">
                  You may request to review, update, or remove your
                  personal information by contacting our support team.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Contact Us
                </h2>

                <p className="text-gray-600 leading-8">
                  For any questions regarding this Privacy Policy, please
                  contact us at
                  <span className="text-primary font-semibold">
                    {" "}
                    support@eventra.com
                  </span>
                  .
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicy;