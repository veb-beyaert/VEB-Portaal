"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <form className="space-y-6">

      <div>
        <Label htmlFor="email">E-mailadres</Label>

        <Input
          id="email"
          type="email"
          placeholder="naam@email.nl"
          className="mt-2 h-12 rounded-xl"
        />
      </div>

      <div>
        <Label htmlFor="password">Wachtwoord</Label>

        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          className="mt-2 h-12 rounded-xl"
        />
      </div>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Checkbox id="remember" />

          <Label htmlFor="remember">
            Onthoud mij
          </Label>

        </div>

        <button
          type="button"
          className="text-sm text-[#2E5E3B] hover:underline"
        >
          Wachtwoord vergeten?
        </button>

      </div>

      <Button
        className="h-12 w-full rounded-xl bg-[#2E5E3B] text-white transition-all duration-300 hover:bg-[#24492e] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
      >
        Inloggen
      </Button>

    </form>
  );
}