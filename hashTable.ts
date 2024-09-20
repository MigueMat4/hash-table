
class HashTable {
    private size: number;
    private data: number[];

    constructor(size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    private hash(key: number): number {
        return key % this.size;
    }

    public insert(key: number): void {
        let index: number = this.hash(key);
        this.data[index] = key;
    }

    public search(key: number): number {
        let index: number = this.hash(key);
        return this.data[index];
    }

    public print(): void {
        let all_data: string = "";
        for (const key of this.data) {
            all_data += key + " "
        }
        console.log(all_data);
    }
}

// main
let tablaHash: HashTable = new HashTable(9);
tablaHash.insert(2);
tablaHash.insert(7);
tablaHash.insert(9);
tablaHash.insert(1111);
tablaHash.print();
// buscar
let claveABuscar:number = 1111;
console.log("La clave " + tablaHash.search(claveABuscar) + " está en la tabla hash");
