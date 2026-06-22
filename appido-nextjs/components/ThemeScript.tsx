// Runs before React hydration to set the theme with no flash of the wrong colours.
// Default is "light" — identical to the preview's initial state.
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('appido-theme');if(t!=='dark'&&t!=='light'){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
