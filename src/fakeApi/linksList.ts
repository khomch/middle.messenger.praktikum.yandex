export interface ILinksList {
  links:
    {
      title: string,
      link: string
    }[],
  title: string
}

export const linksList: ILinksList = {
  links: [
    {
      title: "Login",
      link: "/login.html"
    },
    {
      title: "Sign-up",
      link: "/signup.html"
    },
    {
      title: "Error 500",
      link: "/500.html"
    },
    {
      title: "Error 404",
      link: "/404.html"
    },
    {
      title: "Profile",
      link: "/profile.html"
    },
    {
      title: "Chat",
      link: "/chat.html"
    },
  ],
  title: "Hey! There are some pages:"
}