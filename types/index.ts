export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type Menu = {
  items: MenuItem[];
};
