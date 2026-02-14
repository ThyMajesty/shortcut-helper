function handleShortcutWinUp() {
    const win = workspace.activeWindow;
    if (!win) return;

    if (!win.tile) {
        workspace.slotWindowQuickTileTop();
        return;
    }

    const positionInLayout = win.tile.positionInLayout;

    // Check if top half or top corners
    if ([2, 4, 5].includes(positionInLayout)) {
        workspace.slotWindowMaximize();
    } else {
        workspace.slotWindowQuickTileTop();
    }
}

function handleShortcutAltF4() {
    if (workspace.activeWindow == null || workspace.activeWindow.desktopWindow) {
        callDBus("org.kde.LogoutPrompt", "/LogoutPrompt", "", "promptAll");
    } else {
        workspace.activeWindow.closeWindow();
    }
}

registerShortcut("ShortcutHelperAltF4Desktop", "Shortcut Helper: window close or desktop show logout option", "Alt+F4", handleShortcutAltF4);
registerShortcut("ShortcutHelperWinUpMaximize", "Shortcut Helper: window maximize toggle", "Meta+Up", handleShortcutWinUp);
