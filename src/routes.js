import { Messenger } from "components/Messenger";
import { AboutPage } from "pages/AboutPage";

export const routes = [
  {
    path: '/',
    exact: true,
    element: Messenger
  },
  {
    path: '/about',
    exact: true,
    element: AboutPage
  },
  {
    path: '/chats/:id',
    exact: true,
    element: Messenger
  }

]