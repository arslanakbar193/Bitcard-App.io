import dashboard from "../assets/media/icondashboard.png";
import wallet from "../assets/media/iconwallet.png";
import account from "../assets/media/iconaccount.png";
import redeem from "../assets/media/iconredeem.png";
import profile from "../assets/media/iconprofile.png";
import history from "../assets/media/iconhistory.png";
import logout from "../assets/media/iconlogout.png";

const allMenus = {
  menus: [
    {
      icon: dashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: wallet,
      label: "Wallet",
      path: "/wallet",
    },
    {
      icon: account,
      label: "Account",
      path: "/account",
    },
    {
      icon: redeem,
      label: "abc",
      path: "/redeem",
    },
    {
      icon: profile,
      label: "Profile",
      path: "/profile",
    },
    {
      icon: history,
      label: "History",
      path: "/history",
    },
    {
      icon: logout,
      label: "Logout",
    },
  ],
  informationalMenus: [
    {
      label: "FAQ",
      path: "/faqs",
    },
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      label: "Terms Of Use",
      path: "/terms-and-conditions",
    },
    {
      label: "Supported Countries",
      path: "/support",
    },
    {
      label: "become a Reseller",
      path: "/sell",
    },
  ],
};

export default allMenus;
