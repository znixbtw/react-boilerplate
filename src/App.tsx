import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main className="p-20">
      <nav className="flex space-x-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </main>
  );
}

function HomePage() {
  return (
    <section>
      <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl ">Home</h2>
    </section>
  );
}
function AboutPage() {
  return (
    <section>
      <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl ">
        About
      </h2>
    </section>
  );
}

function NoMatchPage() {
  return (
    <section>
      <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl ">404</h2>
    </section>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
}

export default App;
