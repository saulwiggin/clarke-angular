interface BackPack{
    name: string;
    image: string;
    description: string;
    price: number;
    code: string;
}

export class Pack implements BackPack {
    constructor(
        public name: string,
        public image: string,
        public description: string,
        public price: number,
        public code: string
    ) {}
}
