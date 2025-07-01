export default function Main(props) {
  return (
    <main>
      <section className="prep-container">
        <p className="prep-time">Preparation time</p>

        <ul className="preparation-list">
          <li>
            <span>Total:</span> {props.total}
          </li>
          <li>
            <span>Preparation:</span> {props.preparation}
          </li>
          <li>
            <span>Cooking:</span> {props.cooking}
          </li>
        </ul>
      </section>

      <p className="ingredients">Ingredients</p>

      <ul className="ingredients-list">
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>

      <hr />

      <p className="instructions">Instructions</p>

      <ol className="instructions-list">
        <li
          className="instructions-item
        "
        >
          <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of
          salt and pepper until they are well mixed. You can add a tablespoon of
          water or milk for a fluffier texture.
        </li>

        <li
          className="instructions-item
        "
        >
          <span>Heat the pan:</span> Place a non-stick frying pan over medium
          heat and add butter or oil.
        </li>

        <li
          className="instructions-item
        "
        >
          <span>Cook the omelette:</span> Once the butter is melted and
          bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
          coat the surface.
        </li>

        <li
          className="instructions-item
        "
        >
          <span>Add fillings (optional):</span> When the eggs begin to set at
          the edges but are still slightly runny in the middle, sprinkle your
          chosen fillings over one half of the omelette.
        </li>

        <li
          className="instructions-item
        "
        >
          <span>Fold and serve:</span> As the omelette continues to cook,
          carefully lift one edge and fold it over the fillings. Let it cook for
          another minute, then slide it onto a plate.
        </li>

        <li
          className="instructions-item
        "
        >
          <span>Enjoy:</span> Serve hot, with additional salt and pepper if
          needed.
        </li>
      </ol>

      <hr />
    </main>
  );
}
