// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NewsLetter } = initSchema(schema);

export {
  NewsLetter
};