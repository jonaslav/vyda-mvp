// DRAFT — extracted from public sources (Tripadvisor, Wolt, RestaurantGuru) on 2026-05-28.
// Verify with the restaurant before publishing.

export const restaurant = {
  name: "VYDA Restaurant",
  tagline: "Vietnamesisk restaurant i Trondheim",
  cuisine: "Vietnamese",
  address: {
    street: "Magnus Berrføtts veg 4A",
    postalCode: "7046",
    city: "Trondheim",
    country: "Norway",
  },
  phone: "+47 73 90 20 00",
  email: "vydarestaurant@hotmail.com",
  hours: {
    monday: null,
    tuesday: "14:00–22:00",
    wednesday: "14:00–22:00",
    thursday: "14:00–22:00",
    friday: "14:00–22:00",
    saturday: "14:00–22:00",
    sunday: "14:00–22:00",
  } as Record<string, string | null>,
  features: [
    "Takeaway",
    "Søndagsbuffet",
    "Dine-in",
    "Rullestolvennlig",
    "Bordbestilling",
    "Kortbetaling",
  ],
  delivery: [
    { name: "Foodora", url: "https://www.foodora.no/en/restaurant/ndwr/vyda-restaurant" },
    { name: "Wolt", url: "https://wolt.com/en/nor/trondheim/restaurant/vyda-restaurant" },
  ],
  social: {
    facebook: "https://www.facebook.com/p/VYDA-Restaurant-100047316235844/",
  },
} as const;
