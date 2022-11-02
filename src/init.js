import { openForm } from "./form.js";
import { openList, renderTimeTabs } from "./dom.js";

const newProject = document.querySelector(".new-project");

export default function () {
    openList();
    renderTimeTabs();

    newProject.addEventListener("click", () => {
        openForm("New Project");
    })

}