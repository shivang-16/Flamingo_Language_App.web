/// <reference types="vite/client" />

type LanguageType = "hi" | "ja" | "es" | "fr";
 
type WordType = {
    word: string;
    meaning: string;
    options: string[];
}
type QuizState = {
    loading: boolean;
    words : WordType[];
    result: string[];
    error ?: string;

}

type FetchedDataType = {
    translations: {
        text: string
    }[]
}