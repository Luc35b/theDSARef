export default function AboutPage() {
    return (
      <div className="h-screen flex items-start justify-center pt-[25%]">
        <div className="text-center text-gray-900 bg-gray-100 rounded-2xl p-16">
          <h1 className="text-3xl font-bold mb-4">About This Project</h1>
          <p className="text-lg mb-4 max-w-2xl">
            This project was created to help learners gain a deeper understanding of core computer science concepts.
          </p>
          <p className="text-lg">
            It is built with Next.js, Tailwind CSS, and Shiki for the syntax-highlighted code snippets.
          </p>
        </div>
      </div>
    )
}