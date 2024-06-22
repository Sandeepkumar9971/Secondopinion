import {
  IconLayoutDashboard,
  IconSettings,
  IconUsers,
  IconChecklist,
} from "@tabler/icons-react";

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sidelinks: SideLink[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/dashboard/doctor",
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: "Manage Sessions",
    label: "",
    href: "/dashboard/user/manage-sessions",
    icon: <IconUsers size={18} />,
  },
  {
    title: "Manage Appointments",
    label: "",
    href: "/dashboard/doctor/all-appointments",
    icon: <IconChecklist size={18} />,
  },
  {
    title: "Todays Appointments",
    label: "",
    href: "/dashboard/doctor/todays-appointments",
    icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-box-bottom-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M11 15v2" /><path d="M14 11v6" /><path d="M17 13v4" /></svg>,
  },
  {
    title: "Settings",
    label: "",
    href: "/dashboard/doctor/settings/profile",
    icon: <IconSettings size={18} />,
  },
];
