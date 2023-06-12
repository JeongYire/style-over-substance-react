
enum BoxMode{
    idle,edit
}

enum BoxType{
    basic,select
}

enum BasicOptionAnswerType{
    default = 'short',short = 'short',long = 'long',
}



type FormManagerTool = {
    addForm : (type : BoxType) => void,
    deleteForm : (id : number) => void,
    changeForm : (id : number,changeType : BoxType) => void,
}

type FormBoxInfo = {
    id : number,
    type : BoxType,
}

export {BoxMode,BoxType,BasicOptionAnswerType}
export type {FormManagerTool,FormBoxInfo};