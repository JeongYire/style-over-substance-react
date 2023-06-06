enum BoxMode{
    idle,edit
}

enum BoxType{
    basic,select
}

enum AnswerType{
    short,long
}

type FormTool = {
    addForm : (type : BoxType) => void,
    deleteForm : (id : number) => void,
    changeForm : (id : number,changeType : BoxType) => void,
}

type FormBoxInfo = {
    id : number,
    type : BoxType,
}

export {BoxMode,BoxType,AnswerType}
export type {FormTool,FormBoxInfo};