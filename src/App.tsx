
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooks/SearchBooksPage';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
import { ReviewListPage } from './layouts/BookCheckoutPage/ReviewListPage/ReviewListPage';
import { ShelfPage } from './layouts/ShelfPage/ShelfPage';
import { MessagesPage } from './layouts/MessagesPage/MessagesPage';
import { ManageLibraryPage } from './layouts/ManageLibraryPage/ManageLibraryPage';
import { PaymentPage } from './layouts/PaymentPage/PaymentPage';


function App() {
  const oktaAuth = new OktaAuth(oktaConfig);

  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  }

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  }
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler} >
        <Navbar />
        <div className='flex-grow-1'>
          <Switch>
            <Route path="/home" exact>
              <Redirect to="/" />
            </Route>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchBooksPage />
            </Route>
            <Route path="/reviewlist/:bookId">
              <ReviewListPage />
            </Route>
            <Route path='/checkout/:bookId'>
              <BookCheckoutPage />
            </Route>
            <Route path='/login' render={() =>
              <LoginWidget config={oktaConfig} />
            } />
            <Route path='/login/callback' component={LoginCallback} />
            
            <SecureRoute path='/shelf'> 
              <ShelfPage />
            </SecureRoute>
            <SecureRoute path='/messages'>
              <MessagesPage />
            </SecureRoute>
            <SecureRoute path="/admin">
              <ManageLibraryPage />
            </SecureRoute>
            <SecureRoute path="/fees">
              <PaymentPage />
            </SecureRoute>
          
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  )
}

export default App
