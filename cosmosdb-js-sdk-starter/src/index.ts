import { CosmosClient } from "@azure/cosmos";

const endpoint = "<endpoint>";
const key = "<key>";
const client = new CosmosClient({ endpoint, key });

async function main(): Promise<void> {
    const { database } = await client.databases.createIfNotExists({ id: "Test Database" });
    console.log(database.id);
    const { container } = await database.containers.createIfNotExists({ id: "Test Container" });
    console.log(container.id);
    const cities = [
        { id: "1", name: "Olympia", state: "WA", isCapitol: true },
        { id: "2", name: "Redmond", state: "WA", isCapitol: false },
        { id: "3", name: "Chicago", state: "IL", isCapitol: false }
    ];
    for (const city of cities) {
        await container.items.create(city);
    }
}

main().catch((error) => {
    console.error(error);
});
