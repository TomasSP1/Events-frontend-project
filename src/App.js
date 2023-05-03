import Main from "./EventsMain";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <div className="page">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
