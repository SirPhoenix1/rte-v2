import {
  Anton,
  Arimo,
  Baskervville,
  Comic_Neue,
  Courier_Prime,
  EB_Garamond,
  Fraunces,
  Inter,
  Josefin_Sans,
  Lato,
  Merriweather,
  Montserrat,
  Open_Sans,
  Outfit,
  Playfair_Display,
  Poppins,
  Radley,
  Roboto,
  Tangerine,
  Tinos,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});
export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});
export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: "400",
});
export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});
export const courier_prime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier_prime",
  weight: "400",
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "400",
});
export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
  weight: "400",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
});
export const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: "400",
});
export const radley = Radley({
  subsets: ["latin"],
  variable: "--font-radley",
  weight: "400",
});
export const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: "400",
});
export const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin_sans",
  weight: "400",
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: "400",
});
export const tangerine = Tangerine({
  subsets: ["latin"],
  variable: "--font-tangerine",
  weight: "700",
});
export const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  weight: "400",
});
export const comic_neue = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-comic_neue",
  weight: "400",
});
export const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: "400",
});
export const baskervville = Baskervville({
  subsets: ["latin"],
  variable: "--font-baskervville",
  weight: "400",
});

interface Font {
  name: string;
  value: string;
}

export const fontList: Font[] = [
  { name: "Roboto", value: roboto.className },
  { name: "Open Sans", value: open_sans.className },
  { name: "Lato", value: lato.className },
  { name: "Courier Prime", value: courier_prime.className },
  { name: "Poppins", value: poppins.className },
  { name: "Fraunces", value: fraunces.className },
  { name: "Playfair Display", value: playfair_display.className },
  { name: "Montserrat", value: montserrat.className },
  { name: "Anton", value: anton.className },
  { name: "Outfit", value: outfit.className },
  { name: "Radley", value: radley.className },
  { name: "Arimo", value: arimo.className },
  { name: "Josefin Sans", value: josefin_sans.className },
  { name: "Merriweather", value: merriweather.className },
  { name: "Tangerine", value: tangerine.className },
  { name: "Tinos", value: tinos.className },
  { name: "Comic Neue", value: comic_neue.className },
  { name: "Garamond", value: garamond.className },
  { name: "Baskervville", value: baskervville.className },
];
