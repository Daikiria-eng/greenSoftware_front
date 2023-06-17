import {OptionsDTO} from './options.dto';

export class QuestionDTO{
    questionString:string="";
    options:OptionsDTO[]=[];
    answer:string="";
}