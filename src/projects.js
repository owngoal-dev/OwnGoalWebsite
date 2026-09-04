// Every release shown on the site, grouped by kind.
//
// Havoc packages get their icon from /public/icons/<slug>.png (fetched from
// the store); GitHub-only projects pass an explicit icon path, or null to
// render a lettermark placeholder.

function havocPackage(name, slug) {
  return {
    name,
    href: `https://havoc.app/package/${slug}`,
    source: 'Havoc',
    icon: `/icons/${slug}.png`,
  };
}

function githubRepo(name, icon = null) {
  return {
    name,
    href: `https://github.com/owngoal-dev/${name}`,
    source: 'GitHub',
    icon,
  };
}

// Projects with an icon come first, A–Z by lowercase name; icon-less ones
// trail in the same order.
function byIconThenName(a, b) {
  if (!!a.icon !== !!b.icon) return a.icon ? -1 : 1;
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
}

export const appProjects = [
  githubRepo('DayNightSwitch'),
  havocPackage('Letterpress', 'letterpress'),
  githubRepo('TrollNFC', '/icons/trollnfc.png'),
  havocPackage('TrollRecorder', 'trollrecorder'),
  havocPackage('TrollVNC', 'trollvnc'),
].sort(byIconThenName);

export const tweakProjects = [
  havocPackage('ColorfulWallpaperX', 'colorfulx'),
  havocPackage('IconRestore', 'iconrestore'),
  havocPackage('Kayoko', 'kayoko'),
  havocPackage('NoRedirect', 'noredirect'),
  havocPackage('OhMyInsets', 'ohmyinsets'),
  havocPackage('RemoveWidgetBackground', 'removewidgetbg'),
  githubRepo('Rose'),
  havocPackage('SingleMute', 'singlemute'),
  havocPackage('SingleVPN', 'singlevpn'),
  havocPackage('Touch-Viz', 'touchvis'),
  havocPackage('WriteNow', 'writenow'),
  githubRepo('WTVRBGLauncher'),
  havocPackage('XXTouchElite', 'xxtouchelite'),
].sort(byIconThenName);
