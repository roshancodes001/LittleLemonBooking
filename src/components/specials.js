const specials = [
  {
    title: "Greek Salad",
    price: "$8.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, and olives, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/greek salad.png"),
  },
  {
    title: "Bruschetta",
    price: "$6.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../images/Bruschetta2.png"),
  },
  {
    title: "Lemon Special",
    price: "$4.99",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be.",
    getImageSrc: () => require("../images/lemon dessert.png"),
  }
];

export default specials;