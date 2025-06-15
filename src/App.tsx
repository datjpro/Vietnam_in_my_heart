import VietnamSVGMap from './components/VietnamSVGMap';
import VietnamStats from './components/VietnamStats';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <VietnamStats />
          <VietnamSVGMap />
        </div>
      </main>
    </div>
  );
}

export default App;
