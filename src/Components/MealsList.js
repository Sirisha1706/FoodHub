
import styles from './meals.module.css';

const MealsList = (props)=>{
    const {meals, clickHandle} = props;

    return(
        <div className={styles.mealsLists}>
        {meals? 
            meals.map((meal, index)=>{
                return <Meals meal={meal} key={index} clickHandle={clickHandle}></Meals>
            }):
            alert('Meals not Found')
        }
        
        </div>
    );
}

export default MealsList;

const Meals = ({meal, clickHandle})=>{
    return (
        <div className={styles.meals}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h4>{meal.strMeal}</h4>
            <button className={styles.button} onClick={()=>{clickHandle(meal.idMeal)}}>Details</button>
        </div>
    );
}