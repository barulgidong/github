'use babel';

import SitusJudiTogelTerpercayaOnline24jam from '../lib/situs-judi-togel-terpercaya-online24jam';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SitusJudiTogelTerpercayaOnline24jam', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('situs-judi-togel-terpercaya-online24jam');
  });

  describe('when the situs-judi-togel-terpercaya-online24jam:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.situs-judi-togel-terpercaya-online24jam')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'situs-judi-togel-terpercaya-online24jam:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.situs-judi-togel-terpercaya-online24jam')).toExist();

        let SitusJudiTogelTerpercayaOnline24jamElement = workspaceElement.querySelector('.situs-judi-togel-terpercaya-online24jam');
        expect(SitusJudiTogelTerpercayaOnline24jamElement).toExist();

        let situs-judi-togel-terpercaya-online24jamPanel = atom.workspace.panelForItem(situs-judi-togel-terpercaya-online24jamElement);
        expect(situs-judi-togel-terpercaya-online24jamPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'situs-judi-togel-terpercaya-online24jam:toggle');
        expect(situs-judi-togel-terpercaya-online24jamPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.situs-judi-togel-terpercaya-online24jam')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'situs-judi-togel-terpercaya-online24jam:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let SitusJudiTogelTerpercayaOnline24jamElement = workspaceElement.querySelector('.situs-judi-togel-terpercaya-online24jam');
        expect(SitusJudiTogelTerpercayaOnline24jamElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'situs-judi-togel-terpercaya-online24jam:toggle');
        expect(SitusJudiTogelTerpercayaOnline24jamElement).not.toBeVisible();
      });
    });
  });
});
