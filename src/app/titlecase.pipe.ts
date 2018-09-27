import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string){
        // the rise of the planet of the apes
        // The Rise of the Planet of the Apes
        // if first word, capital
        // if of, the, a, lowercase
        // else, capital first letter  
        if(!value) return null;
        
        
        
        let words = value.split(' ');
        for(var i=0; i<words.length; i++) {
            let word = words[i];
            if(this.isPreposition(word) && i>0)
                words[i] = word.toLowerCase();
            else            
                words[i] = this.toTitleCase(word);
            
        }
        return words.join(' ');
    }

    private toTitleCase(word: string): string {
        return word.charAt(0).toUpperCase() + 
            word.substr(1).toLowerCase();
    }

    private isPreposition(word: string): boolean {
        let prepositions = [
            'of',
            'the',
            'a'            
        ];

        return prepositions.includes(word.toLowerCase());
    }
}