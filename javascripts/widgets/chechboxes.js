function checkboxes(widget) {
  const controllerCB = widget.querySelector("[kjs-role=controlling-checkbox]");
  const relatedCBs = widget.querySelectorAll("[kjs-role=related-checkbox]");

  function handleControllerCBClick(e) {
    if (e.target.checked) {
      relatedCBs.forEach((related) => (related.checked = true));
    } else {
      relatedCBs.forEach((related) => (related.checked = false));
    }
  }

  function handleRelatedCBClick(e) {
    if (controllerCB.checked) {
      controllerCB.indeterminate = true;
    }
    if (controllerCB.indeterminate) {
      const checkedRelatedCB = widget.querySelectorAll(
        "[kjs-role=related-checkbox]:checked"
      );
      if (!checkedRelatedCB.length) {
        controllerCB.indeterminate = false;
        controllerCB.checked = false;
      } else if (checkedRelatedCB.length == relatedCBs.length) {
        controllerCB.indeterminate = false;
        controllerCB.checked = true;
      }
    }
  }

  let actions = [];
  actions.push({
    element: controllerCB,
    event: "change",
    handler: handleControllerCBClick,
  });

  relatedCBs.forEach(function (relatedCB) {
    actions.push({
      element: relatedCB,
      event: "change",
      handler: handleRelatedCBClick,
    });
  });

  return { actions: actions };
}

module.exports = checkboxes;
