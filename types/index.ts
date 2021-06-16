export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type MenuSection = {
  name: string;
  items: MenuItem[];
};

export type Menu = {
  sections: MenuSection[];
};

export type MenuBoard = {
  name: string;
  boards: Menu[];
};
