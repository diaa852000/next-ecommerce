"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiHandbagLight } from "react-icons/pi";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UserButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.UserButton), {
    ssr: false,
});

export default function UserSettings() {
    return (
        <>
            <SignedOut>
                <div className="flex items-center justify-between gap-2">
                    <Button
                        variant={"outline"}
                        className="font-medium py-2 px-4 rounded-full bg-muted/10"
                        size={"icon"}
                    >
                        <CiHeart className="text-primary !w-6 !h-6" />
                    </Button>
                    <Button
                        variant={"outline"}
                        className="font-medium py-2 px-4 rounded-full bg-muted/10"
                        size={"icon"}
                    >
                        <PiHandbagLight className="text-primary !w-6 !h-6" />
                    </Button>
                    <button
                        type="button"
                        className="w-10 h-10 hover:bg-muted/65 flex items-center justify-center rounded-full transition-colors border bg-muted/10"
                    >
                        <SignInButton>
                            <CiUser className="text-primary w-6 h-6" />
                        </SignInButton>
                    </button>
                </div>
            </SignedOut>
            <SignedIn>
                <Button
                    variant={"outline"}
                    className="font-medium py-2 px-4 rounded-full bg-muted/10"
                    size={"icon"}
                >
                    <CiHeart className="text-primary !w-6 !h-6" />
                </Button>
                <Button
                    variant={"outline"}
                    className="font-medium py-2 px-4 rounded-full bg-muted/10"
                    size={"icon"}
                >
                    <PiHandbagLight className="text-primary !w-6 !h-6" />
                </Button>
                <Suspense fallback={"loading.."}>
                    <UserButton />
                </Suspense>
            </SignedIn>
        </>
    )
}

