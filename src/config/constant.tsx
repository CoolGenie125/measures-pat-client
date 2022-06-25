import sidebar1 from "../assets/icons/sidebar-icon1.png";
import sidebar2 from "../assets/icons/sidebar-icon2.png";
import sidebar3 from "../assets/icons/sidebar-icon3.png";
import sidebar4 from "../assets/icons/sidebar-icon4.png";

export const SidbarData = [
  {
    img: sidebar1,
    content: "個人向けサービス",
    router: {
      show: true,
      routers: [
        {
          name: "食事・美容",
          link: "/private/healthy",
        },
        {
          name: "ジム・マッサージ",
          link: "/private/healthy",
        },
        {
          name: "旅行・レジャー",
          link: "/private/healthy",
        },
        {
          name: "引越し",
          link: "/private/healthy",
        },
        {
          name: "家事・育児",
          link: "/private/healthy",
        },
        {
          name: "介護・福祉",
          link: "/private/healthy",
        },
        {
          name: "その他",
          link: "/private/healthy",
        },
      ],
    },
  },
  {
    img: sidebar2,
    content: "会社向けサービス",
    router: {
      show: true,
      routers: [
        {
          name: "ITツール利用",
          link: "/private/healthy",
        },
        {
          name: "システム開発",
          link: "/private/healthy",
        },
        {
          name: "WEB制作",
          link: "/private/healthy",
        },
        {
          name: "資料作成",
          link: "/private/healthy",
        },
        {
          name: "士業業務代行",
          link: "/private/healthy",
        },
        {
          name: "健康診断",
          link: "/private/healthy",
        },
        {
          name: "その他",
          link: "/private/healthy",
        },
      ],
    },
  },
  {
    img: sidebar3,
    content: "利用方法",
    router: {
      show: true,
      routers: [
        {
          name: "利用方法",
          link: "/usage",
        },
        {
          name: "お問い合わせ",
          link: "/usage/contact",
        },
      ],
    },
  },
  {
    img: sidebar4,
    content: "アカウント",
    router: {
      show: false,
      link: "/account",
    },
  },
];

// export const ApiUrl = "https://api.unicial.org";
export const ApiUrl = "http://192.168.112.103:8080";
export const REQUEST_API_URL = `${ApiUrl}/api`;