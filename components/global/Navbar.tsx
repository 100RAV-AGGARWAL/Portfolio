import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
    return (
        <nav className="flex items-center justify-between">
            <li className="list-none font-bold text-lg cursor-pointer">
                <Link href="/">
                    <span className="font-black text-xl flex items-center">
                        <img
                            className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
                            src="/static/logos/sourav_circle.jpeg"
                            style={{ scale: "0.76" }}
                            width="60"
                        />
                        {"Sourav Aggarwal".split("").map((letter, index) => {
                            return (
                                <span
                                    key={index}
                                    className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                                >
                                    {letter}
                                </span>
                            );
                        })}
                    </span>
                </Link>
            </li>
            <ul className="flex items-center space-x-10">
                {routes.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={`list-none text-white ${
                                currentPage === item.title
                                    ? "opacity-100"
                                    : "opacity-40 hover:opacity-100 transition-opacity"
                            }`}
                        >
                            {item.leavesWebsite ? (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className="items-center flex"
                                >
                                    {item.title}
                                </a>
                            ) : (
                                <Link href={item.url}>{item.title}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
