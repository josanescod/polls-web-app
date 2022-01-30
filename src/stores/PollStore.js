import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Linux or BSD?",
    answerA: "Linux",
    answerB: "BSD",
    votesA: 15,
    votesB: 10,
  },
  {
    id: 2,
    question: "Rust or Go?",
    answerA: "Rust",
    answerB: "Go",
    votesA: 12,
    votesB: 15,
  },
]); //this create data store

export default PollStore;
