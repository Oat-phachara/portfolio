import { Home, Profile, SignIn, SignUp,Contact } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp/>,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact/>,
  },
  
];

export default routes;
