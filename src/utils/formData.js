export const AddBeerForm = [
  {
    name: "title",
    type: "text",
    labelText: "Beer Title",
    required: true,
    minLength: 3,
    maxLength: 15,
    placeholder: "Beer Title",
  },

  {
    name: "style",
    type: "dropdown",
    labelText: "Style",
    required: true,
  },
  {
    name: "image",
    type: "text",
    labelText: "Image",
    required: true,
    minLength: 4,
    placeholder: "http://....",
  },
  {
    name: "alcohol",
    type: "text",
    labelText: "Alcohol",
    required: true,
    minLength: 4,
    maxLength: 10,
    placeholder: "Medium",
  },

  {
    name: "IBU",
    type: "number",
    labelText: "IBU",
    required: true,
    minLength: 2,
    maxLength: 3,
    placeholder: "55",
  },
];
export const ChangeQuantityForm = [
  {
    name: "beerId",
    type: "dropdown",
    labelText: "Beer Title",
    required: true,
  },
  {
    name: "quantityChange",
    type: "number",
    labelText: "Quantity",
    required: true,
    minLength: 1,
    maxLength: 4,
    placeholder: "1",
  },
];
