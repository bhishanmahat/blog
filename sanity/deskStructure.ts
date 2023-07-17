import { StructureBuilder } from "sanity/desk";

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("Base")
    .items([

      S.listItem()
        .title("Banner")
        .child(S.document().schemaType("banner").documentId("banner")),
      S.divider(),

      S.listItem()
        .title("Top Picks")
        .child(S.document().schemaType("topPicks").documentId("topPicks")),
      S.divider(),

      S.listItem()
        .title("Must Read")
        .child(S.document().schemaType("mustRead").documentId("mustRead")),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["banner", "topPicks", "mustRead"].includes(listItem.getId()!)
      ),
    ]);
