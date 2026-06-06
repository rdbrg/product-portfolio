"use client";

import { useEffect, useState } from "react";

const flowEmoji = ["🧩", "🚀", "⚙️", "🔍", "🧠", "🛠️", "📐", "🎯"];
const metricsEmoji = ["📈", "🏆", "✨", "💼", "📊", "✅", "🔁", "💡"];
const teamEmoji = ["🤝", "🚀", "✨", "🎯", "💡", "🔥", "⭐", "🧠"];

type RandomEmojiSetProps = {
  seed: "flow" | "metrics" | "team";
};

const emojiSets: Record<RandomEmojiSetProps["seed"], string[]> = {
  flow: flowEmoji,
  metrics: metricsEmoji,
  team: teamEmoji,
};

export function RandomEmojiSet({ seed }: RandomEmojiSetProps) {
  const emoji = emojiSets[seed];
  const [currentEmoji, setCurrentEmoji] = useState(emoji[0]);

  useEffect(() => {
    const source = emojiSets[seed];
    const randomIndex = Math.floor(Math.random() * source.length);
    setCurrentEmoji(source[randomIndex]);
  }, [seed]);

  return <span aria-hidden="true"> {currentEmoji}</span>;
}
