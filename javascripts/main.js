import kjs from "./k";
import drawers from "./widgets/drawers";
import extendingForm from "./widgets/extending-form";
import tabs from "./widgets/tabs";
import checkboxes from "./widgets/chechboxes";

document.addEventListener("DOMContentLoaded", () => {
  kjs({ drawers, extendingForm, tabs, checkboxes }, document);
});
