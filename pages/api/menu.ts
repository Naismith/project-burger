import { Menu } from "../../types/index";
import { menuItems } from "./__fixtures__";

export default function handler(req, res) {
  const response: Menu = {
    sections: [
      { name: "Wraps and Sandwiches", items: menuItems.wraps },
      { name: "Mains", items: menuItems.mains },
    ],
  };

  res.status(200).json(response);
}
