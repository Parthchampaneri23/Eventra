import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover talented professionals across multiple creative fields and
            find the perfect team for your next event.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-purple-100 text-primary flex items-center justify-center text-3xl transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>

                {/* Jobs */}
                <p className="mt-2 text-sm text-gray-500">
                  {category.jobs}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;