enum BoxMode{
    idle,edit
}

enum BoxType{
    basic,select
}

type FormTool = {
    addForm : (type : BoxType) => void,
    deleteForm : () => void,
    changeForm : (id : number,changeType : BoxType) => void,
}

type FormBoxInfo = {
    id : number,
    type : BoxType,
}

export {BoxMode,BoxType}
export type {FormTool,FormBoxInfo};