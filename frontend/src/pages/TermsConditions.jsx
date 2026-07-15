import MainLayout from "../layouts/MainLayout";

const TermsConditions = () => {
  return (
    <MainLayout>
      <section className="bg-gray-50 py-16 min-h-screen">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">

            <h1 className="text-4xl font-bold text-dark">
              Terms & Conditions
            </h1>

            <p className="text-gray-500 mt-2">
              Last Updated: July 2026
            </p>

            <div className="space-y-8 mt-10">

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Acceptance of Terms
                </h2>

                <p className="text-gray-600 leading-8">
                  By accessing or using Eventra, you agree to comply with
                  these Terms and Conditions. If you do not agree, please
                  discontinue using the platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  User Responsibilities
                </h2>

                <p className="text-gray-600 leading-8">
                  Users are responsible for providing accurate information
                  while registering, applying for events, or hiring talent.
                  Any misuse of the platform is strictly prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Platform Usage
                </h2>

                <p className="text-gray-600 leading-8">
                  Eventra acts as a platform connecting event organizers
                  with talented professionals. We are not responsible for
                  agreements or disputes between users.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Limitation of Liability
                </h2>

                <p className="text-gray-600 leading-8">
                  Eventra is not liable for any direct or indirect damages
                  arising from the use of the platform or interactions
                  between organizers and talents.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-primary mb-3">
                  Contact Us
                </h2>

                <p className="text-gray-600 leading-8">
                  If you have any questions regarding these Terms &
                  Conditions, please contact us at
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

export default TermsConditions;