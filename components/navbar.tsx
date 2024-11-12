import Link from "next/link";
import Logo from "./logo";
import ToggleMenu from "./toggleMenu";
import UserSettings from "./user-settings";
import { _categoriesLinks } from "@/constants";
import SearchInput from "./search-input";

export default function Navbar() {
    return (
        <nav className="flex flex-col main-container w-full mx-auto">
            <header className="grid-cols-4 w-full grid md:grid-cols-12 items-center pt-7 pb-4">
                <div className="md:col-span-3 col-span-1">
                    <ToggleMenu />
                </div>

                <div className="col-span-3 sm:col-span-2 md:col-span-6">
                    <Logo />
                </div>
                <div className="hidden sm:flex items-center gap-x-3 ms-auto md:col-span-3  col-span-1" >
                    <UserSettings />
                </div>
            </header>

            <div className="flex flex-col lg:flex-row gap-2">
                <Categories />
                <div className="flex gap-2 flex-grow">
                    <SearchInput />
                    <Link
                        href={'#'}
                        className="text-base text-slate-900 capitalize bg-muted py-2.5 px-3 rounded-xl text-center"
                    >
                        about
                    </Link>
                    <Link
                        href={'#'}
                        className="text-base text-slate-900 bg-muted py-2.5 px-3 rounded-xl text-center"
                    >
                        FAQs
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const Categories = () => {
    return (
        <div className="flex flex-wrap gap-2">
            {_categoriesLinks.map(category => (
                <Link
                    key={category.name}
                    href={category.href}
                    className="text-base text-slate-900 capitalize bg-muted py-2.5 px-3 rounded-xl text-center"
                >
                    {category.name}
                </Link>
            ))}
        </div>
    )
}

