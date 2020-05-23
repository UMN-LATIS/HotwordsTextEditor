/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module basic-styles/code/codeui
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import highlightIcon from '../hotword.svg';

import '../code.css';

const CODE = 'hotword';

/**
 * The code UI feature. It introduces the Code button.
 *
 * @extends module:core/plugin~Plugin
 */
export default class HotwordUI extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {

		const editor = this.editor;
		// const t = editor.t;
		// Add code button to feature components.
		editor.ui.componentFactory.add( CODE, locale => {
			const command = editor.commands.get( CODE );
			const view = new ButtonView( locale );

			view.set( {
				label: 'Hotword',
				icon: highlightIcon,
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( CODE );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
