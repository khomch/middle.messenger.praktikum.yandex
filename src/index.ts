import { HomePage } from './pages/Home';
import { ILoginPage, LoginPage } from './pages/Login';
import { ISignUpPage, SignupPage } from './pages/Signup';
import { ErrorPage } from './pages/ErrorPage';
import { Button } from './components/Button';
import { Avatar } from "./components/Avatar";
import { Input } from "./components/Input";
import { ErrorLabel } from "./components/ErrorLabel";
import { registerComponent } from "./utils/registerComponent";
import { notFoundPageProps } from "./fakeApi/notFoundPageProps";
import { serverErrorPageProps } from "./fakeApi/serverErrorPageProps";
import { linksList } from "./fakeApi/linksList";
import { IProfilePage, ProfilePage } from "./pages/Profile";
import { ChatPage } from "./pages/Chat";


registerComponent("Button", Button as any);
registerComponent("Avatar", Avatar as any);
registerComponent("Input", Input as any);
registerComponent("ErrorLabel", ErrorLabel as any);

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const path = document.location.pathname;
  console.log(path)

  switch (path) {
    case '/index.html':
      const homePage = new HomePage({linksList: linksList});
      root.append(homePage.getContent()!);
      homePage.dispatchComponentDidMount();
      break
    case '/login':
      const loginPage = new LoginPage({} as ILoginPage);
      root.append(loginPage.getContent()!);
      loginPage.dispatchComponentDidMount();
      break
    case '/signup':
      const signupPage = new SignupPage({} as ISignUpPage);
      root.append(signupPage.getContent()!);
      signupPage.dispatchComponentDidMount();
      break
    case '/404':
      const notFoundPage = new ErrorPage(notFoundPageProps);
      root.append(notFoundPage.getContent()!);
      notFoundPage.dispatchComponentDidMount();
      break
    case '/500':
      const serverErrorPage = new ErrorPage(serverErrorPageProps);
      root.append(serverErrorPage.getContent()!);
      serverErrorPage.dispatchComponentDidMount();
      break
    case ('/profile'):
      const profilePage = new ProfilePage({path: path} as IProfilePage);
      root.append(profilePage.getContent()!);
      profilePage.dispatchComponentDidMount();
      break
    case ('/profile-edit'):
      const profilePageEdit = new ProfilePage({path: path} as IProfilePage);
      root.append(profilePageEdit.getContent()!);
      profilePageEdit.dispatchComponentDidMount();
      break
    case ('/profile-edit-password'):
      const profilePagePassword = new ProfilePage({path: path} as IProfilePage);
      root.append(profilePagePassword.getContent()!);
      profilePagePassword.dispatchComponentDidMount();
      break
    case ('/chat'):
      const chatPage = new ChatPage({});
      root.append(chatPage.getContent()!);
      chatPage.dispatchComponentDidMount();
      break
  }
});
