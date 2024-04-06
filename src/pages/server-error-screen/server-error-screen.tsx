import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import './styles.css';

function ServerErrorScreen(): JSX.Element {
  const errorCode = '500';
  const errorMessage = 'Сервер не работает. Мы уже знаем о проблеме, скоро починим';
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: page error</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">Ошибка {errorCode}</b>
                <p className="cities__status-description">
                  {errorMessage}
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ServerErrorScreen;
