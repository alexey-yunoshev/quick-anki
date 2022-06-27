import { BasicAddNoteParams } from "../anki/addNote";
import { MessageType, AddNoteMessage } from "../messages";

export function makeAddToAnkiButton(
    params: BasicAddNoteParams,
    classes: string[] = [],
): HTMLButtonElement {
    const ankiButton = document.createElement("button");
    ankiButton.innerHTML = "Anki";
    ankiButton.title = "Add note to Anki";
    ankiButton.classList.add("copy-button", ...classes);
    ankiButton.addEventListener("click", () => {
        chrome.runtime.sendMessage({
            payload: params,
            type: MessageType.addNote,
        } as AddNoteMessage);
    });

    return ankiButton;
}
