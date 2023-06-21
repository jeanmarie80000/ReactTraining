import { plantList } from "../data/plantList";


function ShoppingList() {

    const categories = plantList.reduce(
            (acc, plant) =>
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
            )

    return (
        <div>
            {categories.map((cat) => (
                <h3 key={cat}>{cat}</h3>
            ))}

            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;