import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Every day we offer you four new famouse street food recipes from all over
        the world, our meals are cooked with high-quality ingredients, just in time.       
      </p>
      <p>You can check today offer right under</p>
    </section>
  );
};

export default MealsSummary;
