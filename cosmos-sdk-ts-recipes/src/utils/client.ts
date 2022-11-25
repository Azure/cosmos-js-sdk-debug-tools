import { CosmosClient, CosmosClientOptions } from "@azure/cosmos";
import { HttpsProxyAgent } from 'https-proxy-agent';

/**
 * Creates a CosmosClient which a proxy agent setup up. Useful in scenarios where you would
 * can to monitor traffic generating from client.
 * @param options 
 * @param proxyUrl - // i.e. http://127.0.0.1:8888
 */
function getProxiedClient(options: CosmosClientOptions, proxyUrl: string): CosmosClient {
    return new CosmosClient({ 
        ...options,
        agent: new HttpsProxyAgent(proxyUrl)
    }
}