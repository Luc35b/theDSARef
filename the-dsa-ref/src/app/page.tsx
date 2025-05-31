import { dsaData } from '@/lib/dsaData';
import { ExpandableCard } from '@/components/ExpandableCard';
import { CodeBlock } from '@/components/CodeBlock';

export default function HomePage() {
  const dataStructures = dsaData.filter(item => item.category === 'data-structures');
  const algorithms = dsaData.filter(item => item.category === 'algorithms');

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-12 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            DSA Reference
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A comprehensive reference for Data Structures and Algorithms with implementations and complexity analysis.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Data Structures
            </h2>
            <div className="space-y-4">
              {dataStructures.map((item) => (
                <ExpandableCard key={item.id} title={item.title}>
                  <div className="space-y-4">
                    <p className="text-gray-700">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Time Complexity</h4>
                        <p className="text-sm text-gray-600">{item.complexity.time}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Space Complexity</h4>
                        <p className="text-sm text-gray-600">{item.complexity.space}</p>
                      </div>
                    </div>
                    <CodeBlock code={item.code} language="cpp" />
                  </div>
                </ExpandableCard>
              ))}
            </div>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Algorithms
            </h2>
            <div className="space-y-4">
              {algorithms.length > 0 ? (
                algorithms.map((item) => (
                  <ExpandableCard key={item.id} title={item.title}>
                    <div className="space-y-4">
                      <p className="text-gray-700">{item.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">Time Complexity</h4>
                          <p className="text-sm text-gray-600">{item.complexity.time}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Space Complexity</h4>
                          <p className="text-sm text-gray-600">{item.complexity.space}</p>
                        </div>
                      </div>
                      <CodeBlock code={item.code} language="cpp" />
                    </div>
                  </ExpandableCard>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">
                  No algorithms added yet. Check back soon!
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}