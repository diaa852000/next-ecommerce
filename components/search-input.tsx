import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
    return (
        <form
            className="flex-grow relative"
        >
            <Input
                name="search"
                placeholder="Search..."
                className="reset-input-outline bg-muted text-sm h-full"
            />
            <Button
                size={"icon"}
                className="rounded-full absolute top-1/2 -translate-y-1/2 right-4  !w-8 !h-8 bg-white hover:bg-white"
            >
                <CiSearch  className="text-primary !w-5 !h-5"/>
            </Button>
        </form>
    )
}
