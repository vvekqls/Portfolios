import { DataAPIClient } from '@datastax/astra-db-ts';
import {
  AstraDBVectorStore,
} from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai"

const { ASTRA_DB_APPLICATION_TOKEN, ASTRA_DB_ENDPOINT, ASTRA_DB_COLLECTION } = process.env;

const endpoint = ASTRA_DB_ENDPOINT || "";
const token = ASTRA_DB_APPLICATION_TOKEN || "";
const collection = ASTRA_DB_COLLECTION || "";

if (!token || !endpoint || !collection) {
  throw new Error(
    "Please set ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, and ASTTRA_DB_COLLECTION"
  )
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: {
          dimension: 1536,
          metric: "cosine",
        },
      },
    },
  );
}

export async function getEmbeddingsCollection() {
  const client = new DataAPIClient(token);
  return client.db(endpoint).collection(collection);
}