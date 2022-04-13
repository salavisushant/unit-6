import { useState } from 'react';
import { MealList } from './components/MealList'
import { Button } from 'antd';
import "./App.css"

function App() {
   const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChange(e) {
    setCalories(e.target.value)
  }
  return (
    <div className="App">
        <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <Button  type="primary" onClick={getMealData}>Get Daily Meal Plan</Button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;
