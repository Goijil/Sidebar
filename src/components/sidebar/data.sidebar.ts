import {
  Award,
  Github,
  Home,
  Settings,
  Speech,
  SquareCheckBig,
  Users,
} from "lucide-react";
import { IMenuItem } from "./types.data.sidebar";

export const MENU: IMenuItem[] = [
  { icon: Home, name: "Home", link: "/" },
  { icon: Users, name: "Friends", link: "/friends" },
  { icon: SquareCheckBig, name: "Todo list", link: "/todo" },
  { icon: Award, name: "Achievements", link: "/achievements" },
  { icon: Github, name: "GitHub", link: "/gitHub" },
  { icon: Settings, name: "Settings", link: "/settings" },
  { icon: Speech, name: "Support", link: "/support" },
];
