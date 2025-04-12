import html2canvas from 'html2canvas';

/**
 * Exports a DOM element as a PNG image
 * @param {HTMLElement} element - The DOM element to export
 * @param {string} fileName - The filename for the downloaded image
 * @param {Object} options - Additional options
 * @returns {Promise<void>}
 */
export const exportElementAsPNG = async (element, fileName = 'export', options = {}) => {
  if (!element) return;
  
  try {
    const defaultOptions = {
      scale: 2,
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true
    };
    
    const canvas = await html2canvas(element, {
      ...defaultOptions,
      ...options
    });
    
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${fileName}.png`;
    link.click();
  } catch (err) {
    console.error('Error exporting image:', err);
  }
};

/**
 * Exports a text ad as a PNG image with proper styling
 * @param {HTMLElement} element - The DOM element containing the ad
 * @param {string} fileName - The filename for the downloaded image
 * @param {number} index - Index of the ad (for badge styling)
 * @returns {Promise<void>}
 */
export const exportTextAdAsPNG = async (element, fileName = 'text-ad', index = 0) => {
  if (!element) return;
  
  try {
    // Create a complete standalone container
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '480px';
    container.style.backgroundColor = 'white';
    container.style.borderRadius = '8px';
    container.style.padding = '16px';
    container.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
    document.body.appendChild(container);
    
    // Extract content from the original element
    const headline = element.querySelector('h3').innerText;
    const description = element.querySelector('p').innerText;
    const ctaText = element.querySelector('button').innerText.trim();
    
    // Create a fresh DOM structure
    const content = document.createElement('div');
    content.style.position = 'relative';
    content.style.width = '100%';
    content.style.padding = '0';
    
    // Badge styling
    const badgeType = index === 0 ? 'Best Match' : 'Alternative';
    const badgeColor = index === 0 ? '#EBF5FF' : '#DCF5E6';
    const badgeTextColor = index === 0 ? '#1E40AF' : '#166534';
    const badgeIconColor = index === 0 ? '#3B82F6' : '#22C55E';
    
    const badgeContainer = document.createElement('div');
    badgeContainer.style.position = 'absolute';
    badgeContainer.style.top = '0px';
    badgeContainer.style.right = '0px';
    badgeContainer.style.zIndex = '10';
    
    const badge = document.createElement('div');
    badge.style.display = 'inline-flex';
    badge.style.alignItems = 'center';
    badge.style.backgroundColor = badgeColor;
    badge.style.color = badgeTextColor;
    badge.style.fontSize = '12px';
    badge.style.fontWeight = '500';
    badge.style.padding = '2px 8px';
    badge.style.borderRadius = '9999px';
    
    const iconText = document.createElement('span');
    iconText.style.marginRight = '4px';
    iconText.style.fontSize = '11px';
    iconText.style.color = badgeIconColor;
    iconText.innerHTML = index === 0 ? '★' : '◎';
    
    const badgeText = document.createTextNode(badgeType);
    
    badge.appendChild(iconText);
    badge.appendChild(badgeText);
    badgeContainer.appendChild(badge);
    content.appendChild(badgeContainer);
    
    // Title
    const titleContainer = document.createElement('div');
    titleContainer.style.paddingTop = '24px';
    titleContainer.style.marginBottom = '6px';
    
    const titleElement = document.createElement('h2');
    titleElement.style.fontSize = '18px';
    titleElement.style.fontWeight = 'bold';
    titleElement.style.color = '#1E40AF';
    titleElement.style.lineHeight = '1.25';
    titleElement.style.paddingRight = '100px';
    titleElement.textContent = headline;
    
    titleContainer.appendChild(titleElement);
    content.appendChild(titleContainer);
    
    // Description
    const descriptionElement = document.createElement('p');
    descriptionElement.style.fontSize = '14px';
    descriptionElement.style.color = '#4B5563';
    descriptionElement.style.lineHeight = '1.5';
    descriptionElement.style.marginBottom = '12px';
    descriptionElement.style.paddingRight = '10px';
    descriptionElement.textContent = description;
    content.appendChild(descriptionElement);
    
    // CTA Button
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '8px';
    buttonContainer.style.paddingTop = '8px';
    buttonContainer.style.borderTop = '1px solid #F3F4F6';
    
    const button = document.createElement('button');
    button.style.backgroundColor = '#16A34A';
    button.style.color = 'white';
    button.style.padding = '6px 12px';
    button.style.borderRadius = '4px';
    button.style.fontSize = '12px';
    button.style.fontWeight = '500';
    button.style.display = 'inline-flex';
    button.style.alignItems = 'center';
    
    const buttonIcon = document.createElement('span');
    buttonIcon.style.marginRight = '6px';
    buttonIcon.innerHTML = '⚡';
    
    button.appendChild(buttonIcon);
    button.appendChild(document.createTextNode(ctaText));
    buttonContainer.appendChild(button);
    content.appendChild(buttonContainer);
    
    container.appendChild(content);
    
    // Render with html2canvas
    const canvas = await html2canvas(container, {
      scale: 3,
      backgroundColor: 'white',
      logging: false,
      useCORS: true,
      allowTaint: true
    });
    
    // Clean up
    document.body.removeChild(container);
    
    // Download the image
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${fileName || 'text-ad'}.png`;
    link.click();
  } catch (err) {
    console.error('Error exporting image:', err);
  }
};

