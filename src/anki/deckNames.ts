import { invokeAction } from "./invokeAction";
import { ActionType } from "./actions";

export function deckNames() {
    return invokeAction({
        action: ActionType.DeckNames,
    });
}
