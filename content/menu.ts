// DRAFT — Norwegian extracted from Wolt on 2026-05-28; English translated 2026-05-29.
// Verify Vietnamese spellings and English wording with the restaurant.

import type { AppLocale } from "@/i18n/routing";

export type Translated = Record<AppLocale, string>;

export type MenuItem = {
  code: string;
  name: Translated;
  description: Translated;
  priceNok: number;
};

export type MenuCategory = {
  id: string;
  title: Translated;
  items: MenuItem[];
};

const t = (no: string, en: string): Translated => ({ no, en });

export const menu: MenuCategory[] = [
  {
    id: "forretter",
    title: t("Forretter", "Starters"),
    items: [
      {
        code: "05",
        name: t("Vårruller med svinekjøtt", "Pork spring rolls"),
        description: t("2 vårruller med svinekjøtt", "2 spring rolls with pork"),
        priceNok: 89,
      },
      {
        code: "06",
        name: t("Wonton suppe", "Wonton soup"),
        description: t(
          "Pasta, svinekjøtt og scampi i kyllingbuljong",
          "Dumplings, pork and shrimp in chicken broth"
        ),
        priceNok: 99,
      },
      {
        code: "07",
        name: t("Innbakt scampi", "Battered shrimp"),
        description: t(
          "2 innbakte scampi med sursøt saus",
          "2 battered shrimp with sweet-and-sour sauce"
        ),
        priceNok: 89,
      },
      {
        code: "08",
        name: t("Vyda suppe", "Vyda soup"),
        description: t(
          "Suppe med kylling, scampi og egg",
          "Soup with chicken, shrimp and egg"
        ),
        priceNok: 99,
      },
    ],
  },
  {
    id: "tradisjon",
    title: t("Vietnamesiske tradisjonsretter", "Vietnamese classics"),
    items: [
      {
        code: "10",
        name: t("Bún Bò Huế", "Bún Bò Huế"),
        description: t(
          "Risnudler, biff, svin, bologna og friske urter",
          "Rice noodles, beef, pork, bologna and fresh herbs"
        ),
        priceNok: 239,
      },
      {
        code: "11",
        name: t("Phở Bò", "Phở Bò"),
        description: t(
          "Risnudelsuppe med biff og friske urter",
          "Rice noodle soup with beef and fresh herbs"
        ),
        priceNok: 239,
      },
      {
        code: "12",
        name: t("Phở Tôm", "Phở Tôm"),
        description: t(
          "Risnudelsuppe med scampi og friske urter",
          "Rice noodle soup with shrimp and fresh herbs"
        ),
        priceNok: 239,
      },
      {
        code: "13",
        name: t("Bánh Xèo", "Bánh Xèo"),
        description: t(
          "Pannekaker med scampi, svinekjøtt og friske urter",
          "Pancakes with shrimp, pork and fresh herbs"
        ),
        priceNok: 239,
      },
      {
        code: "14",
        name: t("Nem Nướng", "Nem Nướng"),
        description: t(
          "Grillet svinekjøtt, rispapir og friske urter",
          "Grilled pork, rice paper and fresh herbs"
        ),
        priceNok: 239,
      },
      {
        code: "15",
        name: t("BBQ Heo Nướng", "BBQ Heo Nướng"),
        description: t(
          "Grillede ribber med salat og ris",
          "Grilled ribs with salad and rice"
        ),
        priceNok: 239,
      },
      {
        code: "16",
        name: t("Bún Chả Thịt Nướng", "Bún Chả Thịt Nướng"),
        description: t(
          "Risnudler, vårruller, sprø løk og grillet svinekjøtt",
          "Rice noodles, spring rolls, crispy onions and grilled pork"
        ),
        priceNok: 239,
      },
      {
        code: "17",
        name: t("Bún Bò Nướng", "Bún Bò Nướng"),
        description: t(
          "Risnudler, grillet biff, friske urter og peanøtter",
          "Rice noodles, grilled beef, fresh herbs and peanuts"
        ),
        priceNok: 239,
      },
      {
        code: "18",
        name: t("Bánh Hỏi Bò", "Bánh Hỏi Bò"),
        description: t(
          "Risvermicelli, biff, salat og pickles",
          "Rice vermicelli, beef, salad and pickles"
        ),
        priceNok: 239,
      },
      {
        code: "19",
        name: t("Bánh Hỏi Thịt Heo Quay", "Bánh Hỏi Thịt Heo Quay"),
        description: t(
          "Risvermicelli, grillede ribber og salat",
          "Rice vermicelli, grilled ribs and salad"
        ),
        priceNok: 239,
      },
      {
        code: "21",
        name: t("Vyda Bò Lúc Lắc", "Vyda Bò Lúc Lắc"),
        description: t(
          "Biffterninger i varm panne med grønnsaker, servert med ris",
          "Beef cubes in hot pan with vegetables, served with rice"
        ),
        priceNok: 259,
      },
    ],
  },
  {
    id: "wok",
    title: t("Wokretter", "Wok dishes"),
    items: [
      {
        code: "25",
        name: t("Bò Xào Tiêu", "Bò Xào Tiêu"),
        description: t(
          "Biff i peppersaus med grønnsaker, servert med ris",
          "Beef in pepper sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "26",
        name: t("Bò Xào Dầu Hào", "Bò Xào Dầu Hào"),
        description: t(
          "Biff i østerssaus med grønnsaker, servert med ris",
          "Beef in oyster sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "27",
        name: t("Happy Family", "Happy Family"),
        description: t(
          "Biff, svin og kylling i husets spesialsaus, servert med ris",
          "Beef, pork and chicken in house special sauce, served with rice"
        ),
        priceNok: 239,
      },
      {
        code: "28",
        name: t("Heo Chua Ngọt", "Heo Chua Ngọt"),
        description: t(
          "Stekt svinekjøtt i sursøt saus, servert med ris",
          "Fried pork in sweet-and-sour sauce, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "29",
        name: t("Heo Xào Sa Tế", "Heo Xào Sa Tế"),
        description: t(
          "Svinekjøtt i satay-saus med grønnsaker, servert med ris",
          "Pork in satay sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "30",
        name: t("Heo Xào Tiêu", "Heo Xào Tiêu"),
        description: t(
          "Svinekjøtt i peppersaus med grønnsaker, servert med ris",
          "Pork in pepper sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "31",
        name: t("Gà Xào Cà Ri", "Gà Xào Cà Ri"),
        description: t(
          "Kylling i karrisaus med grønnsaker, servert med ris",
          "Chicken in curry sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "32",
        name: t("Gà Xào Tỏi Ớt", "Gà Xào Tỏi Ớt"),
        description: t(
          "Kylling i chili-hvitløkssaus med grønnsaker, servert med ris",
          "Chicken in chili-garlic sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "33",
        name: t("Gà Chiên Chua Ngọt", "Gà Chiên Chua Ngọt"),
        description: t(
          "Sprø kylling i sursøt saus, servert med ris",
          "Crispy chicken in sweet-and-sour sauce, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "35",
        name: t("Tôm Xào Tỏi Ớt", "Tôm Xào Tỏi Ớt"),
        description: t(
          "Scampi i chili-hvitløkssaus med grønnsaker, servert med ris",
          "Shrimp in chili-garlic sauce with vegetables, served with rice"
        ),
        priceNok: 229,
      },
      {
        code: "36",
        name: t("Tôm Chiên Bột", "Tôm Chiên Bột"),
        description: t(
          "Innbakt scampi i sursøt saus, servert med ris",
          "Battered shrimp in sweet-and-sour sauce, served with rice"
        ),
        priceNok: 229,
      },
    ],
  },
  {
    id: "and-lam",
    title: t("And og lam", "Duck and lamb"),
    items: [
      {
        code: "40",
        name: t("Vịt Xào Đặc Biệt m/ris", "Vịt Xào Đặc Biệt w/ rice"),
        description: t(
          "Andefilet i husets spesialsaus med grønnsaker",
          "Duck filet in house special sauce with vegetables"
        ),
        priceNok: 269,
      },
      {
        code: "41",
        name: t("Vịt Xào Tỏi Ớt m/ris", "Vịt Xào Tỏi Ớt w/ rice"),
        description: t(
          "Andefilet i chili-hvitløkssaus med grønnsaker",
          "Duck filet in chili-garlic sauce with vegetables"
        ),
        priceNok: 269,
      },
      {
        code: "42",
        name: t("Vịt Với Cam m/ris", "Vịt Với Cam w/ rice"),
        description: t(
          "Andefilet i appelsinsaus med pickles",
          "Duck filet in orange sauce with pickles"
        ),
        priceNok: 269,
      },
      {
        code: "43",
        name: t("Vịt Cuốn Bánh Tráng", "Vịt Cuốn Bánh Tráng"),
        description: t(
          "Sprø and med hoisinsaus, peanøtter og pannekaker",
          "Crispy duck with hoisin sauce, peanuts and pancakes"
        ),
        priceNok: 279,
      },
      {
        code: "45",
        name: t(
          "Lammefilet i husets spesialsaus m/ris",
          "Lamb filet in house special sauce w/ rice"
        ),
        description: t(
          "Lammefiletterninger i husets spesialsaus",
          "Lamb filet cubes in house special sauce"
        ),
        priceNok: 279,
      },
      {
        code: "46",
        name: t("Lammefilet i karrisaus m/ris", "Lamb filet in curry sauce w/ rice"),
        description: t(
          "Lammefilet i karri- og kokossaus",
          "Lamb filet in curry-coconut sauce"
        ),
        priceNok: 279,
      },
    ],
  },
  {
    id: "stekt-ris",
    title: t("Stekt ris", "Fried rice"),
    items: [
      {
        code: "50",
        name: t("Stekt ris m/kylling og egg", "Fried rice with chicken and egg"),
        description: t(
          "Stekt ris med kylling, egg og grønnsaker",
          "Fried rice with chicken, egg and vegetables"
        ),
        priceNok: 229,
      },
      {
        code: "51",
        name: t("Stekt ris m/scampi og egg", "Fried rice with shrimp and egg"),
        description: t(
          "Stekt ris med scampi, egg og grønnsaker",
          "Fried rice with shrimp, egg and vegetables"
        ),
        priceNok: 229,
      },
      {
        code: "52",
        name: t("Stekt ris m/svinekjøtt og egg", "Fried rice with pork and egg"),
        description: t(
          "Stekt ris med svinekjøtt, egg og grønnsaker",
          "Fried rice with pork, egg and vegetables"
        ),
        priceNok: 229,
      },
    ],
  },
  {
    id: "nudler",
    title: t("Stekte nudler", "Stir-fried noodles"),
    items: [
      {
        code: "55",
        name: t("Stekte eggnudler med biff", "Stir-fried egg noodles with beef"),
        description: t(
          "Eggnudler med biff og grønnsaker",
          "Egg noodles with beef and vegetables"
        ),
        priceNok: 229,
      },
      {
        code: "56",
        name: t("Stekte eggnudler med kylling", "Stir-fried egg noodles with chicken"),
        description: t(
          "Eggnudler med kylling og grønnsaker",
          "Egg noodles with chicken and vegetables"
        ),
        priceNok: 229,
      },
      {
        code: "57",
        name: t("Stekte eggnudler med scampi", "Stir-fried egg noodles with shrimp"),
        description: t(
          "Eggnudler med scampi og grønnsaker",
          "Egg noodles with shrimp and vegetables"
        ),
        priceNok: 229,
      },
      {
        code: "58",
        name: t("Mix stekte risnudler", "Mixed stir-fried rice noodles"),
        description: t(
          "Risnudler med biff, kylling og svinekjøtt",
          "Rice noodles with beef, chicken and pork"
        ),
        priceNok: 239,
      },
      {
        code: "59",
        name: t("Stekte risnudler m/scampi", "Stir-fried rice noodles with shrimp"),
        description: t(
          "Risnudler med scampi og grønnsaker",
          "Rice noodles with shrimp and vegetables"
        ),
        priceNok: 229,
      },
      {
        code: "60",
        name: t("Stekte eggnudler med and", "Stir-fried egg noodles with duck"),
        description: t(
          "Eggnudler med and og grønnsaker",
          "Egg noodles with duck and vegetables"
        ),
        priceNok: 269,
      },
    ],
  },
  {
    id: "vegetar",
    title: t("Vegetar", "Vegetarian"),
    items: [
      {
        code: "201",
        name: t("Vegetar vårruller", "Vegetarian spring rolls"),
        description: t("Vårruller med tofu", "Spring rolls with tofu"),
        priceNok: 89,
      },
      {
        code: "202",
        name: t("Vegetar m/tofu", "Vegetarian with tofu"),
        description: t(
          "Wokket tofu med grønnsaker, servert med ris",
          "Wok-fried tofu with vegetables, served with rice"
        ),
        priceNok: 219,
      },
      {
        code: "203",
        name: t("Vegetar eggnudler m/tofu", "Vegetarian egg noodles with tofu"),
        description: t(
          "Eggnudler med tofu og grønnsaker",
          "Egg noodles with tofu and vegetables"
        ),
        priceNok: 219,
      },
    ],
  },
  {
    id: "barn",
    title: t("Barneretter", "Children's menu"),
    items: [
      {
        code: "01",
        name: t("Pølse og pommes frites", "Hot dog and fries"),
        description: t("", ""),
        priceNok: 99,
      },
      {
        code: "02",
        name: t("Kyllingnuggets og pommes frites", "Chicken nuggets and fries"),
        description: t("", ""),
        priceNok: 99,
      },
      {
        code: "03",
        name: t("Pannekaker", "Pancakes"),
        description: t("", ""),
        priceNok: 99,
      },
    ],
  },
];
