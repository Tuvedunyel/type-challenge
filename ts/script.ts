// import Alpine from "alpinejs";

// Alpine.data("myComponent", function (initial: number = 0) {
//   return {
//     compteur: initial,
//     increment() {
//       this.compteur += 1;
//     },
//     decrement() {
//       this.compteur -= 1;
//       if (this.compteur > 0) {
//         (this.$el as HTMLSpanElement).style.display = "none";
//       }
//     },
//   };
// });
// Alpine.start();

type HTMLAttributes = {
  img: {
    alt: string;
  };
  input: {
    type?: "text" | "number";
    name: string;
  };
};

type HTMLNode<TagName extends keyof HTMLAttributes> = {
  tagName: TagName;
  class?: string;
  id?: number;
  attributes?: HTMLAttributes[TagName];
};

type HTMLShape = HTMLNode<"input"> | HTMLNode<"img">;

const img: HTMLShape = {
  tagName: "img",
  class: ".demo",
  attributes: {
    alt: "demo",
  },
};

const input: HTMLShape = {
  tagName: "input",
  attributes: {
    name: "demo",
    type: "text",
  },
};