/**
 * Exports a banner as a PNG image
 * @param {HTMLElement} element - The DOM element containing the banner
 * @param {string} fileName - The filename for the downloaded image
 * @returns {Promise<void>}
 */
export const exportBannerAsPNG = async (element, fileName = 'banner') => {
  if (!element) return;
  
  try {
    // Create a full container for export
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '300px';
    container.style.height = '600px';
    container.style.zIndex = '-1000';
    
    // Get colors and content from original banner
    const banner = element.querySelector('div');
    if (!banner) return;
    
    // Clone the banner for base styles
    const clonedBanner = banner.cloneNode(true);
    
    // Extract text content and information
    const title = clonedBanner.querySelector('h2')?.textContent || '';
    const subtitle = clonedBanner.querySelector('p')?.textContent || '';
    const ctaButton = clonedBanner.querySelector('button');
    const ctaText = ctaButton?.textContent?.trim() || 'Learn More';
    
    // Find the button's color class - look for text-*-700 class
    let buttonColorClass = 'text-blue-700';
    if (ctaButton) {
      const classList = ctaButton.className.split(' ');
      const colorClass = classList.find(cls => cls.match(/text-\w+-700/));
      if (colorClass) buttonColorClass = colorClass;
    }
    
    // Helper to convert Tailwind color classes to CSS colors
    const getColorFromClass = (colorClass) => {
      const colorMap = {
        'text-blue-700': '#1d4ed8',
        'text-purple-700': '#7e22ce',
        'text-green-700': '#15803d',
        'text-teal-700': '#0f766e',
        'text-orange-700': '#c2410c',
        'text-amber-700': '#b45309',
        'text-red-700': '#b91c1c',
        'text-indigo-700': '#4338ca',
      };
      
      return colorMap[colorClass] || '#1d4ed8'; // Default to blue
    };
    
    // Re-build button with plain HTML/CSS
    const buttonElement = clonedBanner.querySelector('button');
    if (buttonElement) {
      const buttonParent = buttonElement.parentNode;
      
      // Create new button element with explicit styling
      const newButton = document.createElement('div');
      newButton.style.backgroundColor = 'white';
      newButton.style.color = getColorFromClass(buttonColorClass);
      newButton.style.padding = '12px 24px';
      newButton.style.borderRadius = '8px';
      newButton.style.fontWeight = '500';
      newButton.style.display = 'inline-flex';
      newButton.style.alignItems = 'center';
      newButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      
      // Text content
      const buttonTextSpan = document.createElement('span');
      buttonTextSpan.textContent = ctaText;
      
      // Arrow as Unicode character
      const arrowSpan = document.createElement('span');
      arrowSpan.textContent = ' →';
      arrowSpan.style.marginLeft = '8px';
      
      newButton.appendChild(buttonTextSpan);
      newButton.appendChild(arrowSpan);
      
      // Replace the original button
      if (buttonParent) {
        buttonParent.removeChild(buttonElement);
        buttonParent.appendChild(newButton);
      }
    }
    
    container.appendChild(clonedBanner);
    document.body.appendChild(container);
    
    // Use better settings for html2canvas
    const canvas = await html2canvas(container, {
      scale: 2,
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
      removeContainer: true, // Automatically remove the container
    });
    
    // Clean up
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
    
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${fileName || 'banner'}.png`;
    link.click();
  } catch (err) {
    console.error('Error exporting banner:', err);
  }
}; 