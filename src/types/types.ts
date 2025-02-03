export type NookipediaVillager = {
  url: string;
  name: string;
  alt_name: string;
  title_color: string;
  text_color: string;
  id: string;
  image_url: string;
  species: string;
  personality: string;
  gender: string;
  birthday_month: string;
  birthday_day: string;
  sign: string;
  quote: string;
  phrase: string;
  prev_phrases: string[];
  clothing: string;
  islander: boolean;
  debut: string;
  appearances: string[];
  nh_details: {
    image_url: string;
    photo_url: string;
    icon_url: string;
    quote: string;
    "sub-personality": string;
    catchphrase: string;
    clothing: string;
    clothing_variation: string;
    fav_styles: string[];
    fav_colors: string[];
    hobby: string;
    house_interior_url: string;
    house_exterior_url: string;
    house_wallpaper: string;
    house_flooring: string;
    house_music: string;
    house_music_note: string;
    umbrella: string;
  };
};

export type NookipediaCreature = {
  url: string;
  name: string;
  number: number;
  image_url: string;
  render_url: string;
  location: string;
  rarity: string;
  total_catch: number;
  sell_nook: number;
  tank_width: number;
  tank_length: number;
  catchphrases: string[];
};

export type NookipediaFish = NookipediaCreature & {
  shadow_size: string;
  sell_cj: number;
};

export type NookipediaBugs = NookipediaCreature & {
  weather: string;
  sell_flick: number;
};

// Type for sortable fields (buttons)
export type SortableField =
  | "name-asc"
  | "name-desc"
  | "species-asc"
  | "species-desc"
  | "personality-asc"
  | "personality-desc"
  | "gender-asc"
  | "gender-desc"
  | "birthday-asc"
  | "birthday-desc";

/* export type NookipediaFish = {
  url: string;
  name: string;
  number: number;
  image_url: string;
  render_url: string;
  location: string;
  shadow_size: string;
  rarity: string;
  total_catch: number;
  sell_nook: number;
  sell_cj: number;
  tank_width: number;
  tank_length: number;
  catchphrases: string[];
};

export type NookipediaBugs = {
  url: string;
  name: string;
  number: number;
  image_url: string;
  render_url: string;
  location: string;
  weather: string;
  rarity: string;
  total_catch: number;
  sell_nook: number;
  sell_flick: number;
  tank_width: number;
  tank_length: number;
  catchphrases: string[];
}; */
