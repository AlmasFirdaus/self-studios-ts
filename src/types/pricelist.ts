export type selected = {
  title: string;
  price_selected: number;
};

export type options = {
  name: string;
  selected: selected[];
};

export type pricelist = {
  heading: string;
  rules?: string[];
  options?: options[];
  price?: number;
};
