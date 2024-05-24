declare module 'typewriter-effect/dist/core' {
    interface TypewriterOptions {
        loop?: boolean;
        delay?: number;
        onCreateTextNode?: (character: string) => Node;
        deleteSpeed?: number;
        autoStart: boolean;
    }

    class Typewriter {
        constructor(element: HTMLElement, options?: TypewriterOptions);
        start(): Typewriter;
        typeString(text: string): Typewriter;
        pauseFor(duration: number): Typewriter;
        deleteChars(num: number): Typewriter;
    }

    export default Typewriter;
}