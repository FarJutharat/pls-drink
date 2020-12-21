import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: "history",
      columns: [
        { name: "DMY_at", type: "number" },
        { name: "water", type: "number" },
      ]
    }),
   ]
});