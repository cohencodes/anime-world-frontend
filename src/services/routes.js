import LandingPage from '../components/LandingPage/LandingPage';
import SignupForm from '../components/SignupForm/SignupForm';
import Login from '../components/Login/Login';
import Search from '../components/Search/Search';
import SearchResults from '../components/SearchResults/SearchResults';
import DetailPage from '../components/DetailPage/DetailPage';
import WatchList from '../components/WatchList/WatchList';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/signup',
    component: SignupForm
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/results/:title',
    component: SearchResults
  },
  {
    path: '/detailpage/:title',
    component: DetailPage
  },
  {
    path: '/watchlist',
    component: WatchList
  },
  {
    path: '*',
    component: ErrorPage
  }
];

export default routes;
