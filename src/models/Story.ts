import { Schema, model, models } from "mongoose";

const StorySchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "stories",
  }
);

export const Story = models.Story || model("Story", StorySchema);
