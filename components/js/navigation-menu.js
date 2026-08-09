let closeTimeout = null;

const hidePopovers = container => {
  const root = container || document;
  const activePopovers = root.querySelectorAll('.nav-menu-content[popover]:popover-open');
  activePopovers.forEach(popover => popover.hidePopover());
};

document.addEventListener('mouseover', event => {
  const trigger = event.target.closest('.nav-menu-trigger');
  const content = event.target.closest('.nav-menu-content[popover]');

  if (content) {
    if (closeTimeout) clearTimeout(closeTimeout);
    return;
  }

  if (!trigger) return;

  if (closeTimeout) clearTimeout(closeTimeout);

  const nav = trigger.closest('.nav-menu');
  const targetId = trigger.getAttribute('popovertarget');
  const targetPopover = targetId ? document.getElementById(targetId) : null;

  hidePopovers(nav);

  if (targetPopover && !targetPopover.matches(':popover-open')) {
    targetPopover.showPopover();
  }
});

document.addEventListener('mouseout', event => {
  const destination = event.relatedTarget;
  const menuActive = destination?.closest('.nav-menu, .nav-menu-content[popover]');

  if (!menuActive) {
    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      hidePopovers();
    }, 150);
  }
});