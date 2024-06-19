import { Logger } from '@fixtures/Logger';

export class Letter {
    public logger: Logger = new Logger();

    constructor (public letter: string) {
    }

    public print () {
        this.logger.log(this.letter);
    }
}
