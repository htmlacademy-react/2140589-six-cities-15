import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { FormEvent } from 'react';
import { UserCredentionals } from '../../components/types/auth';
import { useAppDisputch } from '../../components/store/types';
import { loginUser } from '../../components/services/api-actions';
import useAuth from '../../components/hooks/use-auth';
import { AppRoutes } from '../../const';
import { Navigate } from 'react-router-dom';

function LoginScreen (): JSX.Element {
  const dispatch = useAppDisputch();
  const {isAuth} = useAuth();

  {
    if (isAuth) {
      return <Navigate to={AppRoutes.Main} />;
    }
  }

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const credentionals = Object.fromEntries(formData) as UserCredentionals;
    dispatch(loginUser(credentionals));
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
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
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
