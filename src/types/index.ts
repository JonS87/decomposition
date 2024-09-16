export interface WeatherItem {
  image: string;
  currentWeather: string;
  morningWeather: string;
  dayWeather: string;
}

export interface VisitItem {
  item: string;
  detail: string;
}
export interface ProgramItem {
  time: string;
  name: string;
  channel: string;
}

export interface AirItem {
  startButton: string;
  name: string;
  wave: string;
}

export interface SectionProps {
  title: string;
  items: (string | WeatherItem | VisitItem | ProgramItem | AirItem)[];
  selected?: boolean;
}

export interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}

export interface CurrencyRateProps {
  currency: string;
  rate: number;
  change: number;
}

export interface BannerProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}
