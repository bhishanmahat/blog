import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import banner from "./schemas/banner";
import mustRead from "./schemas/mustRead";
import topPicks from "./schemas/topPicks";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, banner, mustRead, topPicks],
};
