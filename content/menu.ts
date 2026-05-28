// DRAFT — extracted from Wolt on 2026-05-28. Prices and Vietnamese spellings to be verified with the restaurant.

export type MenuItem = {
  code: string;
  name: string;
  description: string;
  priceNok: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "forretter",
    title: "Forretter",
    items: [
      { code: "05", name: "Vårruller med svinekjøtt", description: "2 vårruller med svinekjøtt", priceNok: 89 },
      { code: "06", name: "Wonton suppe", description: "Pasta, svinekjøtt og scampi i kyllingbuljong", priceNok: 99 },
      { code: "07", name: "Innbakt scampi", description: "2 innbakte scampi med sursøt saus", priceNok: 89 },
      { code: "08", name: "Vyda suppe", description: "Suppe med kylling, scampi og egg", priceNok: 99 },
    ],
  },
  {
    id: "tradisjon",
    title: "Vietnamesiske tradisjonsretter",
    items: [
      { code: "10", name: "Bún Bò Huế", description: "Risnudler, biff, svin, bologna og friske urter", priceNok: 239 },
      { code: "11", name: "Phở Bò", description: "Risnudelsuppe med biff og friske urter", priceNok: 239 },
      { code: "12", name: "Phở Tôm", description: "Risnudelsuppe med scampi og friske urter", priceNok: 239 },
      { code: "13", name: "Bánh Xèo", description: "Pannekaker med scampi, svinekjøtt og friske urter", priceNok: 239 },
      { code: "14", name: "Nem Nướng", description: "Grillet svinekjøtt, rispapir og friske urter", priceNok: 239 },
      { code: "15", name: "BBQ Heo Nướng", description: "Grillede ribber med salat og ris", priceNok: 239 },
      { code: "16", name: "Bún Chả Thịt Nướng", description: "Risnudler, vårruller, sprø løk og grillet svinekjøtt", priceNok: 239 },
      { code: "17", name: "Bún Bò Nướng", description: "Risnudler, grillet biff, friske urter og peanøtter", priceNok: 239 },
      { code: "18", name: "Bánh Hỏi Bò", description: "Risvermicelli, biff, salat og pickles", priceNok: 239 },
      { code: "19", name: "Bánh Hỏi Thịt Heo Quay", description: "Risvermicelli, grillede ribber og salat", priceNok: 239 },
      { code: "21", name: "Vyda Bò Lúc Lắc", description: "Biffterninger i varm panne med grønnsaker, servert med ris", priceNok: 259 },
    ],
  },
  {
    id: "wok",
    title: "Wokretter",
    items: [
      { code: "25", name: "Bò Xào Tiêu", description: "Biff i peppersaus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "26", name: "Bò Xào Dầu Hào", description: "Biff i østerssaus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "27", name: "Happy Family", description: "Biff, svin og kylling i husets spesialsaus, servert med ris", priceNok: 239 },
      { code: "28", name: "Heo Chua Ngọt", description: "Stekt svinekjøtt i sursøt saus, servert med ris", priceNok: 229 },
      { code: "29", name: "Heo Xào Sa Tế", description: "Svinekjøtt i satay-saus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "30", name: "Heo Xào Tiêu", description: "Svinekjøtt i peppersaus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "31", name: "Gà Xào Cà Ri", description: "Kylling i karrisaus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "32", name: "Gà Xào Tỏi Ớt", description: "Kylling i chili-hvitløkssaus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "33", name: "Gà Chiên Chua Ngọt", description: "Sprø kylling i sursøt saus, servert med ris", priceNok: 229 },
      { code: "35", name: "Tôm Xào Tỏi Ớt", description: "Scampi i chili-hvitløkssaus med grønnsaker, servert med ris", priceNok: 229 },
      { code: "36", name: "Tôm Chiên Bột", description: "Innbakt scampi i sursøt saus, servert med ris", priceNok: 229 },
    ],
  },
  {
    id: "and-lam",
    title: "And og lam",
    items: [
      { code: "40", name: "Vịt Xào Đặc Biệt m/ris", description: "Andefilet i husets spesialsaus med grønnsaker", priceNok: 269 },
      { code: "41", name: "Vịt Xào Tỏi Ớt m/ris", description: "Andefilet i chili-hvitløkssaus med grønnsaker", priceNok: 269 },
      { code: "42", name: "Vịt Với Cam m/ris", description: "Andefilet i appelsinsaus med pickles", priceNok: 269 },
      { code: "43", name: "Vịt Cuốn Bánh Tráng", description: "Sprø and med hoisinsaus, peanøtter og pannekaker", priceNok: 279 },
      { code: "45", name: "Lammefilet i husets spesialsaus m/ris", description: "Lammefiletterninger i husets spesialsaus", priceNok: 279 },
      { code: "46", name: "Lammefilet i karrisaus m/ris", description: "Lammefilet i karri- og kokossaus", priceNok: 279 },
    ],
  },
  {
    id: "stekt-ris",
    title: "Stekt ris",
    items: [
      { code: "50", name: "Stekt ris m/kylling og egg", description: "Stekt ris med kylling, egg og grønnsaker", priceNok: 229 },
      { code: "51", name: "Stekt ris m/scampi og egg", description: "Stekt ris med scampi, egg og grønnsaker", priceNok: 229 },
      { code: "52", name: "Stekt ris m/svinekjøtt og egg", description: "Stekt ris med svinekjøtt, egg og grønnsaker", priceNok: 229 },
    ],
  },
  {
    id: "nudler",
    title: "Stekte nudler",
    items: [
      { code: "55", name: "Stekte eggnudler med biff", description: "Eggnudler med biff og grønnsaker", priceNok: 229 },
      { code: "56", name: "Stekte eggnudler med kylling", description: "Eggnudler med kylling og grønnsaker", priceNok: 229 },
      { code: "57", name: "Stekte eggnudler med scampi", description: "Eggnudler med scampi og grønnsaker", priceNok: 229 },
      { code: "58", name: "Mix stekte risnudler", description: "Risnudler med biff, kylling og svinekjøtt", priceNok: 239 },
      { code: "59", name: "Stekte risnudler m/scampi", description: "Risnudler med scampi og grønnsaker", priceNok: 229 },
      { code: "60", name: "Stekte eggnudler med and", description: "Eggnudler med and og grønnsaker", priceNok: 269 },
    ],
  },
  {
    id: "vegetar",
    title: "Vegetar",
    items: [
      { code: "201", name: "Vegetar vårruller", description: "Vårruller med tofu", priceNok: 89 },
      { code: "202", name: "Vegetar m/tofu", description: "Wokket tofu med grønnsaker, servert med ris", priceNok: 219 },
      { code: "203", name: "Vegetar eggnudler m/tofu", description: "Eggnudler med tofu og grønnsaker", priceNok: 219 },
    ],
  },
  {
    id: "barn",
    title: "Barneretter",
    items: [
      { code: "01", name: "Pølse og pommes frites", description: "", priceNok: 99 },
      { code: "02", name: "Kyllingnuggets og pommes frites", description: "", priceNok: 99 },
      { code: "03", name: "Pannekaker", description: "", priceNok: 99 },
    ],
  },
];
