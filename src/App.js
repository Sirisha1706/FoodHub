import {useState, useEffect} from 'react';
import NavBar from './Components/NavBar';
import MealsList from './Components/MealsList';
import MealDetails from './Components/MealsDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState(null)
  const [itemId, setItemId] = useState()
  const [click, setClick] = useState(false)
  const [meal, setMeal] = useState('');
  
  const handleSearch = (value)=>{
      setSearchTerm(value);
      setClick(false)
  }

  useEffect(()=>{
    if(itemId){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
            .then((res)=> {
                if(!res.ok) throw new Error('Meal Details not found')
                    return res.json();
                })
            .then((data)=> setMeal(data.meals[0]))
        .catch((err)=> alert(err))
    }
},[itemId])

  useEffect(()=>{
    if(searchTerm){
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
          .then((res)=>{
            if(!res.ok) throw new Error('failed to fetch meals')
            return res.json();
          })
          .then((data)=>{
            if(data.meals != null){
              setMeals(data.meals)
            }
            else alert('Meals not found')
            setLoading(false)
          })
          .catch((err)=> alert(err))
    }
  }, [searchTerm]);

  const handleClick=(id)=>{
      setItemId(id);
      setClick(true)
  }

  return (
    <div className="App">
      <NavBar handleSearch={handleSearch}/>
      {loading && <h1>loading.....</h1>}
      {meals !== null && !click && <MealsList meals={meals} clickHandle={handleClick}/>}
      {meals === null && <img className='homeImg' src='https://homefoodi.com/wp-content/uploads/2023/04/indian-ethnic-food-buffet-white-concrete-table-from.jpg' alt='home'/>}
      {click && <MealDetails meal={meal}/>}
    </div>
  );
}

export default App;
