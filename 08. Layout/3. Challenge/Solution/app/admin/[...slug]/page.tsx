//============ 🗂️AdminRoutes/🗂️[...all]/⚛️page.tsx ============== 


const AdminRoute = async ({ params }: { params: { all: string[] } }) => {
      const { slug } = await params;

      return (
            <div className="bg-gradient-to-r from-black-800 to-gray-900 p-8 rounded-xl shadow-lg text-white">
                  <h1 className="text-3xl font-bold mb-6">Admin Route</h1>

                  <ul className="space-y-4 text-lg">
                        {slug.map((p) => (
                              <li
                                    key={p}
                                    className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition duration-300 ease-in-out"
                              >
                                    {p}
                              </li>
                        ))}
                  </ul>
            </div>

      );
};

export default AdminRoute;
