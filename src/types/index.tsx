
enum BoxMode{
    idle,edit
}

enum BoxType{
    basic,select
}

enum BasicOptionAnswerType{
    default = 'short',short = 'short',long = 'long',
}
type ChoiceValueObject = {
    value : string
}

type ChoiceObject = { 
    id : number,
    valueObject : ChoiceValueObject,
    selected : boolean ,
}

type ChoiceObjectContainer = {
    id : number,
    instance : ChoiceObject[]
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
export type {FormManagerTool,FormBoxInfo,ChoiceObject,ChoiceValueObject,ChoiceObjectContainer};