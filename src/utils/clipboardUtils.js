/**
 * Copies text to clipboard with error handling
 * @param {string} text - Text to copy to clipboard
 * @param {Function} onSuccess - Callback function on success
 * @param {Function} onError - Callback function on error
 * @returns {Promise<void>}
 */
export const copyToClipboard = async (text, onSuccess, onError) => {
  try {
    if (!navigator.clipboard) {
      // Fallback for browsers without clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (!successful) throw new Error('Copy command failed');
        onSuccess && onSuccess();
      } catch (err) {
        onError && onError(new Error('Failed to use document.execCommand'));
      }
      
      document.body.removeChild(textArea);
      return;
    }
    
    // Modern clipboard API
    await navigator.clipboard.writeText(text);
    onSuccess && onSuccess();
  } catch (err) {
    console.error('Failed to copy:', err);
    onError && onError(err.message ? err : new Error('Unknown clipboard error'));
  }
}; 