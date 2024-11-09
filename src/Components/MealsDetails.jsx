
import style from './mealDetails.module.css';

const MealDetails = ({meal})=>{
    console.log(meal)
    return(
        <div>
            <h1>Meal Details:</h1>
            <div className={style.details}>
                <div className={style.header}>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                    <div>
                        <h2>{meal.strMeal}</h2>
                        <br/>
                        <h3>{meal.strCategory} ----- {meal.strArea}</h3>
                        <br/>
                        <h4>Ingredients:</h4>
                        <ul>
                            <li>{meal.strIngredient1}</li>
                            <li>{meal.strIngredient2}</li>
                            <li>{meal.strIngredient3}</li>
                            <li>{meal.strIngredient4}</li>
                            <li>{meal.strIngredient5}</li>
                            <li>{meal.strIngredient6}</li>
                            <li>{meal.strIngredient7}</li>
                            <li>{meal.strIngredient8}</li>
                            <li>{meal.strIngredient9}</li>
                            <li>{meal.strIngredient10}</li>
                            <li>{meal.strIngredient11}</li>
                            <li>{meal.strIngredient12}</li>
                            <li>{meal.strIngredient13}</li>
                            <li>{meal.strIngredient14}</li>
                            <li>{meal.strIngredient15}</li>
                            <li>{meal.strIngredient16}</li>
                            <li>{meal.strIngredient17}</li>
                            <li>{meal.strIngredient18}</li>
                            <li>{meal.strIngredient19}</li>
                            <li>{meal.strIngredient20}</li>
                        </ul>
                    </div>
                </div>
                <h3>Instructions:</h3>
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
}

export default MealDetails;