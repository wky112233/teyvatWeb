interface CharacterCardProps {
    Name: string;
    location: string;
    Birthday: string;
    Title: string;
    Vision: string;
    Version_Released: string;
    Constellation: string;
    Affiliation: string;
    Region: string;
}
interface EnemyCardProps {
    name: string;
    position: string;
}

interface WildlifeCardProps {
    name: string;
    position: string;
}

interface FoodCardProps {
    name: string;
    position: string;
}

interface MaterialCardProps {
    name: string;
    position: string;
}


interface CheckBoxSelectProps {
    selectSize?: 'small' | 'medium';
    items: string[];
    onSelect?: (item: string) => void;
}