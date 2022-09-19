import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { Button } from './components/Button';
import { Avatar } from "./components/Avatar";
import { Input } from "./components/Input";
import { ErrorLabel } from "./components/ErrorLabel";
import { registerComponent } from "./utils/registerComponent";
import Router from "./utils/Router";
import { SignupPage } from "./pages/Signup";
import { ProfilePage } from "./pages/Profile";
import { ChatPage } from "./pages/Chat";
import { ErrorPage } from "./pages/ErrorPage";

registerComponent("Button", Button as any);
registerComponent("Avatar", Avatar as any);
registerComponent("Input", Input as any);
registerComponent("ErrorLabel", ErrorLabel as any);


window.addEventListener('DOMContentLoaded', () => {
  Router
    .use('/', HomePage)
    .use('/login', LoginPage)
    .use('/sign-up', SignupPage)
    .use('/settings', ProfilePage)
    .use('/settings-edit', ProfilePage)
    .use('/settings-edit-password', ProfilePage)
    .use('/messenger', ChatPage)
    .use('/500', ErrorPage)
    .use('/404', ErrorPage)
    .start()
})
//
// window.addEventListener('DOMContentLoaded', () => {
//   const root = document.querySelector('#app')!;
//   const path = document.location.pathname;
//   console.log(path)
//
//   switch (path) {
//     case '/':
//       const homePage = new HomePage({linksList: linksList});
//       root.append(homePage.getContent()!);
//       homePage.dispatchComponentDidMount();
//       break
//     case '/login':
//       const loginPage = new LoginPage({} as ILoginPage);
//       root.append(loginPage.getContent()!);
//       loginPage.dispatchComponentDidMount();
//       break
//     case '/signup':
//       const signupPage = new SignupPage({} as ISignUpPage);
//       root.append(signupPage.getContent()!);
//       signupPage.dispatchComponentDidMount();
//       break
//     case '/404':
//       const notFoundPage = new ErrorPage(notFoundPageProps);
//       root.append(notFoundPage.getContent()!);
//       notFoundPage.dispatchComponentDidMount();
//       break
//     case '/500':
//       const serverErrorPage = new ErrorPage(serverErrorPageProps);
//       root.append(serverErrorPage.getContent()!);
//       serverErrorPage.dispatchComponentDidMount();
//       break
//     case ('/profile'):
//       const profilePage = new ProfilePage({path: path} as IProfilePage);
//       root.append(profilePage.getContent()!);
//       profilePage.dispatchComponentDidMount();
//       break
//     case ('/profile-edit'):
//       const profilePageEdit = new ProfilePage({path: path} as IProfilePage);
//       root.append(profilePageEdit.getContent()!);
//       profilePageEdit.dispatchComponentDidMount();
//       break
//     case ('/profile-edit-password'):
//       const profilePagePassword = new ProfilePage({path: path} as IProfilePage);
//       root.append(profilePagePassword.getContent()!);
//       profilePagePassword.dispatchComponentDidMount();
//       break
//     case ('/chat'):
//       const chatPage = new ChatPage({});
//       root.append(chatPage.getContent()!);
//       chatPage.dispatchComponentDidMount();
//       break
//   }
// });
