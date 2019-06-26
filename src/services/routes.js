import LandingPage from '../components/LandingPage/LandingPage';
import SignupForm from '../components/SignupForm/SignupForm';
import Login from '../components/Login/Login';
import Search from '../components/Search/Search';
import SearchResults from '../components/SearchResults/SearchResults';
import DetailPage from '../components/DetailPage/DetailPage';
import WatchList from '../components/WatchList/WatchList';

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/home',
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
    path: '/search/:show_title',
    component: SearchResults
  },
  {
    path: '/detailpage',
    component: DetailPage
  },
  {
    path: '/watchlist',
    component: WatchList
  }
];

export default routes;
