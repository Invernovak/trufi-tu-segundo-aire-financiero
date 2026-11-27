import { forwardRef, useMemo, useState } from "react";
import { getCountries, getCountryCallingCode, type CountryCode } from "libphonenumber-js";
import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

// Banderas en SVG: cada una se descarga solo cuando se muestra
const flagUrls = import.meta.glob<string>("/node_modules/country-flag-icons/3x2/*.svg", {
  query: "?no-inline",
  import: "default",
  eager: true,
});
const flagUrl = (country: CountryCode) =>
  flagUrls[`/node_modules/country-flag-icons/3x2/${country}.svg`];

const regionNames = new Intl.DisplayNames(["es"], { type: "region" });

// Colombia primero; el resto en orden alfabético
const COUNTRIES = getCountries()
  .map((code) => ({
    code,
    name: regionNames.of(code) ?? code,
    dialCode: getCountryCallingCode(code),
  }))
  .filter((c) => flagUrl(c.code))
  .sort((a, b) => (a.code === "CO" ? -1 : b.code === "CO" ? 1 : a.name.localeCompare(b.name, "es")));

const Flag = ({ country }: { country: CountryCode }) => (
  <img
    src={flagUrl(country)}
    alt=""
    loading="lazy"
    className="h-3.5 w-5 shrink-0 rounded-[2px] object-cover"
  />
);

interface PhoneCountryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  country: CountryCode;
  onCountryChange: (country: CountryCode) => void;
  hasError?: boolean;
}

// Campo de teléfono con selector de país (bandera + indicativo)
const PhoneCountryInput = forwardRef<HTMLInputElement, PhoneCountryInputProps>(
  ({ country, onCountryChange, hasError, className, ...inputProps }, ref) => {
    const [open, setOpen] = useState(false);
    const dialCode = useMemo(() => getCountryCallingCode(country), [country]);

    return (
      <div
        className={cn(
          "flex h-8 w-full items-center rounded-md border bg-white/10 text-xs text-white transition-colors focus-within:border-white/40 focus-within:bg-white/20",
          hasError ? "border-red-400 focus-within:border-red-400" : "border-white/20",
          className,
        )}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label="Seleccionar país"
              className="flex h-full shrink-0 items-center gap-1.5 border-r border-white/20 pl-2.5 pr-2 hover:bg-white/10 rounded-l-md"
            >
              <Flag country={country} />
              <span>+{dialCode}</span>
              <ChevronDown className="h-3 w-3 opacity-60" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="start">
            <Command>
              <CommandInput placeholder="Buscar país..." className="h-9 text-sm" />
              <CommandList className="max-h-60">
                <CommandEmpty>No se encontró el país.</CommandEmpty>
                <CommandGroup>
                  {COUNTRIES.map((c) => (
                    <CommandItem
                      key={c.code}
                      value={`${c.name} +${c.dialCode} ${c.code}`}
                      onSelect={() => {
                        onCountryChange(c.code);
                        setOpen(false);
                      }}
                      className="gap-2 text-sm"
                    >
                      <Flag country={c.code} />
                      <span className="flex-1 truncate">{c.name}</span>
                      <span className="text-muted-foreground">+{c.dialCode}</span>
                      <Check className={cn("h-4 w-4", c.code === country ? "opacity-100" : "opacity-0")} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <input
          ref={ref}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          className="h-full min-w-0 flex-1 bg-transparent px-2.5 text-xs text-white placeholder:text-white/50 outline-none"
          {...inputProps}
        />
      </div>
    );
  },
);
PhoneCountryInput.displayName = "PhoneCountryInput";

export default PhoneCountryInput;
