/*
 * Loads a script to the DOM, used to workaround pyodide issues
 */

export function loadScript(url: string) {
  return new Promise((resolve) => {
    try {
      const document = globalThis?.document;
      if (!document) {
        console.error('Script not loaded. No DOM available');
        resolve(false);
        return;
      }
      const scriptTag = document.createElement('script');
      scriptTag.src = url;
      document.body.appendChild(scriptTag);
      scriptTag.onload = resolve;
    } catch (error) {
      console.error('Script not loaded.', error);
      resolve(false);
    }
  });
}
