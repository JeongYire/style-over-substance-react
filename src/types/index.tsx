enum BoxMode{
    idle,edit
}

enum BoxType{
    basic,select
}

type FormTool = {
    addForm : (type : BoxType) => void,
    deleteForm : () => void
}

export {BoxMode,BoxType}
export type {FormTool};