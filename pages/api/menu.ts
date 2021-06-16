import { Menu } from "../../types/index";
import { menuItems } from "./__fixtures__";

export default function handler(req, res) {
  const response: Menu = {
    items: menuItems,
  };

  res.status(200).json(response);
}
