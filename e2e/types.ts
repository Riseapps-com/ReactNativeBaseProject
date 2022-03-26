export type BaseOptions = { shouldRebuildApp: boolean };

export type IOSOptions = BaseOptions & { shouldOpenSimulator: boolean };

export type AndroidOptions = BaseOptions;

export type Platform = 'ios' | 'android';

export type MenuItemContent = {
  id: string;
  image: string;
  text: string;
};

export type ListItemContent = {
  image: string;
  title: string;
  subtitle: string;
};
