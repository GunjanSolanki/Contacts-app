import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";
import ContactsComponent from "../containers/Contacts";
import CreateContactComponent from "../containers/CreateContact";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
    needAuth: false
  },
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
    needAuth: false
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
    needAuth: true
  },
  {
    path: "/contacts/create",
    component: CreateContactComponent,
    title: "CreateContact",
    needAuth: true
  },
]

export default routes;