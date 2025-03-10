// Assuming you're using Docussaurus v2 or v3 (the process is similar)

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useEffect, useState } from 'react';

function FontToggle() {
    const { siteConfig } = useDocusaurusContext();
    const [useCustomFont, setUseCustomFont] = useState(false);

    useEffect(() => {
        const storedFontPreference = localStorage.getItem('customFontEnabled');
        if (storedFontPreference) {
            setUseCustomFont(storedFontPreference === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('customFontEnabled', useCustomFont);
        const root = document.documentElement;
        const sidebarContainer = document.querySelector('html .theme-doc-sidebar-container');

        if (useCustomFont) {
            // Apply your custom font here. Replace with your actual font settings.
            root.style.setProperty('--ifm-font-family-base', 'Verdana, sans-serif');
            root.style.setProperty('--ifm-heading-font-family', 'Verdana, sans-serif');
            if(sidebarContainer){
                sidebarContainer.style.setProperty('font-family', 'Verdana, sans-serif');
            }
        } else {
            // Reset to default Docusaurus font.
            root.style.setProperty('--ifm-font-family-base', 'Neue Plak Text');
            root.style.setProperty('--ifm-heading-font-family', 'Neue Plak Bold');
            if(sidebarContainer){
                sidebarContainer.style.setProperty('font-family', 'Neue Plak Bold');
            }

        }
    }, [useCustomFont]);

    return (
        <div class="footer-toggle-area">
            <div class="toggle-container" title="Switches to Verdana for better readability for dyslexic users.">
                <label htmlFor="customFontToggle">Use Dyslexic Friendly Font:</label>
                <div class="checkbox-wrapper-2">
                    <input
                        id="customFontToggle"
                        type="checkbox"
                        checked={useCustomFont}
                        onChange={(e) => setUseCustomFont(e.target.checked)}
                        class="ikxBAC"
                    />
                </div>
            </div>
        </div>
    );
}

export default FontToggle;