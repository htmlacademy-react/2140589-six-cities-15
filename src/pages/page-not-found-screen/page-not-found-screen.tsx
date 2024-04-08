import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import './styles.css';

function PageNotFoundScreen(): JSX.Element {
  const errorCode = '404';
  const errorMessage = 'Страница не найдена';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {errorCode} </title>
      </Helmet>
      <Header isActive={false}/>
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
                <Link className='cities__return-button' to={AppRoutes.Main}>
                  Вернуться на главную страницу
                </Link>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageNotFoundScreen;
