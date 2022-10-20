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
import { ComponentConstructable } from "./hocs/withRouter";
import { ModalWindow } from "./components/ModalWindow/modal-window";
import { Chats } from "./components/Chats/chats";
import { ChatWindow } from "./components/ChatWindow/chat-window";
import { Message } from "./components/Message/message";
import { Link } from "./components/Link";
import authController  from "./controllers/AuthController";
import store from "./utils/Store";


registerComponent("Button", Button as any);
registerComponent("Avatar", Avatar as any);
registerComponent("Input", Input as any);
registerComponent("ErrorLabel", ErrorLabel as any);
registerComponent("ModalWindow", ModalWindow as any);
registerComponent("Chat", Chats as any);
registerComponent("ChatWindow", ChatWindow as any);
registerComponent("Message", Message as any);
registerComponent("Link", Link as any);


window.addEventListener('DOMContentLoaded', async () => {
  await authController.fetchUser();
  const user = store.state.user

  Router
    .use('/', LoginPage, { user, isPrivate: false })
    .use('/login', LoginPage, { user, isPrivate: false })
    .use('/sign-up', SignupPage, { user, isPrivate: false })
    .use('/settings', ProfilePage as ComponentConstructable<any>, { user, isPrivate: true })
    .use('/settings-edit', ProfilePage as ComponentConstructable<any>, { user, isPrivate: true })
    .use('/settings-edit-password', ProfilePage as ComponentConstructable<any>, { user, isPrivate: true })
    .use('/messenger', ChatPage as ComponentConstructable<any>, { user, isPrivate: true })
    .use('/500', ErrorPage,  { user, isPrivate: false })
    .use('*', ErrorPage,  { user, isPrivate: false })
    .start()
})
