import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type NewsLetterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class NewsLetter {
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NewsLetter, NewsLetterMetaData>);
  static copyOf(source: NewsLetter, mutator: (draft: MutableModel<NewsLetter, NewsLetterMetaData>) => MutableModel<NewsLetter, NewsLetterMetaData> | void): NewsLetter;
}