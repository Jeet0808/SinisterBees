import Provider from './app/provider';
import AppRouter from './app/router';

function App() {
  return (
    <>
      <Provider>
        <AppRouter/>
      </Provider>
    </>
  );
}

export default App;