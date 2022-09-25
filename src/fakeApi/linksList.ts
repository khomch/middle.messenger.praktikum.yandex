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
      link: "/login"
    },
    {
      title: "Sign-up",
      link: "/sign-up"
    },
    {
      title: "Error 500",
      link: "/500"
    },
    {
      title: "Error 404",
      link: "/404"
    },
    {
      title: "Profile",
      link: "/settings"
    },
    {
      title: "Chat",
      link: "/messenger"
    },
  ],
  title: "Hey! There are some pages:"
}