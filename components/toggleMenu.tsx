import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export default function ToggleMenu() {
    return (
        <Button
            type="button"
            variant={"outline"}
            size={"icon"}
            // className="rounded-full flex flex-col items-center justify-center gap-1 
            // border border-muted-foreground/50 w-10 h-10 shadow-sm hover:bg-secondary/50 transition-colors"
            className="rounded-full bg-muted/10"
        >
            <Menu strokeWidth={'1.2px'} className="text-primary !h-6 !w-6" />
        </Button>
    )
}
