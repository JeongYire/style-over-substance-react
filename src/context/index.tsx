import { createContext } from "react";
import { FormTool } from "../types";

const FormToolContext = createContext<FormTool>({
    addForm : () => {},
    changeForm : () => {},
    deleteForm : () => {}
})

export { FormToolContext };