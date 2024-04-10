import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { AppRoutes } from '../../const';
import { Navigate } from 'react-router-dom';
import './styles.css';
import useLoginScreen from './use-login-screen';

function LoginScreen (): JSX.Element {
  const {isAuth, handleLoginSubmit, handleToRandomCityOffers, randomCity} = useLoginScreen();
  {
    if (isAuth) {
      return <Navigate to={AppRoutes.Main} />;
    }
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo isActive={false}/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleLoginSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
            Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <button className="locations__item-link" onClick={handleToRandomCityOffers}>
                <span>{randomCity}</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
