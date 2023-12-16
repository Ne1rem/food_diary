const RecommendedFood = () => {
  const foodItems = [
    {
      id: 1,
      icon: 'icon-url-1',
      name: 'Avocado',
      measure: '100 g',
      calories: '200 calories',
    },
    {
      id: 2,
      icon: 'icon-url-2',
      name: 'Beans',
      measure: '100 g',
      calories: '123 calories',
    },
    {
      id: 3,
      icon: 'icon-url-3',
      name: 'Nuts',
      measure: '100 g',
      calories: '500 calories',
    },
    {
      id: 4,
      icon: 'icon-url-3',
      name: 'Broccoli',
      measure: '100 g',
      calories: '28 calories',
    },
  ];

  return (
    <div className="recommended-food">
      <h2>Recommended Food</h2>
      <div className="food-cards">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.icon} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.measure}</p>
            <p>{item.calories}</p>
          </div>
        ))}
      </div>
      <a href="/recommended-food" className="see-more-button">
        See more
      </a>
    </div>
  );
};

export default RecommendedFood;
