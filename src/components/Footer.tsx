import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#07100a] px-5 py-8 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
                <Link to="/" className="flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-black text-ink">
                        K
                    </span>
                    <span className="font-black text-white">{profile.logo}</span>
                </Link>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">
                    &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

