import MainScreen from '../../pages/main-screen/main-screen';


type AppProps = {
  placeCardCount: number;
}

function App ({placeCardCount}: AppProps): JSX.Element {
  return (
    <MainScreen placeCardCount = {placeCardCount} />
  );
}

export default App;
