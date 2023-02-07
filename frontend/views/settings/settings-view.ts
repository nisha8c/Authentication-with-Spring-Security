import { customElement } from 'lit/decorators.js';
import { View } from '../../views/view';

@customElement('settings-view')

export class SettingsView extends View {
    render() {
    `
    <div>
        <h2>Settings page should be visible to just Admin.</h2>
    </div>
    `
    }
}