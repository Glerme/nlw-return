import bugImageUrl from "../assets/bug.svg";
import ideiaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";

export const feedbackTypes = {
    Bug: {
      title: "Problema",
      image: {
        source: bugImageUrl,
        alt: "Imagem de um inseto",
      },
    },
    Idea: {
      title: "Ideia",
      image: {
        source: ideiaImageUrl,
        alt: "Imagem de uma lâmpada",
      },
    },
    Other: {
      title: "Outro",
      image: {
        source: thoughtImageUrl,
        alt: "Imagem de um balão de pensamento",
      },
    },
  };
  