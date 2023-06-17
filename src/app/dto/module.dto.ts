import { QuestionDTO } from './question.dto';

export class ModuleDTO{
    name:string="";
    description:string="";
    examContent:QuestionDTO[]=[];
}