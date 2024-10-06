import { AiOutlineHeart } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Avatar,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setToken } from "../../../store/modules/auth/login/action";
import { useDispatch, useSelector } from "react-redux";
import { FaClipboardCheck } from "react-icons/fa";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [loggedin, setloggedIn] = useState(false);

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const reduxToken = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setToken(""));
  };

  return (
    <Box className="pt-2 pb-1 border-b-2 border-gray-200">
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <h2 className="font-sans font-bold text-xl text-red-500 transform transition-transform duration-300 hover:scale-125 cursor-pointer">
            <Link to={"/"}>MernRestro</Link>
          </h2>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link
              to={"/home"}
              className="text-lg font-sans font-bold text-red-600 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              Home
            </Link>
            <Link
              to={"/aboutus"}
              className="text-lg font-sans font-bold text-red-600 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              About Us
            </Link>
            <Link
              to={"/menu"}
              className="text-lg font-sans font-bold text-red-600 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              Menu
            </Link>
            <Link
              to={"/contactus"}
              className="text-lg font-sans font-bold text-red-600 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              Contact Us
            </Link>
            <Link
              to={"/favourite"}
              className="text-3xl font-sans font-extrabold text-red-600 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              <AiOutlineHeart />
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Link
              to={"/delivery"}
              className="text-4xl font-sans font-extrabold text-gray-700 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              <MdDeliveryDining />
            </Link>
            <Link
              to={"/order"}
              className="text-2xl font-sans font-extrabold text-gray-700 transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
            >
              <FaClipboardCheck />
            </Link>
            {reduxToken ? (
              <div className="transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2">
                <button className="pt-2">
                  <Avatar variant="white" radius="lg" size="lg" src="" />
                </button>
              </div>
            ) : (
              <button className="bg-red-600 text-white border-red-100 border-2 font-bold py-1 px-4 rounded-xl transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2">
                <Link to={"/login"}>Login</Link>
              </button>
            )}

            {reduxToken ? (
              <button
                className="py-1 px-4 rounded-xl border-gray-200 border-2 bg-white text-black font-bold transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button className="py-1 px-4 rounded-xl border-gray-200 border-2 bg-white text-black font-bold transform transition-transform duration-300 hover:scale-110 cursor-pointer mx-2">
                <Link to={"/signup"}>SignUp</Link>
              </button>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        className="font-sans font-extrabold text-red-500   "
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="MernRestro"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea
          h={`calc(100vh - ${rem(80)})`}
          mx="-md"
          className="font-sans font-extrabold text-red-500 "
        >
          <Divider my="sm" />

          <div className={classes.link} onClick={closeDrawer}>
            <span className="font-sans text-2xl pb-2 font-bold text-red-600 transform transition-colors duration-300 hover:scale-110 cursor-pointer">
              <Link to={"/menu"}>Menu</Link>
            </span>
          </div>
          <Collapse in={linksOpened}>{links}</Collapse>
          <div className={classes.link} onClick={closeDrawer}>
            <span className="font-sans text-2xl pb-2 font-bold text-red-600 transform transition-colors duration-300 hover:scale-110 cursor-pointer">
              <Link to={"/aboutus"}>About Us</Link>
            </span>
          </div>
          <div className={classes.link} onClick={closeDrawer}>
            <span className="font-sans font-bold text-2xl pb-2 text-red-600 transform transition-colors duration-300 hover:scale-110 cursor-pointer">
              <Link to={"/contactus"}>Contact Us</Link>
            </span>
          </div>
          <div className={classes.link} onClick={closeDrawer}>
            <Link
              to={"/favourite"}
              className="flex justify-center transform transition-colors duration-300 hover:scale-110 cursor-pointer"
              onClick={closeDrawer}
            >
              <span className="font-sans font-bold text-2xl pb-2 text-red-600 transform transition-colors duration-300 hover:scale-110 cursor-pointer">
                <Link to={"/favourite"}>Favourite</Link>
              </span>
              <span className="text-3xl ml-1 text-red-600 font-semibold transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                <AiOutlineHeart />
              </span>
            </Link>
          </div>
          <div className={classes.link} onClick={closeDrawer}>
            <Link to={"/order"} className="flex justify-center">
              <span className="font-sans text-xl font-bold transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                Your Order
              </span>
              <span className="text-3xl ml-1 text-gray-700 font-extrabold">
                <MdDeliveryDining />
              </span>
            </Link>
          </div>
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <button className="bg-red-600 text-white border-red-100 border-2 font-bold py-1 px-4 rounded-xl transform transition-transform duration-300 hover:scale-110 cursor-pointer">
              <Link to={"/login"} onClick={closeDrawer}>
                Login
              </Link>
            </button>
            <button className="py-1 px-4 rounded-xl border-gray-200 border-2 bg-white text-black font-bold transform transition-transform duration-300 hover:scale-110 cursor-pointer">
              <Link to={"/signup"} onClick={closeDrawer}>
                SignUp
              </Link>
            </button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
