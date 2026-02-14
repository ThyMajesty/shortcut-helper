# Shortcut Helper

Small KDE Plasma 6 Kwin script to add shortcut functionality that I personally like. I might add more in the future.

**Features**:

- **Win+Up** – Cycle windows between **top-half,top-left,top-right → maximized**, preserves native tiling.  
- **Alt+F4** – Close the active window, or show the logout prompt if on the desktop.

---

## Installation

1. Clone or download this repository.

```bash
git clone https://github.com/thymajesty/shortcut-helper.git
```

2. Copy the folder to your KWin scripts directory, by default:

```bash
cp -r shortcut-helper ~/.local/share/kwin/scripts/
```
or
```bash
ln -s /your/full/path/shortcut-helper ~/.local/share/kwin/scripts/
```

3. Open **System Settings → KWin Scripts** and enable **Shortcut Helper**.  

4. The shortcuts are now active:
   - **Win+Up** → maximize/tile top-half/left/right  
   - **Alt+F4** → close window / logout prompt
_Note: sometimes you have to manually set the shortcuts. Shortcuts → search "Shortcut Helper"._
