import { Container, PartitionKeyRange } from "@azure/cosmos";

/**
 * Get information about physical container.
 * @param container
 * @returns 
 */
export async function getPhysicalPartitions(container: Container): Promise<PartitionKeyRange[]> {
    const {resources: ranges} = await container.readPartitionKeyRanges().fetchAll();
    return ranges;
}