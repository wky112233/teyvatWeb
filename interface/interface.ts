interface Character {
  character_name: string;
  birthday_month: number;
  birthday_date: number;
  title: number;
  vision: string;
  constellation: string;
  avatar_img: string;
  avatar_icon_img: string;
  namecard_img: string;
  affiliation_id: number;
  special_food_id: number;
}

interface Affiliation {
  affiliation_id: number;
  affiliation: string;
  nation: string;
}

interface LivingBeing {
  living_being_name: string;
  living_being_description: string;
  living_being_icon_img: string;
}

interface Food {
  food_id: number;
  food_name: string;
  food_utility: string;
  food_description: string;
  food_icon_img: string;
}

interface Material {
  material_name: string;
  material_description: string;
  material_icon_img: string;
}
