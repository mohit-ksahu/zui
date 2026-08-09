document.addEventListener('mouseover', e => {
  const trigger = e.target.closest('.menubar-trigger[popovertarget]');
  if (!trigger) return;

  const container = trigger.closest('.menubar');
  const openPopover = container?.querySelector('[popover]:popover-open');
  const targetPopover = document.getElementById(trigger.getAttribute('popovertarget'));

  if (openPopover && targetPopover && openPopover !== targetPopover) {
    openPopover.hidePopover();
    targetPopover.showPopover();
  }
});