export const copyToClipboard = (
  text: string,
  onSuccess: () => void,
  onError: (error: Error) => void
): void => {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(onSuccess)
        .catch(onError);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          onSuccess();
        } else {
          onError(new Error('Failed to copy text'));
        }
      } catch (err) {
        onError(err instanceof Error ? err : new Error('Unknown error during copy'));
      }
      
      document.body.removeChild(textArea);
    }
  } catch (err) {
    onError(err instanceof Error ? err : new Error('Unknown error'));
  }
}; 