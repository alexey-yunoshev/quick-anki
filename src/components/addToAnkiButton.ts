import { BasicAddNoteParams } from "../anki/addNote";
import { MessageType, AddNoteMessage } from "../messages";

export function makeAddToAnkiButton(
  params: Omit<BasicAddNoteParams, "deckName">,
  classes: string[] = [],
): HTMLButtonElement {
  const ankiButton = document.createElement("button");
  ankiButton.innerHTML = "Anki";
  ankiButton.title = "Add note to Anki";
  ankiButton.classList.add("button", ...classes);
  ankiButton.addEventListener("click", () => {

    const deckName = localStorage.getItem("quick_anki_deck");
    if (deckName === null) {
      return alert("Anki deck is not selected.");
    }

    return chrome.runtime.sendMessage({
      payload: {
        ...params,
        deckName,
      },
      type: MessageType.addNote,
    } as AddNoteMessage);
  });

  return ankiButton;
}
