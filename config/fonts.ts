import { Fira_Code as FontMono, Inter as FontSans  , Luckiest_Guy,
  Mitr as FontMitr
  
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontLuckiestGuy = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-luckiest-guy"
})

export const fontMitr = FontMitr({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-mitr"
})

