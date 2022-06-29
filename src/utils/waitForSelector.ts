export function waitForElement<ElementType extends Element>(selector: string): Promise<ElementType> {
  return new Promise((resolve) => {
    const element = document.querySelector<ElementType>(selector);
    if (element) {
      resolve(element);
    }

    const observer = new MutationObserver(() => {
      const mutatitionElement = document.querySelector<ElementType>(selector);
      if (mutatitionElement) {
        resolve(mutatitionElement);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}


export function waitForElements<ElementType extends Element>(selector: string): Promise<Array<ElementType>> {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll<ElementType>(selector);
    if (elements.length > 0) {
      resolve(Array.from(elements));
    }

    const observer = new MutationObserver(() => {
      const mutatitionElements = document.querySelectorAll<ElementType>(selector);
      if (mutatitionElements.length > 0) {
        resolve(Array.from(mutatitionElements));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
