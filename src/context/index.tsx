import { createContext } from "react";
import { FormManagerTool } from "../types";

const FormManagerToolContext = createContext<FormManagerTool>({
    addForm : () => {},
    changeForm : () => {},
    deleteForm : () => {}
})

export { FormManagerToolContext };