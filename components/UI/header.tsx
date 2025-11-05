"use client";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

import Image from "next/image";

export const MyLogo = () => (
  <Image src="/img/main-logo.png" alt="Random abstract logo" width={56} height={56} />
);

export function Header() {
  const linksPool = [
    { name: "Главная", href: "/" },
    { name: "Проекты", href: "/projects" },
    { name: "О нас", href: "/about" },
  ];
  return (
    <Navbar
      maxWidth="full"
      className="
        px-20! py-2!
        bg-linear-to-r from-fuchsia-500 to-fuchsia-900
        backdrop-blur-xl
        border-b border-white/60 shadow-sm
      "
    >
      {/* Логотип и бренд */}
      <NavbarBrand className="gap-3 items-center">
        <MyLogo />
        <p className="font-semibold text-xl text-gray-800 tracking-tight hover:text-indigo-700 transition-colors">
          Дмитриевский сайт
        </p>
      </NavbarBrand>

      {/* Центральное меню */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">

        {linksPool.map((item, i) => (
          <NavbarItem key={i}>
            <Link
              href={item.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Правая часть */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
          >
            Войти
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="
              rounded-xl px-5! py-2! font-medium shadow-md
              bg-linear-to-r from-pink-500 to-fuchsia-700
              text-white hover:from-fuchsia-700 hover:to-pink-500
              transition-colors duration-300
            "
          >
            Зарегистрироваться
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}