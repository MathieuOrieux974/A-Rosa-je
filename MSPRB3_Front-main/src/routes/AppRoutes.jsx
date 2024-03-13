import Articles from '@pages/Articles/Articles';
import Auth from '@pages/Auth/Auth';
import Home from '@pages/Home/Home';
import MyPlants from '@pages/MyPlants/MyPlants';
import { NotFound } from '@pages/NotFound/NotFound';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AuthRoute from './accessHandler/AuthRoute';
import Layout from './components/Layout';
import Contact from "@pages/Contact/Contact";

/**
 * Variable used to handle all the routes of the application
 */
export const router = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        {/** page required authentification */}
        <Route element={<AuthRoute />}>
          <Route path="/my-plants" element={<MyPlants />} />
        </Route>
        <Route path="/not-found" element={<NotFound />} />
        {/** Unknown path redirection */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
