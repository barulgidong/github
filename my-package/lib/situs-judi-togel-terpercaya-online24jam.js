'use babel';

import SitusJudiTogelTerpercayaOnline24jamView from './situs-judi-togel-terpercaya-online24jam-view';
import { CompositeDisposable } from 'atom';

export default {

  SitusJudiTogelTerpercayaOnline24jamView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.SitusJudiTogelTerpercayaOnline24jamView = new SitusJudiTogelTerpercayaOnline24jamView(state.SitusJudiTogelTerpercayaOnline24jamViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.SitusJudiTogelTerpercayaOnline24jamView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'situs-judi-togel-terpercaya-online24jam:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.SitusJudiTogelTerpercayaOnline24jamView.destroy();
  },

  serialize() {
    return {
      SitusJudiTogelTerpercayaOnline24jamViewState: this.SitusJudiTogelTerpercayaOnline24jamView.serialize()
    };
  },

  toggle() {
    console.log('SitusJudiTogelTerpercayaOnline24jam was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
