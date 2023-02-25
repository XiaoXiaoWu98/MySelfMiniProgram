import ui from './ui'

const theme = {
    '--safe-area-top': ui.safeArea.top() + 'px',
    '--safe-area-bottom': ui.safeArea.bottom() + 'px',

    '--nav-bar-height': ui.navigator.height() + 'px',
    '--nav-status-bar-height': ui.navigator.statusBar.height() + 'px',
    '--nav-title-bar-height': ui.navigator.titleBar.height() + 'px'
}

export default theme
