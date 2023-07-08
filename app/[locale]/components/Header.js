'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import DarkIcon from "../icons/DarkIcon";
import LightIcon from "../icons/LightIcon";
import MenuIcon from "../icons/MenuIcon";

export default function Header({ messages }) {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const locale = segments[1]
    const route = segments.length === 2 ? 'home' : segments[2];
    const [dark, setDark] = useState(true); 

    useEffect(() => {
        // add class to current nav button
        let navEls = document.getElementsByClassName(`${route}Nav`);
        for (const el of navEls) {
            el.classList.remove('navBtn');
            el.classList.add('activeBtn');
        }
        // Display correct theme button
        setDark(document.documentElement.classList.contains('dark'));
    }, []);

    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setDark(true);
        }
    }

    function redirectLang(locale) {
        if (segments.length > 2) {
            segments.splice(0,2);
            return `/${locale === 'en' ? 'es' : 'en'}/${segments.join('/')}`;
        } else {
            return `/${locale === 'en' ? 'es' : 'en'}`;
        }
    }

    function showMenu() {
        document.getElementById('headerMenu').classList.toggle('hidden');
    }

    return (
        <>
            {/* For Larger Screens */}
            <header className="hidden lg:flex">
                <div className="w-full p-4 flex justify-between">

                    {/* Title: */}
                    <h1 className="italic text-4xl font-extrabold text-center p-6 h-full">
                        {`${messages.Title} ${messages.Route[route]}`} 
                    </h1>

                    {/* Nav: */}
                    <nav className="flex justify-evenly items-end p-6 h-full space-x-4">
                        <Link className="navBtn homeNav" href={`/${locale}`}>
                            {messages.Route.home}
                        </Link>
                        <Link className="navBtn workNav" href={`/${locale}/work`}>
                            {messages.Route.work}
                        </Link>
                        <Link className="navBtn cvNav" href={`/${locale}/cv`}>
                            {messages.Route.cv}
                        </Link>
                        <Link className="navBtn contactNav" href={`/${locale}/contact`} >
                            {messages.Route.contact}
                        </Link>
                    </nav>
                    
                    {/* Settings: */}
                    <div className="flex justify-end items-center p-4 space-x-4">
                        {/* Lang */}
                        <Link className="p-[11px] ring-4 ring-gray-700 dark:ring-gray-200 rounded-lg hover:bg-[rgb(255,255,255)] dark:hover:bg-[rgb(20,20,20)]" href={redirectLang(locale)}>
                            {locale === 'en' ? 'ES' : 'EN'}
                        </Link>
                        {/* Theme */}
                        <button type="button" className="h-fit ring-4 ring-gray-700 dark:ring-gray-200 rounded-lg p-[11px] hover:bg-[rgb(255,255,255)] dark:hover:bg-[rgb(20,20,20)]" onClick={toggleTheme}>
                            {dark ? <LightIcon /> : <DarkIcon />}
                        </button>
                    </div>

                </div>
            </header>

            {/* For Smaller Screens */}
            <header className="w-screen lg:hidden">
                <div className="flex w-full items-center">
                    <div className="w-1/12 ml-4">
                        <button className="w-8 h-8" onClick={showMenu}>
                            <MenuIcon />
                        </button>
                    </div>
                    <h1 className="w-11/12 italic text-3xl font-extrabold text-center p-6">
                        {`${messages.Title} ${messages.Route[route]}`}    
                    </h1>
                </div>
                <div id="headerMenu" className="w-full flex hidden justify-start">
                    <div className="border w-5/12 md:w-3/12 absolute left-4 z-10 bg-white dark:bg-black">
                        <div className="bg-neutral-50 dark:bg-neutral-900 p-4">
                            <p>
                                Settings:
                            </p>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <p>
                                Language:
                            </p>
                            <Link className="p-[6px] ring-2 ring-gray-700 dark:ring-gray-200 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900" href={redirectLang(locale)}>
                                {locale === 'en' ? 'ES' : 'EN'}
                            </Link>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <p>
                                Color Mode:
                            </p>
                            <button type="button" className="h-fit ring-2 ring-gray-700 dark:ring-gray-200 rounded-lg p-[6px] hover:bg-neutral-50 dark:hover:bg-neutral-900" onClick={toggleTheme}>
                                {dark ? <LightIcon /> : <DarkIcon />}
                            </button>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900 p-4">
                            <p>
                                Nav:
                            </p>
                        </div>
                        <div className="flex flex-col space-y-4 px-4 pt-4 pb-4">
                            <Link className="navBtn homeNav" href={`/${locale}`}>
                                {messages.Route.home}
                            </Link>
                            <Link className="navBtn workNav" href={`/${locale}/work`}>
                                {messages.Route.work}
                            </Link>
                            <Link className="navBtn cvNav" href={`/${locale}/cv`}>
                                {messages.Route.cv}
                            </Link>
                            <Link className="navBtn contactNav" href={`/${locale}/contact`} >
                                {messages.Route.contact}
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
