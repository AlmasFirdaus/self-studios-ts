export const pricelists = [
  {
    heading: 'Self Potrait Shoot',
    rules: ['Valid for 2 persons, unlimited shoots', '15 mins photo session, 10 mins photo selection', 'include 1 printed photo'],
    price: 80,
  },
  {
    heading: 'Additional Person',
    rules: ['Extra charge per person within a session'],
    price: 25,
  },
  {
    heading: 'Additional Print',
    options: [
      {
        name: 'Basic',
        selected: [
          {
            title: '1 printed photo',
            price_selected: 15,
          },
          {
            title: '2 printed photo',
            price_selected: 30,
          },
          {
            title: '3 printed photo',
            price_selected: 35,
          },
          {
            title: 'More than 3 photos',
            price_selected: 12,
          },
        ],
      },
      {
        name: 'Special Frame',
        selected: [
          {
            title: '1 printed photo',
            price_selected: 30,
          },
          {
            title: '2 printed photo',
            price_selected: 55,
          },
          {
            title: '3 printed photo',
            price_selected: 65,
          },
          {
            title: 'More than 3 photos',
            price_selected: 22,
          },
        ],
      },
    ],
  },
];
